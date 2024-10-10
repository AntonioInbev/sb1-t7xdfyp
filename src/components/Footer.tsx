import React from 'react'
import { Facebook, Instagram } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">IAFCJ Macuspana</h3>
            <p>Transformando vidas a través de Cristo</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-300"><Facebook /></a>
            <a href="#" className="hover:text-blue-300"><Instagram /></a>
          </div>
        </div>
        <hr className="my-6 border-blue-600" />
        <div className="text-center">
          <p>&copy; 2024 IAFCJ Macuspana. Todos los derechos reservados.</p>
          <div className="mt-2">
            <a href="#" className="hover:text-blue-300 mx-2">Política de Privacidad</a>
            <a href="#" className="hover:text-blue-300 mx-2">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer