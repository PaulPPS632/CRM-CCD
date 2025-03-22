import { z } from "zod";

export const PaginaSchema = z.object({
  IdPagina: z.number().int().positive(),
  Nombre: z.string(),
  RedPaginaId: z.number(),
});

export type PaginaType = z.infer<typeof PaginaSchema>;
