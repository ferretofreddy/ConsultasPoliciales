import { useQuery } from '@tanstack/react-query';
import { type Persona } from '@consultas/shared';

// Función que hace la llamada a nuestra API
const fetchPersonas = async (): Promise<Persona[]> => {
  const response = await fetch('/api/personas');
  if (!response.ok) {
    throw new Error('La respuesta de la red no fue correcta');
  }
  return response.json();
};

function App() {
  // Usamos el hook useQuery para obtener los datos
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['personas'], // Una clave única para esta consulta
    queryFn: fetchPersonas,   // La función que se ejecutará para obtener los datos
  });

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Sistema de Consultas Policiales
      </h1>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Lista de Personas</h2>
        
        {/* Mostramos un mensaje de carga */}
        {isLoading && <p className="text-gray-500 dark:text-gray-400">Cargando personas...</p>}

        {/* Mostramos un mensaje de error si la llamada falla */}
        {isError && <p className="text-red-500">Error: {error.message}</p>}

        {/* Si hay datos, los mostramos en una lista */}
        {data && (
          <ul>
            {data.length > 0 ? (
              data.map((persona) => (
                <li key={persona.id} className="border-b border-gray-200 dark:border-gray-700 py-2 text-gray-600 dark:text-gray-300">
                  {persona.nombre} - (ID: {persona.identificacion})
                </li>
              ))
            ) : (
              <p className="text-gray-500 dark:text-gray-400">No hay personas registradas.</p>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
