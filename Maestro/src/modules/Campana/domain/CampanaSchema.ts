import { z } from "zod";

export const CampanaSchema = z.object({
  IdCampana: z.number().int().positive(),
  Nombre: z.string(),
  RedCampanaId: z.number(),
  Pagina_Id: z.number(),
});
