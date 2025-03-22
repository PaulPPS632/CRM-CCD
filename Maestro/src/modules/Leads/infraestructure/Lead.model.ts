import { Table, Column, Model, AutoIncrement, DataType, ForeignKey, BelongsTo, PrimaryKey } from 'sequelize-typescript';
import { CampanaModel } from '../../Campana/infraestructure/Campana.model';
import { FormularioModel } from '../../Formulario/infraestructure/Formulario.model';

@Table({ tableName: 'Lead' })
export class LeadModel extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    IdLead!: number;

    @ForeignKey(() => FormularioModel)
    @Column(DataType.INTEGER)
    Formulario_Id!: number;

    @ForeignKey(() => CampanaModel)
    @Column(DataType.INTEGER)
    Campana_Id!: number;

    @Column(DataType.STRING)
    NombreCampana!: string;    

    @Column(DataType.STRING)
    Origen!: string;

    @Column(DataType.STRING)
    NombreAnuncio!: string;

    @Column(DataType.DATE)
    FechaRegistro!: Date;

    @Column(DataType.JSON)
    Data!: {
        Nombre?: string;          // FullName
        Celular?: string;         // PhoneNumber
        Correo?: string;          // Email
        ChatEnVivo?: string;      // InboxUrl
        IdPagina?: number;        // PageID
        IdGrupoAnuncio?: number;  // AdGroupID
    };

    @BelongsTo(() => FormularioModel)
    Formulario!: FormularioModel;
    
    @BelongsTo(() => CampanaModel)
    Campana!: CampanaModel;
}
