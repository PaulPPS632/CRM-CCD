import LeadRepository from "../domain/LeadRepository";
import Lead from "../domain/Lead";
import { LeadModel } from "./Lead.model";
import { FormularioModel } from "../../Formulario/infraestructure/Formulario.model";
import Formulario from "../../Formulario/domain/Formulario";

export default class SequelizeLeadRepository implements LeadRepository {

    async findbyId(IdLead: number): Promise<Lead | null> {
        const lead = await LeadModel.findByPk(IdLead);
        if (!lead) return null;
        return new Lead(
            lead.IdLead,
            lead.Formulario_Id,
            lead.Origen,
            lead.NombreAnuncio,
            lead.Campana_Id,
            lead.NombreCampana,
            lead.FechaRegistro,
            lead.Data
        );
    }

    async create(lead: Lead): Promise<void> {
        await LeadModel.create({
            IdLead: lead.IdLead,
            Formulario_Id: lead.Formulario_Id,
            Origen: lead.Origen,
            NombreAnuncio: lead.NombreAnuncio,
            Campana_Id: lead.Campana_Id,
            NombreCampana: lead.NombreCampana,
            FechaRegistro: lead.FechaRegistro,
            Data: lead.Data});
        
    }
    async save(lead: Lead): Promise<Lead> {
        const leadModel = await LeadModel.findByPk(lead.IdLead);
        if (!leadModel) throw new Error('Lead not found');
        leadModel.Formulario_Id = lead.Formulario_Id;
        leadModel.Origen = lead.Origen;
        leadModel.NombreAnuncio = lead.NombreAnuncio;
        leadModel.Campana_Id = lead.Campana_Id;
        leadModel.NombreCampana = lead.NombreCampana;
        leadModel.FechaRegistro = lead.FechaRegistro;
        leadModel.Data = lead.Data;
        await leadModel.save();
        return lead;
    }

    async findByFormId(Formulario_Id: number): Promise<L> {
        const formulario = await FormularioModel.findAll({ 
            where: { IdFormulario: Formulario_Id },
            include: {  } 
        });
        return formulario.map((form) => new Formulario(
            form.getDataValue('Formulario').IdFormulario,
            form.getDataValue('Formulario').Nombre,
        ));
    }

}