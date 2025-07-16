import { type InferSelectModel, type InferInsertModel } from 'drizzle-orm';
export declare const personas: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "personas";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "personas";
            dataType: "number";
            columnType: "PgSerial";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        nombre: import("drizzle-orm/pg-core").PgColumn<{
            name: "nombre";
            tableName: "personas";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        identificacion: import("drizzle-orm/pg-core").PgColumn<{
            name: "identificacion";
            tableName: "personas";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        alias: import("drizzle-orm/pg-core").PgColumn<{
            name: "alias";
            tableName: "personas";
            dataType: "array";
            columnType: "PgArray";
            data: string[];
            driverParam: string | string[];
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: import("drizzle-orm").Column<{
                name: "alias";
                tableName: "personas";
                dataType: "string";
                columnType: "PgText";
                data: string;
                driverParam: string;
                notNull: false;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, object, object>;
        }, {}, {}>;
        telefonos: import("drizzle-orm/pg-core").PgColumn<{
            name: "telefonos";
            tableName: "personas";
            dataType: "array";
            columnType: "PgArray";
            data: string[];
            driverParam: string | string[];
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: import("drizzle-orm").Column<{
                name: "telefonos";
                tableName: "personas";
                dataType: "string";
                columnType: "PgText";
                data: string;
                driverParam: string;
                notNull: false;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, object, object>;
        }, {}, {}>;
        domicilios: import("drizzle-orm/pg-core").PgColumn<{
            name: "domicilios";
            tableName: "personas";
            dataType: "array";
            columnType: "PgArray";
            data: string[];
            driverParam: string | string[];
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: import("drizzle-orm").Column<{
                name: "domicilios";
                tableName: "personas";
                dataType: "string";
                columnType: "PgText";
                data: string;
                driverParam: string;
                notNull: false;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, object, object>;
        }, {}, {}>;
        foto: import("drizzle-orm/pg-core").PgColumn<{
            name: "foto";
            tableName: "personas";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        posicionEstructura: import("drizzle-orm/pg-core").PgColumn<{
            name: "posicion_estructura";
            tableName: "personas";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        tipoIdentificacionId: import("drizzle-orm/pg-core").PgColumn<{
            name: "tipo_identificacion_id";
            tableName: "personas";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const vehiculos: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "vehiculos";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "vehiculos";
            dataType: "number";
            columnType: "PgSerial";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        placa: import("drizzle-orm/pg-core").PgColumn<{
            name: "placa";
            tableName: "vehiculos";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        marca: import("drizzle-orm/pg-core").PgColumn<{
            name: "marca";
            tableName: "vehiculos";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        modelo: import("drizzle-orm/pg-core").PgColumn<{
            name: "modelo";
            tableName: "vehiculos";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        tipo: import("drizzle-orm/pg-core").PgColumn<{
            name: "tipo";
            tableName: "vehiculos";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        color: import("drizzle-orm/pg-core").PgColumn<{
            name: "color";
            tableName: "vehiculos";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        ano: import("drizzle-orm/pg-core").PgColumn<{
            name: "ano";
            tableName: "vehiculos";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        propietario: import("drizzle-orm/pg-core").PgColumn<{
            name: "propietario";
            tableName: "vehiculos";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const inmuebles: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "inmuebles";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "inmuebles";
            dataType: "number";
            columnType: "PgSerial";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        direccion: import("drizzle-orm/pg-core").PgColumn<{
            name: "direccion";
            tableName: "inmuebles";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        tipo: import("drizzle-orm/pg-core").PgColumn<{
            name: "tipo";
            tableName: "inmuebles";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        propietario: import("drizzle-orm/pg-core").PgColumn<{
            name: "propietario";
            tableName: "inmuebles";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        latitud: import("drizzle-orm/pg-core").PgColumn<{
            name: "latitud";
            tableName: "inmuebles";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        longitud: import("drizzle-orm/pg-core").PgColumn<{
            name: "longitud";
            tableName: "inmuebles";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        tipoId: import("drizzle-orm/pg-core").PgColumn<{
            name: "tipo_id";
            tableName: "inmuebles";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const ubicaciones: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "ubicaciones";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "ubicaciones";
            dataType: "number";
            columnType: "PgSerial";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        tipo: import("drizzle-orm/pg-core").PgColumn<{
            name: "tipo";
            tableName: "ubicaciones";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        latitud: import("drizzle-orm/pg-core").PgColumn<{
            name: "latitud";
            tableName: "ubicaciones";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        longitud: import("drizzle-orm/pg-core").PgColumn<{
            name: "longitud";
            tableName: "ubicaciones";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        observaciones: import("drizzle-orm/pg-core").PgColumn<{
            name: "observaciones";
            tableName: "ubicaciones";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        fecha: import("drizzle-orm/pg-core").PgColumn<{
            name: "fecha";
            tableName: "ubicaciones";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        tipoId: import("drizzle-orm/pg-core").PgColumn<{
            name: "tipo_id";
            tableName: "ubicaciones";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const personasObservaciones: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "personas_observaciones";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "personas_observaciones";
            dataType: "number";
            columnType: "PgSerial";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        personaId: import("drizzle-orm/pg-core").PgColumn<{
            name: "persona_id";
            tableName: "personas_observaciones";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        observacion: import("drizzle-orm/pg-core").PgColumn<{
            name: "observacion";
            tableName: "personas_observaciones";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        fecha: import("drizzle-orm/pg-core").PgColumn<{
            name: "fecha";
            tableName: "personas_observaciones";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        metadata: import("drizzle-orm/pg-core").PgColumn<{
            name: "metadata";
            tableName: "personas_observaciones";
            dataType: "json";
            columnType: "PgJsonb";
            data: unknown;
            driverParam: unknown;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const vehiculosObservaciones: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "vehiculos_observaciones";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "vehiculos_observaciones";
            dataType: "number";
            columnType: "PgSerial";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        vehiculoId: import("drizzle-orm/pg-core").PgColumn<{
            name: "vehiculo_id";
            tableName: "vehiculos_observaciones";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        observacion: import("drizzle-orm/pg-core").PgColumn<{
            name: "observacion";
            tableName: "vehiculos_observaciones";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        fecha: import("drizzle-orm/pg-core").PgColumn<{
            name: "fecha";
            tableName: "vehiculos_observaciones";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        metadata: import("drizzle-orm/pg-core").PgColumn<{
            name: "metadata";
            tableName: "vehiculos_observaciones";
            dataType: "json";
            columnType: "PgJsonb";
            data: unknown;
            driverParam: unknown;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const inmueblesObservaciones: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "inmuebles_observaciones";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "inmuebles_observaciones";
            dataType: "number";
            columnType: "PgSerial";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        inmuebleId: import("drizzle-orm/pg-core").PgColumn<{
            name: "inmueble_id";
            tableName: "inmuebles_observaciones";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        observacion: import("drizzle-orm/pg-core").PgColumn<{
            name: "observacion";
            tableName: "inmuebles_observaciones";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        fecha: import("drizzle-orm/pg-core").PgColumn<{
            name: "fecha";
            tableName: "inmuebles_observaciones";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        metadata: import("drizzle-orm/pg-core").PgColumn<{
            name: "metadata";
            tableName: "inmuebles_observaciones";
            dataType: "json";
            columnType: "PgJsonb";
            data: unknown;
            driverParam: unknown;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const ubicacionesObservaciones: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "ubicaciones_observaciones";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "ubicaciones_observaciones";
            dataType: "number";
            columnType: "PgSerial";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        ubicacionId: import("drizzle-orm/pg-core").PgColumn<{
            name: "ubicacion_id";
            tableName: "ubicaciones_observaciones";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        observacion: import("drizzle-orm/pg-core").PgColumn<{
            name: "observacion";
            tableName: "ubicaciones_observaciones";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        fecha: import("drizzle-orm/pg-core").PgColumn<{
            name: "fecha";
            tableName: "ubicaciones_observaciones";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        metadata: import("drizzle-orm/pg-core").PgColumn<{
            name: "metadata";
            tableName: "ubicaciones_observaciones";
            dataType: "json";
            columnType: "PgJsonb";
            data: unknown;
            driverParam: unknown;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const users: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "users";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "users";
            dataType: "number";
            columnType: "PgSerial";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        email: import("drizzle-orm/pg-core").PgColumn<{
            name: "email";
            tableName: "users";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        password: import("drizzle-orm/pg-core").PgColumn<{
            name: "password";
            tableName: "users";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        role: import("drizzle-orm/pg-core").PgColumn<{
            name: "role";
            tableName: "users";
            dataType: "string";
            columnType: "PgText";
            data: "user" | "admin";
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: ["user", "admin"];
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const tiposIdentificacion: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "tipos_identificacion";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "tipos_identificacion";
            dataType: "number";
            columnType: "PgSerial";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        tipo: import("drizzle-orm/pg-core").PgColumn<{
            name: "tipo";
            tableName: "tipos_identificacion";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        activo: import("drizzle-orm/pg-core").PgColumn<{
            name: "activo";
            tableName: "tipos_identificacion";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const tiposInmuebles: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "tipos_inmuebles";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "tipos_inmuebles";
            dataType: "number";
            columnType: "PgSerial";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        nombre: import("drizzle-orm/pg-core").PgColumn<{
            name: "nombre";
            tableName: "tipos_inmuebles";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        activo: import("drizzle-orm/pg-core").PgColumn<{
            name: "activo";
            tableName: "tipos_inmuebles";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const tiposUbicaciones: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "tipos_ubicaciones";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "tipos_ubicaciones";
            dataType: "number";
            columnType: "PgSerial";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        nombre: import("drizzle-orm/pg-core").PgColumn<{
            name: "nombre";
            tableName: "tipos_ubicaciones";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        activo: import("drizzle-orm/pg-core").PgColumn<{
            name: "activo";
            tableName: "tipos_ubicaciones";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const posicionesEstructura: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "posiciones_estructura";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "posiciones_estructura";
            dataType: "number";
            columnType: "PgSerial";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        nombre: import("drizzle-orm/pg-core").PgColumn<{
            name: "nombre";
            tableName: "posiciones_estructura";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const celulas: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "celulas";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "celulas";
            dataType: "number";
            columnType: "PgSerial";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        nombreCelula: import("drizzle-orm/pg-core").PgColumn<{
            name: "nombre_celula";
            tableName: "celulas";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        fechaCreacion: import("drizzle-orm/pg-core").PgColumn<{
            name: "fecha_creacion";
            tableName: "celulas";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        fechaModificacion: import("drizzle-orm/pg-core").PgColumn<{
            name: "fecha_modificacion";
            tableName: "celulas";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const nivelesCelula: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "niveles_celula";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "niveles_celula";
            dataType: "number";
            columnType: "PgSerial";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        nivel: import("drizzle-orm/pg-core").PgColumn<{
            name: "nivel";
            tableName: "niveles_celula";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        posiciones: import("drizzle-orm/pg-core").PgColumn<{
            name: "posiciones";
            tableName: "niveles_celula";
            dataType: "array";
            columnType: "PgArray";
            data: string[];
            driverParam: string | string[];
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: import("drizzle-orm").Column<{
                name: "posiciones";
                tableName: "niveles_celula";
                dataType: "string";
                columnType: "PgText";
                data: string;
                driverParam: string;
                notNull: false;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, object, object>;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const personasPersonas: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "personas_personas";
    schema: undefined;
    columns: {
        personaId1: import("drizzle-orm/pg-core").PgColumn<{
            name: "persona_id_1";
            tableName: "personas_personas";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        personaId2: import("drizzle-orm/pg-core").PgColumn<{
            name: "persona_id_2";
            tableName: "personas_personas";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const personasVehiculos: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "personas_vehiculos";
    schema: undefined;
    columns: {
        personaId: import("drizzle-orm/pg-core").PgColumn<{
            name: "persona_id";
            tableName: "personas_vehiculos";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        vehiculoId: import("drizzle-orm/pg-core").PgColumn<{
            name: "vehiculo_id";
            tableName: "personas_vehiculos";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const personasInmuebles: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "personas_inmuebles";
    schema: undefined;
    columns: {
        personaId: import("drizzle-orm/pg-core").PgColumn<{
            name: "persona_id";
            tableName: "personas_inmuebles";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        inmuebleId: import("drizzle-orm/pg-core").PgColumn<{
            name: "inmueble_id";
            tableName: "personas_inmuebles";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const personasUbicaciones: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "personas_ubicaciones";
    schema: undefined;
    columns: {
        personaId: import("drizzle-orm/pg-core").PgColumn<{
            name: "persona_id";
            tableName: "personas_ubicaciones";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        ubicacionId: import("drizzle-orm/pg-core").PgColumn<{
            name: "ubicacion_id";
            tableName: "personas_ubicaciones";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const vehiculosVehiculos: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "vehiculos_vehiculos";
    schema: undefined;
    columns: {
        vehiculoId1: import("drizzle-orm/pg-core").PgColumn<{
            name: "vehiculo_id_1";
            tableName: "vehiculos_vehiculos";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        vehiculoId2: import("drizzle-orm/pg-core").PgColumn<{
            name: "vehiculo_id_2";
            tableName: "vehiculos_vehiculos";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const vehiculosInmuebles: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "vehiculos_inmuebles";
    schema: undefined;
    columns: {
        vehiculoId: import("drizzle-orm/pg-core").PgColumn<{
            name: "vehiculo_id";
            tableName: "vehiculos_inmuebles";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        inmuebleId: import("drizzle-orm/pg-core").PgColumn<{
            name: "inmueble_id";
            tableName: "vehiculos_inmuebles";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const vehiculosUbicaciones: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "vehiculos_ubicaciones";
    schema: undefined;
    columns: {
        vehiculoId: import("drizzle-orm/pg-core").PgColumn<{
            name: "vehiculo_id";
            tableName: "vehiculos_ubicaciones";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        ubicacionId: import("drizzle-orm/pg-core").PgColumn<{
            name: "ubicacion_id";
            tableName: "vehiculos_ubicaciones";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const inmueblesInmuebles: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "inmuebles_inmuebles";
    schema: undefined;
    columns: {
        inmuebleId1: import("drizzle-orm/pg-core").PgColumn<{
            name: "inmueble_id_1";
            tableName: "inmuebles_inmuebles";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        inmuebleId2: import("drizzle-orm/pg-core").PgColumn<{
            name: "inmueble_id_2";
            tableName: "inmuebles_inmuebles";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const inmueblesUbicaciones: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "inmuebles_ubicaciones";
    schema: undefined;
    columns: {
        inmuebleId: import("drizzle-orm/pg-core").PgColumn<{
            name: "inmueble_id";
            tableName: "inmuebles_ubicaciones";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        ubicacionId: import("drizzle-orm/pg-core").PgColumn<{
            name: "ubicacion_id";
            tableName: "inmuebles_ubicaciones";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const celulasPersonas: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "celulas_personas";
    schema: undefined;
    columns: {
        celulaId: import("drizzle-orm/pg-core").PgColumn<{
            name: "celula_id";
            tableName: "celulas_personas";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        personaId: import("drizzle-orm/pg-core").PgColumn<{
            name: "persona_id";
            tableName: "celulas_personas";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export type Persona = InferSelectModel<typeof personas>;
export type NewPersona = InferInsertModel<typeof personas>;
export type Vehiculo = InferSelectModel<typeof vehiculos>;
export type NewVehiculo = InferInsertModel<typeof vehiculos>;
export type Inmueble = InferSelectModel<typeof inmuebles>;
export type NewInmueble = InferInsertModel<typeof inmuebles>;
export type Ubicacion = InferSelectModel<typeof ubicaciones>;
export type NewUbicacion = InferInsertModel<typeof ubicaciones>;
export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;
export type Celula = InferSelectModel<typeof celulas>;
export type NewCelula = InferInsertModel<typeof celulas>;
export type TipoIdentificacion = InferSelectModel<typeof tiposIdentificacion>;
export type NewTipoIdentificacion = InferInsertModel<typeof tiposIdentificacion>;
export type TipoInmueble = InferSelectModel<typeof tiposInmuebles>;
export type NewTipoInmueble = InferInsertModel<typeof tiposInmuebles>;
export type TipoUbicacion = InferSelectModel<typeof tiposUbicaciones>;
export type NewTipoUbicacion = InferInsertModel<typeof tiposUbicaciones>;
export type PosicionEstructura = InferSelectModel<typeof posicionesEstructura>;
export type NewPosicionEstructura = InferInsertModel<typeof posicionesEstructura>;
//# sourceMappingURL=schema.d.ts.map