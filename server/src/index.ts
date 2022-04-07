import express, { Application } from "express";

import alumnoRoutes from "./routes/alumnoRoutes";
import asignaturaRoutes from './routes/asignaturaRoutes'
import authRoutes from './routes/authRoutes'
import cors from "cors";
import indexRoutes from "./routes/indexRoutes";
import morgan from "morgan";
import notasRoutes from "./routes/notasRoutes";
import productRoutes from "./routes/alumnoRoutes";
import querystring from 'querystring';
import searchRoutes from './routes/searchRoutes'

class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }
  config(): void {
    this.app.set("port", process.env.port || 3000);
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  routes(): void {
    this.app.use("/", indexRoutes);
    this.app.use("/api/v1/alumno/", alumnoRoutes);
    this.app.use("/api/v1/asignatura/", asignaturaRoutes);
    this.app.use("/api/v1/notas/", notasRoutes);

    this.app.use("/api/v1/login/", authRoutes);
    this.app.use("/api/v1/search/", searchRoutes);


  }

  start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log(`servidor corriendo en el servidor ${this.app.get("port")}`);
    });
  }
}

const server = new Server();
server.start();
