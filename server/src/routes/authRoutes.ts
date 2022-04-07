import { Router } from "express";
import { asignaturaController } from '../controllers/asignaturasController';
import { authController } from './../controllers/authController';

class AuthRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
     this.router.post("/", authController.store);

  }
}

const authRoutes = new AuthRoutes();
export default authRoutes.router;
