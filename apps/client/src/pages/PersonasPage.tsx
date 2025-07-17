import { useQuery } from '@tanstack/react-query';
import { type Persona } from '@consultas/shared/schema';
import { PlusCircle, MoreHorizontal } from 'lucide-react';

// Esta función se encarga de hacer la llamada a nuestra API para obtener las personas.
const fetchPersonas = async (): Promise<Persona[]> => {
  // Gracias al proxy que configuramos en vite.config.ts, esta llamada
  // se redirige automáticamente a http://localhost:5001/api/personas.
  const response = await fetch('/api/personas');
  if (!response.ok) {
    throw new Error('La respuesta de la red no fue correcta');
  }
  return response.json();
};

export function PersonasPage() {
  // Usamos el hook useQuery de TanStack Query para manejar la carga de datos.
  // Se encarga del estado de carga, errores y caché automáticamente.
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['personas'], // Una clave única para esta consulta.
    queryFn: fetchPersonas,   // La función que se ejecutará para obtener los datos.
  });

  return (
    <div>
      {/* Encabezado de la página con título y botón de acción */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Gestión de Personas
        </h1>
        <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors w-full md:w-auto justify-center">
          <PlusCircle className="w-5 h-5 mr-2" />
          Añadir Persona
        </button>
      </div>

      {/* Contenedor de la tabla con estilos de tarjeta */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Nombre</th>
                <th scope="col" className="px-6 py-3">Identificación</th>
                <th scope="col" className="px-6 py-3 hidden sm:table-cell">Alias</th>
                <th scope="col" className="px-6 py-3 hidden md:table-cell">Tipo ID</th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Acciones</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading && (
                <tr>
                  <td colSpan={5} className="text-center p-6 text-gray-500 dark:text-gray-400">Cargando...</td>
                </tr>
              )}
              {isError && (
                <tr>
                  <td colSpan={5} className="text-center p-6 text-red-500">
                    Error al cargar los datos: {error.message}
                  </td>
                </tr>
              )}
              {data && data.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center p-6 text-gray-500 dark:text-gray-400">No se encontraron personas.</td>
                </tr>
              )}
              {data?.map((persona: any) => (
                <tr key={persona.id} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {persona.nombre}
                  </th>
                  <td className="px-6 py-4">{persona.identificacion}</td>
                  <td className="px-6 py-4 hidden sm:table-cell">{persona.alias?.join(', ') || 'N/A'}</td>
                  <td className="px-6 py-4 hidden md:table-cell">{persona.tipoIdentificacion || 'N/A'}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1 text-gray-500 hover:text-gray-900 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                      <MoreHorizontal size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
