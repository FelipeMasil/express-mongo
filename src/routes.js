import { Router } from "express";
import SessionController from "./controllers/SessionController";

import UserController from "./controllers/UserController";

const routes = new Router();

routes.post('/users', UserController.create)
routes.post('/session', SessionController.create)

routes.post('/index', UserController.create)

export default routes