import React from 'react'

const EventDetails: React.FC = () => {
  return (
    <section className="mb-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-800">Acerca de LEVÁNTATE</h2>
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <p className="text-lg mb-6">
          Estimado amigo: Nos complace invitarte a este evento muy especial que se ha preparado para ti y tu familia, donde recibirás un milagro para tu vida y una palabra especial de parte de Dios.
        </p>
        <div className="bg-blue-800 text-white text-center py-4 text-2xl md:text-3xl font-bold mb-6 rounded-lg">
          LEVÁNTATE
        </div>
        <p className="text-sm italic mb-4">
          "Y el que estaba sentado en el trono dijo: He aquí, yo hago nuevas todas las cosas. Y me dijo: Escribe; porque estas palabras son fieles y verdaderas. Y me dijo: Hecho está. Yo soy el Alfa y la Omega, el principio y el fin. Al que tuviere sed, yo le daré gratuitamente de la fuente del agua de la vida."
        </p>
        <p className="text-right text-sm mb-6">Apocalipsis 21:4-5</p>
        <div className="mt-6 space-y-2">
          <p className="font-bold"><span className="text-blue-800">Fecha:</span> 13 DE OCTUBRE</p>
          <p className="font-bold"><span className="text-blue-800">Hora:</span> 11:00 AM</p>
          <p className="font-bold"><span className="text-blue-800">Lugar:</span> Carr. Belén-Montelargo, Km 10, parada el Guacimo, Macuspana Tabasco</p>
        </div>
      </div>
    </section>
  )
}

export default EventDetails