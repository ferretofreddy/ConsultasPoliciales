import { pgTable, serial, text, varchar, integer, timestamp, boolean, jsonb } from 'drizzle-orm/pg-core';
import { relations, type InferSelectModel, type InferInsertModel } from 'drizzle-orm';

// --- TABLAS DE ENTIDADES PRINCIPALES ---

export const personas = pgTable('personas', {
  id: serial('id').primaryKey(),
  nombre: varchar('nombre', { length: 255 }).notNull(),
  identificacion: varchar('identificacion', { length: 100 }).unique().notNull(),
  alias: text('alias').array(),
  telefonos: text('telefonos').array(),
  domicilios: text('domicilios').array(),
  foto: text('foto'),
  posicionEstructura: varchar('posicion_estructura', { length: 100 }),
  tipoIdentificacionId: integer('tipo_identificacion_id').references(() => tiposIdentificacion.id),
});

export const vehiculos = pgTable('vehiculos', {
  id: serial('id').primaryKey(),
  placa: varchar('placa', { length: 50 }).unique().notNull(),
  marca: varchar('marca', { length: 100 }),
  modelo: varchar('modelo', { length: 100 }),
  tipo: varchar('tipo', { length: 100 }),
  color: varchar('color', { length: 50 }),
  ano: integer('ano'),
  propietario: varchar('propietario', { length: 255 }),
});

export const inmuebles = pgTable('inmuebles', {
  id: serial('id').primaryKey(),
  direccion: text('direccion').notNull(),
  tipo: varchar('tipo', { length: 100 }),
  propietario: varchar('propietario', { length: 255 }),
  latitud: varchar('latitud', { length: 50 }),
  longitud: varchar('longitud', { length: 50 }),
  tipoId: integer('tipo_id').references(() => tiposInmuebles.id),
});

export const ubicaciones = pgTable('ubicaciones', {
  id: serial('id').primaryKey(),
  tipo: varchar('tipo', { length: 100 }),
  latitud: varchar('latitud', { length: 50 }).notNull(),
  longitud: varchar('longitud', { length: 50 }).notNull(),
  observaciones: text('observaciones'),
  fecha: timestamp('fecha').defaultNow(),
  tipoId: integer('tipo_id').references(() => tiposUbicaciones.id),
});

// --- TABLAS DE OBSERVACIONES ---

export const personasObservaciones = pgTable('personas_observaciones', {
    id: serial('id').primaryKey(),
    personaId: integer('persona_id').notNull().references(() => personas.id),
    observacion: text('observacion').notNull(),
    fecha: timestamp('fecha').defaultNow(),
    metadata: jsonb('metadata'),
});

export const vehiculosObservaciones = pgTable('vehiculos_observaciones', {
    id: serial('id').primaryKey(),
    vehiculoId: integer('vehiculo_id').notNull().references(() => vehiculos.id),
    observacion: text('observacion').notNull(),
    fecha: timestamp('fecha').defaultNow(),
    metadata: jsonb('metadata'),
});

export const inmueblesObservaciones = pgTable('inmuebles_observaciones', {
    id: serial('id').primaryKey(),
    inmuebleId: integer('inmueble_id').notNull().references(() => inmuebles.id),
    observacion: text('observacion').notNull(),
    fecha: timestamp('fecha').defaultNow(),
    metadata: jsonb('metadata'),
});

export const ubicacionesObservaciones = pgTable('ubicaciones_observaciones', {
    id: serial('id').primaryKey(),
    ubicacionId: integer('ubicacion_id').notNull().references(() => ubicaciones.id),
    observacion: text('observacion').notNull(),
    fecha: timestamp('fecha').defaultNow(),
    metadata: jsonb('metadata'),
});


// --- TABLAS DE CONFIGURACIÓN Y CATÁLOGOS ---

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  password: text('password').notNull(),
  role: text('role', { enum: ['user', 'admin'] }).default('user'),
});

export const tiposIdentificacion = pgTable('tipos_identificacion', {
  id: serial('id').primaryKey(),
  tipo: varchar('tipo', { length: 100 }).unique().notNull(),
  activo: boolean('activo').default(true),
});

export const tiposInmuebles = pgTable('tipos_inmuebles', {
  id: serial('id').primaryKey(),
  nombre: varchar('nombre', { length: 100 }).unique().notNull(),
  activo: boolean('activo').default(true),
});

export const tiposUbicaciones = pgTable('tipos_ubicaciones', {
  id: serial('id').primaryKey(),
  nombre: varchar('nombre', { length: 100 }).unique().notNull(),
  activo: boolean('activo').default(true),
});

export const posicionesEstructura = pgTable('posiciones_estructura', {
  id: serial('id').primaryKey(),
  nombre: varchar('nombre', { length: 100 }).unique().notNull(),
});

// --- TABLAS PARA CÉLULAS Y ORGANIGRAMAS ---

export const celulas = pgTable('celulas', {
  id: serial('id').primaryKey(),
  nombreCelula: varchar('nombre_celula', { length: 255 }).notNull(),
  fechaCreacion: timestamp('fecha_creacion').defaultNow(),
  fechaModificacion: timestamp('fecha_modificacion').defaultNow(),
});

