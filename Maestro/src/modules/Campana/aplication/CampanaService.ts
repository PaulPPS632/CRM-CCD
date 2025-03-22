import CampanaRepository from "../domain/CampanaRepository";
import Campana from "../domain/Campana";

export default class CampanaService {
    private campanaRepository: CampanaRepository;
    constructor(campanaRepository: CampanaRepository) {
        this.campanaRepository = campanaRepository;
    }

    async createCampana(nombre: string, recCampanaId: number, paginaId: number): Promise<void> {
        const nuevaCampana = new Campana(0, nombre, recCampanaId, paginaId);
        await this.campanaRepository.save(nuevaCampana);
    }

    async getAllCampanas(): Promise<Campana[]> {
        return await this.campanaRepository.findAll();
    }

    async getCampanaById(id: number): Promise<Campana | null> {
        return await this.campanaRepository.findById(id);
    }

    async deleteCampanaById(id: number): Promise<void> {
        return await this.campanaRepository.deleteById(id);
    }

    async updateCampana(campana: Campana): Promise<void> {
        return await this.campanaRepository.update(campana);
    }
}