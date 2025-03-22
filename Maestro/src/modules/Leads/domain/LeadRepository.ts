import Lead from "./Lead";

export default interface LeadRepository {
    create(lead: Lead): Promise<Lead>;
    save(lead: Lead): Promise<Lead>;
    findByFullName(fullName: string): Promise<Lead[]>;
    findAll(): Promise<Lead[]>;           
}