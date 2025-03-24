import { Router } from "express";
import LeadController from "@Leads/infraestructure/Lead.controller";

const LeadRouter = Router();

LeadRouter.get("/", LeadController.findAll);
LeadRouter.post("/", LeadController.create);
// router.get("/:id", getLeadById);

export default LeadRouter;
