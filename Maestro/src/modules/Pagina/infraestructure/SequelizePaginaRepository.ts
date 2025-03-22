import PaginaRepository from "../domain/PaginaRepository"
import Pagina from "../domain/Pagina"
import { PaginaModel } from "./Pagina.model" // Ya no necesitamos PaginaModelFactory
import { Sequelize } from "sequelize-typescript"

export default class SequelizePaginaRepository implements PaginaRepository {
    private db: Sequelize

    constructor(db: Sequelize) {
        this.db = db
    }

    async save(pagina: Pagina): Promise<void> {
        const { IdPagina, Nombre, RedPaginaId } = pagina
        await PaginaModel.create({ IdPagina, Nombre, RedPaginaId }) // Llamado directo
    }

    async update(pagina: Pagina): Promise<void> {
        const { IdPagina, Nombre, RedPaginaId } = pagina
        await PaginaModel.update({ Nombre, RedPaginaId }, { where: { IdPagina } })
    }

    async delete(pagina: Pagina): Promise<void> {
        const { IdPagina } = pagina
        await PaginaModel.destroy({ where: { IdPagina } })
    }

    async getById(IdPagina: number): Promise<Pagina> {
        const pagina = await PaginaModel.findByPk(IdPagina)
        if (!pagina) throw new Error('Pagina not found')
        return pagina
    }

    async getAll(): Promise<Pagina[]> {
        return await PaginaModel.findAll()
    }
}
