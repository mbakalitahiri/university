"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const indexController_1 = require("./../controllers/indexController");
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", indexController_1.indexController.index);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
