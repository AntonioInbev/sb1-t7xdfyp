import React from 'react'
import { Calendar } from 'lucide-react'
import servicioDominical from './images/service-dominical.jpg'
import estudioBiblico from './images/estudio-biblico.jpg'
import grupoJovenes from './images/grupo-jovenes.jpg'

const events = [
  {
    id: 1,
    title: "Servicio Dominical",
    date: "Todos los domingos, 11:00 AM",
    description: "Únete a nosotros para adorar, aprender y crecer en comunidad.",
    image: servicioDominical
  },
  {
    id: 2,
    title: "Estudio Bíblico",
    date: "Todos los miércoles, 7:00 PM",
    description: "Profundiza en la Palabra de Dios y fortalece tu fe con nuestros estudios bíblicos semanales.",
    image: estudioBiblico
  },
  {
    id: 3,
    title: "Grupo de Jóvenes",
    date: "Sábados, 6:00 PM",
    description: "Un espacio para que los jóvenes se conecten, crezcan en su fe y se diviertan juntos.",
    image: grupoJovenes
  }
]

const UpcomingEvents: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-4xl font-bold text-center mb-8">Nuestras Actividades</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-2 flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {event.date}
              </p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default UpcomingEvents