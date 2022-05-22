import { Router } from "express";

import SessionController from "./controllers/SessionController";

import UserController from "./controllers/UserController";

const routes = new Router();

routes.post('/users', UserController.create)
routes.post('/session', SessionController.create)

//MIDDLEWARE
import auth from "./middleware/auth";
routes.use(auth)

routes.get('/users', UserController.index)

export default routes