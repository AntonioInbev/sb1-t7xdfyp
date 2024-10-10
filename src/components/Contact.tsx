import React from 'react'
import { Mail, Phone, MapPin, User } from 'lucide-react'
import pastor from './images/pastor_pre.jpeg'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contáctanos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Información de Contacto</h3>
            <div className="flex items-center space-x-4">
              <User className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <p className="font-semibold">Pastor</p>
                <p>Aldo Alberto Arena Martinez</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <p className="font-semibold">Teléfono</p>
                <a href="tel:+529381594164" className="hover:text-blue-600">938 159 4164</a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Dirección</p>
                <p>Carr. Belén-Montelargo, Km 10, parada el Guacimo, Macuspana Tabasco</p>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <img 
              src={pastor} 
              alt="Aldo Alberto Arena Martinez" 
              className="w-full h-auto rounded-lg shadow-md"
            />
            <p className="text-center mt-4 text-sm text-gray-600">Pastor Aldo Alberto Arena Martinez</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
