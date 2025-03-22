import { Request, Response } from "express";
import CampanaService from "../aplication/CampanaService";

export default class CampanaController {
    private campanaService: CampanaService;

    constructor(campanaService: CampanaService) {
        this.campanaService = campanaService;
    }

    async create(req: Request, res: Response) {
        try {
            const { nombre, redCampanaId, paginaId } = req.body;
            await this.campanaService.createCampana(nombre, redCampanaId, paginaId);
            res.status(201).json({ message: "Campaña creada exitosamente" });
        } catch (error) {
            res.status(500).json({ error: "No se creo la Campaña" });
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const campanas = await this.campanaService.getAllCampanas();
            res.status(200).json(campanas);
        } catch (error) {
            res.status(500).json({ error: "No se mostraron" });
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const campana = await this.campanaService.getCampanaById(id);
            res.status(200).json(campana);
        } catch (error) {
            res.status(404).json({ error: "Campaña no encontrada" });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const { nombre, redCampanaId, paginaId } = req.body;
            await this.campanaService.updateCampana(id, nombre, redCampanaId, paginaId);
            res.status(200).json({ message: "Campaña actualizada" });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            await this.campanaService.deleteCampana(id);
            res.status(200).json({ message: "Campaña eliminada" });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
}