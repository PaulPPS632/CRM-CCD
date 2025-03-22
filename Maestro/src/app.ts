import express, { Application } from "express";
import cors from "cors";

// import UsuarioRoutes from "@Usuario/infrastructure/UsuarioRoutes";

class App {
    private server: Application;

    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    private middlewares(): void {
        this.server.use(cors());
        this.server.use(express.json());
    }

    private routes(): void {
        // this.server.use("/api/usuarios", UsuarioRoutes);
    }

    public getServer(): Application {
        return this.server;
    }
}

export default new App().getServer();