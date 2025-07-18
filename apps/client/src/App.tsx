    import { Route, Switch, Redirect } from 'wouter';
    import { MainLayout } from './components/MainLayout';
    import { DashboardPage } from './pages/DashboardPage';
    import { PersonasPage } from './pages/PersonasPage';
    import { LoginPage } from './pages/LoginPage';
    import { useAuth } from './contexts/AuthContext';

    // Componente para proteger rutas
    const PrivateRoute = ({ component: Component, ...rest }: any) => {
      const { isAuthenticated } = useAuth();
      return isAuthenticated ? <Route {...rest} component={Component} /> : <Redirect to="/login" />;
    };

    function App() {
      const { isAuthenticated, isLoading } = useAuth();

      // Mientras se verifica la sesión, mostramos un loader
      if (isLoading) {
        return <div className="flex items-center justify-center h-screen">Cargando...</div>;
      }

      return (
        <Switch>
          <Route path="/login" component={LoginPage} />
          
          {/* Si el usuario no está autenticado, cualquier otra ruta lo redirige al login */}
          {!isAuthenticated && <Redirect to="/login" />}

          {/* Si está autenticado, muestra el layout principal con las rutas protegidas */}
          <MainLayout>
            <PrivateRoute path="/" component={DashboardPage} />
            <PrivateRoute path="/gestion/personas" component={PersonasPage} />
            {/* Aquí irán las demás rutas protegidas */}
          </MainLayout>
        </Switch>
      );
    }

    export default App;
    