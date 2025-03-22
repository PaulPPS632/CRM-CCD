import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo, Sequelize } from 'sequelize-typescript';

@Table({ tableName: 'Pagina' })
export class PaginaModel extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    IdPagina!: number;

    @Column(DataType.STRING)
    Nombre!: string;

    @Column(DataType.INTEGER)
    RedPaginaId!: number;    

}
