import React, { useState } from 'react';
import { Link } from 'wouter';
import { Home, Users, Car, Building, Map, Settings, BarChart3, Menu, X } from 'lucide-react';

type MainLayoutProps = {
  children: React.ReactNode;
};

const navItems = [
  { href: '/', label: 'Dashboard', icon: Home },
  { href: '/gestion/personas', label: 'Personas', icon: Users },
  { href: '/gestion/vehiculos', label: 'Vehículos', icon: Car },
  { href: '/gestion/inmuebles', label: 'Inmuebles', icon: Building },
  { href: '/analisis/celulas', label: 'Células', icon: BarChart3 },
  { href: '/mapa', label: 'Mapa Global', icon: Map },
  { href: '/admin', label: 'Administración', icon: Settings },
];

// Componente para la barra lateral, para reutilizarlo
const SidebarContent = () => (
  <>
    <div className="flex items-center mb-8 px-4">
      <ShieldIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
      <h1 className="ml-3 text-xl font-bold text-gray-800 dark:text-white">Consultas</h1>
    </div>
    <nav>
      <ul>
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="flex items-center px-4 py-2 my-1 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </>
);

export function MainLayout({ children }: MainLayoutProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Barra lateral para pantallas grandes (visible siempre) */}
      <aside className="hidden md:flex md:flex-shrink-0 w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700">
        <div className="h-full p-4">
          <SidebarContent />
        </div>
      </aside>

      {/* Menú para móviles */}
      <div className="md:hidden">
        {/* Overlay oscuro cuando el menú está abierto */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black opacity-50 z-20"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}
        {/* Contenido del menú lateral móvil */}
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 z-30 transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="h-full p-4">
            <SidebarContent />
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Barra superior para móviles con el botón de menú */}
        <header className="md:hidden flex items-center justify-between bg-white dark:bg-gray-800 p-4 shadow-md">
          <button onClick={() => setSidebarOpen(true)} className="text-gray-600 dark:text-gray-300">
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex items-center">
            <ShieldIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <h1 className="ml-2 text-lg font-bold text-gray-800 dark:text-white">Consultas</h1>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

// Ícono del escudo
function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}
