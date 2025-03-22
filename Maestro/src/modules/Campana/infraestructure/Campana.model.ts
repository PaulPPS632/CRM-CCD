
import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { PaginaModel } from '../../Pagina/infraestructure/Pagina.model';

@Table({ tableName: 'Campana' })
export class CampanaModel extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    IdCampana!: number;

    @Column(DataType.STRING)
    Nombre!: string;

    @Column(DataType.INTEGER)
    RedCampanaId!: string;

    @ForeignKey(() => PaginaModel)
    @Column(DataType.INTEGER)
    Pagina_Id!: number;

    @BelongsTo(() => PaginaModel)
    Pagina!: PaginaModel;
    
}