import { Request, Response } from "express";
import PaginaService from "../aplication/PaginaService";

export default class PaginaController {
    private paginaService: PaginaService;

    constructor(paginaService: PaginaService) {
        this.paginaService = paginaService;
    }

    async create(req: Request, res: Response) {
        try {
            const { nombre, redPaginaId } = req.body;
            await this.paginaService.createPagina(nombre, redPaginaId);
            res.status(201).json({ message: "Página creada exitosamente" });
        } catch (error) {
            res.status(500).json({ error: "No se creo la Página" });
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const paginas = await this.paginaService.getAllPaginas();
            res.status(200).json(paginas);
        } catch (error) {
            res.status(500).json({ error: "No se mostraron" });
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const pagina = await this.paginaService.getPaginaById(id);
            res.status(200).json(pagina);
        } catch (error) {
            res.status(404).json({ error: "Página no encontrada" });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const { nombre, redPaginaId } = req.body;
            await this.paginaService.updatePagina(id, nombre, redPaginaId);
            res.status(200).json({ message: "Página actualizada" });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            await this.paginaService.deletePagina(id);
            res.status(200).json({ message: "Página eliminada" });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
}
