import { Route, Switch } from 'wouter';
import { MainLayout } from './components/MainLayout';
import { DashboardPage } from './pages/DashboardPage';
// 1. Importamos la nueva página que hemos creado
import { PersonasPage } from './pages/PersonasPage';

function App() {
  return (
    <MainLayout>
      <Switch>
        {/* Ruta para el Dashboard */}
        <Route path="/" component={DashboardPage} />

        {/* 2. Añadimos la nueva ruta para la gestión de personas */}
        <Route path="/gestion/personas" component={PersonasPage} />
        
        {/* Ruta por defecto si no se encuentra ninguna */}
        <Route>
          <div className="text-center py-10">
            <h1 className="text-4xl font-bold">404 - Página No Encontrada</h1>
          </div>
        </Route>
      </Switch>
    </MainLayout>
  );
}

export default App;
