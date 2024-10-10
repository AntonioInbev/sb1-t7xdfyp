import React from 'react'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  isMenuOpen: boolean
  toggleMenu: () => void
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold text-blue-600">IAFCJ Macuspana</span>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600">Inicio</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Acerca de</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600">Contacto</a>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100">Inicio</a>
          <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100">Acerca de</a>
          <a href="#contact" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100">Contacto</a>
        </div>
      )}
    </header>
  )
}

export default Header