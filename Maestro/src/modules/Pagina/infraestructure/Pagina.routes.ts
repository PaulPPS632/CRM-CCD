import { Router } from "express";
import PaginaController from "./Pagina.controller";
import PaginaService from "../aplication/PaginaService";
import SequelizePaginaRepository from "./SequelizePaginaRepository";
import { Sequelize } from "sequelize-typescript";

const router = Router();
const sequelize = new Sequelize({ dialect: "postgres", storage: ":memory:" });
const paginaRepository = new SequelizePaginaRepository(sequelize);
const paginaService = new PaginaService(paginaRepository);
const paginaController = new PaginaController(paginaService);

router.post("/paginas", (req, res) => paginaController.create(req, res));
router.get("/paginas", (req, res) => paginaController.getAll(req, res));
router.get("/paginas/:id", (req, res) => paginaController.getById(req, res));
router.put("/paginas/:id", (req, res) => paginaController.update(req, res));
router.delete("/paginas/:id", (req, res) => paginaController.delete(req, res));

export default router;