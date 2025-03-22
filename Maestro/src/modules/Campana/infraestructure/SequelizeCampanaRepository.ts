import CampanaRepository from "../domain/CampanaRepository";
import Campana from "../domain/Campana";
import { Sequelize } from "sequelize-typescript";
import { CampanaModel } from "./Campana.model";

export default class SequelizeCampanaRepository implements CampanaRepository {
    private db: Sequelize;

    constructor(db: Sequelize) {
        this.db = db;
    }

    async save(campana: Campana): Promise<void> {
        const { IdCampana, Nombre, RedCampanaId, Pagina_Id} = campana;
        await CampanaModel.create({ IdCampana, Nombre, RedCampanaId, Pagina_Id });
    }

    async findAll(): Promise<Campana[]> {
        const campanaModels = await CampanaModel.findAll();
        return campanaModels.map(model => ({
            ...model.toJSON(),
            RedCampanaId: Number(model.RedCampanaId),
        }) as Campana);
    }

    async findById(id: number): Promise<Campana | null> {
        const campanaModel = await CampanaModel.findByPk(id);
        if (!campanaModel) return null;

        const { RedCampanaId, ...rest } = campanaModel.toJSON();
        return { ...rest, RedCampanaId: Number(RedCampanaId) } as Campana;
    }

    async deleteById(id: number): Promise<void> {
        await CampanaModel.destroy({ where: { IdCampana: id } });
    }

    async update(campana: Campana): Promise<void> {
        const [updatedRows] = await CampanaModel.update(campana, {
            where: { IdCampana: campana.IdCampana },
        });

        if (updatedRows === 0) {
            throw new Error(`Campana with ID ${campana.IdCampana} not found`);
        }
    }
}
