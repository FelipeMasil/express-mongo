import { verify } from "jsonwebtoken";

export default async(req, res, next)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({error: "User not authorized!"})
    }

    const [, token] = authHeader.split(" ");
    

    try{
        const decoded = await verify(token, "7cac0a34913ef8a3f4c4bf636d3257eb");
        console.log(decoded)
        return next();
    }catch{
        return res.status(401).json({error: "Invalid jwt token"})

    }
}