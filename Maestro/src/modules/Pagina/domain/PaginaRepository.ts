import Pagina from './Pagina'

export default interface PaginaRepository {
    save(pagina: Pagina): Promise<void>
    update(pagina: Pagina): Promise<void>
    delete(pagina: Pagina): Promise<void>
    getById(IdPagina: number): Promise<Pagina>
    getAll(): Promise<Pagina[]>
}