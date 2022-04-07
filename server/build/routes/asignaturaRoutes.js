"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asignaturasController_1 = require("../controllers/asignaturasController");
class AsignaturRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", asignaturasController_1.asignaturaController.index);
        // this.router.get("/:id", ordersController.getOrderById);
        // this.router.post("/", ordersController.store);
        // this.router.put("/:id", ordersController.update);
        // this.router.delete("/:id", ordersController.delete);
    }
}
const asignaturaRoutes = new AsignaturRoutes();
exports.default = asignaturaRoutes.router;
