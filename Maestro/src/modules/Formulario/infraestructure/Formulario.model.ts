import { CampanaModel } from "@Campana/infraestructure/Campana.model";
import { Table, Column, Model, DataType, Unique, ForeignKey, BelongsTo } from "sequelize-typescript";

@Table({ tableName: "Formulario" })
export class FormularioModel extends Model {
  @Column(DataType.STRING)
  name!: string;

  @Unique
  @Column(DataType.STRING)
  RedFormularioId!: string;

  @Column(DataType.INTEGER)
  cursoId!: number;

  @ForeignKey(() => CampanaModel)
  @Column(DataType.INTEGER)
  campanaId!: number;

  @BelongsTo(() => CampanaModel)
  campana!: CampanaModel;
}
