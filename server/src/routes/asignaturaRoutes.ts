import { Router } from "express";
import { asignaturaController } from '../controllers/asignaturasController';

class AsignaturRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get("/", asignaturaController.index);
    // this.router.get("/:id", ordersController.getOrderById);
    // this.router.post("/", ordersController.store);
    // this.router.put("/:id", ordersController.update);
    // this.router.delete("/:id", ordersController.delete);
  }
}

const asignaturaRoutes = new AsignaturRoutes();
export default asignaturaRoutes.router;
