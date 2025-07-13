// --- CORRECCIÓN AQUÍ: La ruta de importación ahora es directa al archivo schema ---
import { NewPersona, Persona } from '@consultas/shared/schema';
import { PersonasRepository } from './personas.repository';

export class PersonasService {
  private repository: PersonasRepository;

  constructor() {
    this.repository = new PersonasRepository();
  }

  public async getAll(): Promise<any[]> {
    return this.repository.findAll();
  }

  public async getById(id: number): Promise<any> {
    const persona = await this.repository.findById(id);
    if (!persona) {
      throw new Error('Persona no encontrada');
    }
    return persona;
  }

  public async create(data: NewPersona): Promise<Persona> {
    // Regla de negocio: No permitir crear personas con la misma identificación.
    const existing = await this.repository.findByIdentificacion(data.identificacion);
    if (existing) {
      throw new Error('Ya existe una persona con esa identificación.');
    }

    // Si la regla de negocio pasa, llamamos al repositorio para crearla.
    return this.repository.create(data);
  }
}