import { Request, Response } from "express";
import Lead from "../domain/Lead"; // Asegúrate de que la ruta sea correcta
import LeadRepository from "@Leads/domain/LeadRepository"; // Asegúrate de que la ruta sea correcta
import SequelizeLeadRepository from "@Leads/infraestructure/SequelizeLeadRepository";
import { LeadSchema } from "../domain/Lead.schema";
import LeadService from "../application/LeadService";

const leadRepository: LeadRepository = new SequelizeLeadRepository();
const leadService = new LeadService(leadRepository);


export default class LeadController {
  // Array de Leads en memoria (simulando una base de datos)
  leads: Lead[] = [
    new Lead(
      1, // IdLead
      101, // Formulario_Id
      "Facebook", // Origen
      "Adset de Invierno 2023", // NombreAnuncio
      201, // Campana_Id
      "Campaña de Navidad 2023", // NombreCampana
      new Date(), // FechaRegistro
      {
        Nombre: "Juan Pérez",
        Celular: "+51987654321",
        Correo: "juan@example.com",
        ChatEnVivo: "https://facebook.com/messages/12345",
        IdPagina: 301,
        IdGrupoAnuncio: 401,
      }
    ),
    new Lead(
      2, // IdLead
      102, // Formulario_Id
      "Google Ads", // Origen
      "Adset de Verano 2023", // NombreAnuncio
      202, // Campana_Id
      "Campaña de Verano 2023", // NombreCampana
      new Date(), // FechaRegistro
      {
        Nombre: "Ana Gómez",
        Celular: "+51987654322",
        Correo: "ana@example.com",
        ChatEnVivo: "https://facebook.com/messages/12346",
        IdPagina: 302,
        IdGrupoAnuncio: 402,
      }
    ),
  ];

  // Obtener todos los Leads
  getLeads = (req: Request, res: Response) => {
    res.json(this.leads);
  };

  // Crear un nuevo Lead
  static async createLead(input: unknown) {
          const validatedData = LeadSchema.parse(input);
          // Crea una ueva instancia en la entidad Lead
          const newLead = new Lead(
              0, // Temporal, la DB lo asigna
              validatedData.Formulario_Id,
              validatedData.Origen,
              validatedData.NombreAnuncio,
              validatedData.Campana_Id,
              validatedData.NombreCampana,
              new Date(),
              validatedData.Data
          );
  
          // 3. Guardar el Lead en el repositorio
          const savedLead = await leadRepository.save(newLead);
  
          // 4. Retornar el Lead con el IdLead asignado
          return savedLead;
      }
      
}
