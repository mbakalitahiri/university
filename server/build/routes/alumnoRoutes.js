"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alumnoController_1 = require("../controllers/alumnoController");
const express_1 = require("express");
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", alumnoController_1.alumnoController.index);
        this.router.get("/:id", alumnoController_1.alumnoController.getAlumnoById);
        this.router.post("/", alumnoController_1.alumnoController.store);
        // this.router.put("/:id", productsController.update);
        this.router.delete("/:id", alumnoController_1.alumnoController.delete);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