export const nivelesCelula = pgTable('niveles_celula', {
  id: serial('id').primaryKey(),
  nivel: integer('nivel').unique().notNull(),
  posiciones: text('posiciones').array().notNull(),
});

// --- TABLAS DE RELACIONES (MUCHOS A MUCHOS) ---

export const personasPersonas = pgTable('personas_personas', {
  personaId1: integer('persona_id_1').notNull().references(() => personas.id, { onDelete: 'cascade' }),
  personaId2: integer('persona_id_2').notNull().references(() => personas.id, { onDelete: 'cascade' }),
});

export const personasVehiculos = pgTable('personas_vehiculos', {
  personaId: integer('persona_id').notNull().references(() => personas.id, { onDelete: 'cascade' }),
  vehiculoId: integer('vehiculo_id').notNull().references(() => vehiculos.id, { onDelete: 'cascade' }),
});

export const personasInmuebles = pgTable('personas_inmuebles', {
  personaId: integer('persona_id').notNull().references(() => personas.id, { onDelete: 'cascade' }),
  inmuebleId: integer('inmueble_id').notNull().references(() => inmuebles.id, { onDelete: 'cascade' }),
});

export const personasUbicaciones = pgTable('personas_ubicaciones', {
  personaId: integer('persona_id').notNull().references(() => personas.id, { onDelete: 'cascade' }),
  ubicacionId: integer('ubicacion_id').notNull().references(() => ubicaciones.id, { onDelete: 'cascade' }),
});

export const vehiculosVehiculos = pgTable('vehiculos_vehiculos', {
    vehiculoId1: integer('vehiculo_id_1').notNull().references(() => vehiculos.id, { onDelete: 'cascade' }),
    vehiculoId2: integer('vehiculo_id_2').notNull().references(() => vehiculos.id, { onDelete: 'cascade' }),
});

export const vehiculosInmuebles = pgTable('vehiculos_inmuebles', {
  vehiculoId: integer('vehiculo_id').notNull().references(() => vehiculos.id, { onDelete: 'cascade' }),
  inmuebleId: integer('inmueble_id').notNull().references(() => inmuebles.id, { onDelete: 'cascade' }),
});

export const vehiculosUbicaciones = pgTable('vehiculos_ubicaciones', {
  vehiculoId: integer('vehiculo_id').notNull().references(() => vehiculos.id, { onDelete: 'cascade' }),
  ubicacionId: integer('ubicacion_id').notNull().references(() => ubicaciones.id, { onDelete: 'cascade' }),
});

export const inmueblesInmuebles = pgTable('inmuebles_inmuebles', {
    inmuebleId1: integer('inmueble_id_1').notNull().references(() => inmuebles.id, { onDelete: 'cascade' }),
    inmuebleId2: integer('inmueble_id_2').notNull().references(() => inmuebles.id, { onDelete: 'cascade' }),
});

export const inmueblesUbicaciones = pgTable('inmuebles_ubicaciones', {
  inmuebleId: integer('inmueble_id').notNull().references(() => inmuebles.id, { onDelete: 'cascade' }),
  ubicacionId: integer('ubicacion_id').notNull().references(() => ubicaciones.id, { onDelete: 'cascade' }),
});

export const celulasPersonas = pgTable('celulas_personas', {
  celulaId: integer('celula_id').notNull().references(() => celulas.id, { onDelete: 'cascade' }),
  personaId: integer('persona_id').notNull().references(() => personas.id, { onDelete: 'cascade' }),
});


// ===================================================================
// === SECCIÓN AÑADIDA: INFERIR Y EXPORTAR TIPOS PARA TYPESCRIPT ===
// ===================================================================

// Tipos para Personas
export type Persona = InferSelectModel<typeof personas>;
export type NewPersona = InferInsertModel<typeof personas>;

// Tipos para Vehículos
export type Vehiculo = InferSelectModel<typeof vehiculos>;
export type NewVehiculo = InferInsertModel<typeof vehiculos>;

// Tipos para Inmuebles
export type Inmueble = InferSelectModel<typeof inmuebles>;
export type NewInmueble = InferInsertModel<typeof inmuebles>;

// Tipos para Ubicaciones
export type Ubicacion = InferSelectModel<typeof ubicaciones>;
export type NewUbicacion = InferInsertModel<typeof ubicaciones>;

// Tipos para Usuarios
export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;

// Tipos para Células
export type Celula = InferSelectModel<typeof celulas>;
export type NewCelula = InferInsertModel<typeof celulas>;

// Tipos para Catálogos
export type TipoIdentificacion = InferSelectModel<typeof tiposIdentificacion>;
export type NewTipoIdentificacion = InferInsertModel<typeof tiposIdentificacion>;

export type TipoInmueble = InferSelectModel<typeof tiposInmuebles>;
export type NewTipoInmueble = InferInsertModel<typeof tiposInmuebles>;

export type TipoUbicacion = InferSelectModel<typeof tiposUbicaciones>;
export type NewTipoUbicacion = InferInsertModel<typeof tiposUbicaciones>;

export type PosicionEstructura = InferSelectModel<typeof posicionesEstructura>;
export type NewPosicionEstructura = InferInsertModel<typeof posicionesEstructura>;
