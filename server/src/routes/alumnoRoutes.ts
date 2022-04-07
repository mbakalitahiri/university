import { alumnoController } from '../controllers/alumnoController';
 import { Router } from "express";
class GamesRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get("/", alumnoController.index);
    this.router.get("/:id", alumnoController.getAlumnoById);
    this.router.post("/", alumnoController.store);
    // this.router.put("/:id", productsController.update);
     this.router.delete("/:id", alumnoController.delete);
  }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;
