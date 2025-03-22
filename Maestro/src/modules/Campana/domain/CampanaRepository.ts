import Campana from './Campana';

export default interface CampanaRepository {
    save(campana: Campana): Promise<void>;
    findAll(): Promise<Campana[]>;
    findById(id: number): Promise<Campana | null>;
    deleteById(id: number): Promise<void>;
    update(campana: Campana): Promise<void>;
}