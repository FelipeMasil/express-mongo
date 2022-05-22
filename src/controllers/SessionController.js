import { sign } from 'jsonwebtoken'
import User from '../schemas/User';
import { compare } from 'bcryptjs'
import { response } from 'express';

class SessionController{
    async create(req, res){
        const { username, password } = req.body;

        //Verifica se o usuário existe no sistema
        const user = await User.findOne({ username })
        if(!user){
            return res.status(404).json({ message: "User not found."})
        }

        //Verifica se a senha esta correta
        const matchPassword = await compare(password, user.password)
        if(!matchPassword){
            return res.status(404).json({ message: "Incorrect username or password"})
        }

        const token = sign({}, "7cac0a34913ef8a3f4c4bf636d3257eb", {
            subject: new String(user._id),
            expiresIn: "1d"
        })

        return res.json({
            token,
            user
        })
    }
}

export default new SessionController()