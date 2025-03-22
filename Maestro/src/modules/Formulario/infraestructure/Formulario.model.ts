import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table({ tableName: 'Formulario' })
export class FormularioModel extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    IdFormulario!: number;

    // RedFormularioId
    // Bot_Id solo number

    @Column(DataType.INTEGER)
    Curso_Id!: number;

    @Column(DataType.STRING)
    NombreFormulario!: string;

    @BelongsTo(() => CursoModel)
    Curso!: CursoModel;

}