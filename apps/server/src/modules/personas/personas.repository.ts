import { eq } from 'drizzle-orm';
import { db } from '../../config/db';
// --- CORRECCIÓN AQUÍ: La ruta de importación ahora es directa al archivo schema ---
import { personas, tiposIdentificacion, NewPersona, Persona } from '@consultas/shared/schema';

export class PersonasRepository {

  public async findAll(): Promise<any[]> {
    // Usamos Drizzle con un JOIN para obtener también el nombre del tipo de identificación
    return await db.select({
        id: personas.id,
        nombre: personas.nombre,
        identificacion: personas.identificacion,
        alias: personas.alias,
        foto: personas.foto,
        tipoIdentificacion: tiposIdentificacion.tipo
      })
      .from(personas)
      .leftJoin(tiposIdentificacion, eq(personas.tipoIdentificacionId, tiposIdentificacion.id))
      .orderBy(personas.id);
  }

  public async findById(id: number): Promise<any> {
    const [persona] = await db.select({
        id: personas.id,
        nombre: personas.nombre,
        identificacion: personas.identificacion,
        alias: personas.alias,
        telefonos: personas.telefonos,
        domicilios: personas.domicilios,
        foto: personas.foto,
        posicionEstructura: personas.posicionEstructura,
        tipoIdentificacion: tiposIdentificacion.tipo
      })
      .from(personas)
      .leftJoin(tiposIdentificacion, eq(personas.tipoIdentificacionId, tiposIdentificacion.id))
      .where(eq(personas.id, id));

    return persona;
  }

  public async findByIdentificacion(identificacion: string): Promise<Persona | undefined> {
    // Usamos db.query, que es una forma más moderna y eficiente que provee Drizzle
    return await db.query.personas.findFirst({
      where: eq(personas.identificacion, identificacion),
    });
  }

  public async create(data: NewPersona): Promise<Persona> {
    const [nuevaPersona] = await db.insert(personas).values(data).returning();
    return nuevaPersona;
  }
}