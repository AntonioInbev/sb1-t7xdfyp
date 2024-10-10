import React from 'react'
import churchGathering from './images/servicio-dominical.jpeg'
import churchpresent2 from './images/inicio.jpeg'
import famyli from './images/familiapastoral.jpeg'
import work from './images/trabajo.jpeg'
import workchurch from './images/trabajoiglesia.jpeg'
import moviendo from './images/tierra.jpeg'
import pastor from './images/pastor.jpeg'
import present from './images/presentacion.jpeg'
import celula from './images/celula.jpeg'







const photos = [
  {
    id: 3,
    image: workchurch,
    caption: 'Reunión de la Iglesia'
  },
  {
    id: 1,
    image: churchGathering,
    caption: 'Presentación'
  },
  {
    id: 2,
    image: churchpresent2,
    caption: 'Inicio Iglesia'
  },
  {
    id: 4,
    image: famyli,
    caption: 'Familia pastoral'
  },
  {
    id: 5,
    image: work,
    caption: 'Trabajo'
  },
  {
    id: 6,
    image: pastor,
    caption: 'Familia pastoral'
  },
  {
    id: 7,
    image: moviendo,
    caption: 'Moviendo tierra'
  },
  {
    id: 8,
    image: present,
    caption: 'Moviendo tierra'
  },
  {
    id: 9,
    image: celula,
    caption: 'Moviendo tierra'
  },
]

const PhotoGallery: React.FC = () => {
  return (
    <section className="mb-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-800">Nuestra Iglesia en Fotos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div key={photo.id} className="relative overflow-hidden rounded-lg shadow-lg group transform transition-all duration-500 hover:scale-105">
            <img src={photo.image} alt={photo.caption} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold px-4 text-center">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PhotoGallery;
