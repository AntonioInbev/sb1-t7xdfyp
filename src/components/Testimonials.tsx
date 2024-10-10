import React from 'react'

const testimonials = [
  {
    id: 1,
    name: "María González",
    text: "Encontré una verdadera familia en IAFCJ Macuspana. El amor y apoyo que he recibido aquí han transformado mi vida."
  },
  {
    id: 2,
    name: "Juan Pérez",
    text: "Desde que comencé a asistir a esta iglesia, mi fe ha crecido enormemente. Los mensajes son poderosos y relevantes para mi vida diaria."
  },
  {
    id: 3,
    name: "Ana Martínez",
    text: "El grupo de jóvenes de IAFCJ Macuspana me ha ayudado a mantenerme firme en mi fe y a hacer amigos increíbles que comparten mis valores."
  }
]

const Testimonials: React.FC = () => {
  return (
    <section className="mb-12 bg-blue-100 py-12 rounded-lg">
      <h2 className="text-4xl font-bold text-center mb-8">Testimonios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
            <p className="font-semibold text-right">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials