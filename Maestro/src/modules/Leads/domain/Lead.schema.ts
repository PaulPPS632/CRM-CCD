// modules/Leads/domain/ports/Lead.schema.ts
import { z } from "zod";

// Esquema para el campo "Data"
const LeadDataSchema = z.object({
  Nombre: z.string().optional(),
  Celular: z.string().regex(/^\d{9,15}$/).optional(),
  Correo: z.string().email().optional(),
  ChatEnVivo: z.string().url().optional(),
  IdPagina: z.number().int().positive().optional(),
  IdGrupoAnuncio: z.number().int().positive().optional(),
});

// Esquema principal para la entidad Lead
export const LeadSchema = z.object({
  IdLead: z.number().int().positive(),
  Formulario_Id: z.number().int().positive(),
  Origen: z.string().min(3).max(50),
  NombreAnuncio: z.string().min(3).max(100),
  Campana_Id: z.number().int().positive(),
  NombreCampana: z.string().min(3).max(100),
  FechaRegistro: z.date().default(() => new Date()), // Fecha generada automáticamente
  Data: LeadDataSchema,
});

export type LeadType = z.infer<typeof LeadSchema>;