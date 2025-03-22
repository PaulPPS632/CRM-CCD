// src/modules/leads/application/LeadService.ts
import LeadRepository from "../domain/LeadRepository";
import Lead from "../domain/Lead";

export default class LeadService {
    constructor(private readonly LeadRepository: LeadRepository) {}

    async createLead(Lead: Lead): Promise<void> {
        await this.LeadRepository.createLead(Lead);
    }

    async getLeadById(leadId: number): Promise<Lead | null> {
        return this.LeadRepository.findByLeadId(leadId);
    }

    async getLeadsByFormId(formId: number): Promise<Lead[]> {
        return this.LeadRepository.findByFormId(formId);
    }

    async getLeadsByCampaignId(campaignId: number): Promise<Lead[]> {
        return this.LeadRepository.findByCampaignId(campaignId);
    }

    async getLeadsByAdGroupId(adGroupId: number): Promise<Lead[]> {
        return this.LeadRepository.findByAdGroupId(adGroupId);
    }

    async getLeadsByPageId(pageId: number): Promise<Lead[]> {     
        return this.LeadRepository.findByPageId(pageId);
    }

    async getLeadsByEmail(email: string): Promise<Lead[]> {
        return this.LeadRepository.findByEmail(email);
    }

    async getLeadsByInboxUrl(inboxUrl: string): Promise<Lead[]> {
        return this.LeadRepository.findByInboxUrl(inboxUrl);
    }

    async getLeadsByFullName(fullName: string): Promise<Lead[]> {
        return this.LeadRepository.findByFullName(fullName);
    }

    async getAllLeads(): Promise<Lead[]> {
        return this.LeadRepository.findAll();
    }
}   