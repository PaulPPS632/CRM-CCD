import PaginaRepository from "../domain/PaginaRepository";
import Pagina from "../domain/Pagina";

export default class PaginaService {
    private paginaRepository: PaginaRepository;

    constructor(paginaRepository: PaginaRepository) {
        this.paginaRepository = paginaRepository;
    }

    async createPagina(nombre: string, redPaginaId: number): Promise<void> {
        const nuevaPagina = new Pagina(0, nombre, redPaginaId); // IdPagina se genera automáticamente
        await this.paginaRepository.save(nuevaPagina);
    }

    async getPaginaById(id: number): Promise<Pagina> {
        return await this.paginaRepository.getById(id);
    }

    async getAllPaginas(): Promise<Pagina[]> {
        return await this.paginaRepository.getAll();
    }

    async updatePagina(id: number, nombre: string, redPaginaId: number): Promise<void> {
        const pagina = new Pagina(id, nombre, redPaginaId);
        await this.paginaRepository.update(pagina);
    }

    async deletePagina(id: number): Promise<void> {
        const pagina = new Pagina(id, "", 0);
        await this.paginaRepository.delete(pagina);
    }
}