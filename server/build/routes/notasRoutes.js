"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notasController_1 = require("../controllers/notasController");
class NotasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", notasController_1.notasController.index);
        // this.router.get("/:id", ordersController.getOrderById);
        // this.router.post("/", ordersController.store);
        // this.router.put("/:id", ordersController.update);
        // this.router.delete("/:id", ordersController.delete);
    }
}
const notasRoutes = new NotasRoutes();
exports.default = notasRoutes.router;
