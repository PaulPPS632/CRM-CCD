import { Router } from "express";
import LeadController from "@Leads/infraestructure/Lead.controller";

const router = Router();

// router.get("/", LeadController.getLeads);
router.post("/", LeadController.createLead);
// router.get("/:id", getLeadById);

export default router;
