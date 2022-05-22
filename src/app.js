import express from "express";

import mongoose from "mongoose";
import routes from "./routes";


class App{
    constructor(){
        this.server = express();
        this.middleware()

        this.database();
        this.routes();
    }

    middleware(){
        this.server.use(express.json())
    }

    database(){
        mongoose.connect("mongodb+srv://felipe:VLSV9z09aU4kbwGC@cluster0.tm0ts.mongodb.net/?retryWrites=true&w=majority", 
        {useNewUrlParser: true},
        {useUnifiedTopology: true}
        )
    }

    routes(){
        this.server.use(routes);
    }
}


export default new App().server