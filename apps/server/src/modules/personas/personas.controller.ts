import { Request, Response } from 'express';
import { PersonasService } from './personas.service';

export class PersonasController {
  private service: PersonasService;

  constructor() {
    this.service = new PersonasService();
  }

  public getAll = async (req: Request, res: Response) => {
    try {
      const personas = await this.service.getAll();
      res.json(personas);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  public getById = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id, 10);
      const persona = await this.service.getById(id);
      res.json(persona);
    } catch (error: any) {
      // Si el servicio lanza el error 'Persona no encontrada', devolvemos 404.
      if (error.message === 'Persona no encontrada') {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: error.message });
    }
  };

  public create = async (req: Request, res: Response) => {
    try {
      const nuevaPersona = req.body;
      const personaCreada = await this.service.create(nuevaPersona);
      res.status(201).json(personaCreada);
    } catch (error: any) {
      // Si el servicio lanza el error de duplicado, devolvemos 400.
      if (error.message.includes('Ya existe')) {
        return res.status(400).json({ message: error.message });
      }
      res.status(500).json({ message: error.message });
    }
  };
}