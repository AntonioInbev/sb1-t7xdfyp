import React from 'react'
import churchGathering from '../assets/images/church-gathering.jpg'

const photos = [
  {
    id: 3,
    image: churchGathering,
    caption: 'Reunión de la Iglesia'
  }
]

const PhotoGallery: React.FC = () => {
  return (
    <section className="mb-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-800">Nuestra Iglesia en Fotos</h2>
      <div className="grid grid-cols-1 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="relative overflow-hidden rounded-lg shadow-md group">
            <img src={photo.image} alt={photo.caption} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-center font-semibold px-4">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PhotoGallery