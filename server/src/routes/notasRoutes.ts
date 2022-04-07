import { Router } from "express";
import { notasController } from '../controllers/notasController';

class NotasRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get("/", notasController.index);
    // this.router.get("/:id", ordersController.getOrderById);
    // this.router.post("/", ordersController.store);
    // this.router.put("/:id", ordersController.update);
    // this.router.delete("/:id", ordersController.delete);
  }
}

const notasRoutes = new NotasRoutes();
export default notasRoutes.router;
