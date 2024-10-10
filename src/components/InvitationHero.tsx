import React from 'react'
import heroBackground from './images/church-gathering.jpg'

const InvitationHero: React.FC = () => {
  return (
    <div className="relative bg-blue-600 text-white py-24">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{backgroundImage: `url(${heroBackground})`, opacity: 0.3}}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Bienvenido a IAFCJ Macuspana</h1>
          <p className="text-xl md:text-2xl mb-8">Un lugar donde encontrarás amor, comunidad y propósito</p>
          <a 
            href="#contact" 
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-xl hover:bg-blue-100 transition duration-300"
          >
            Visítanos este domingo
          </a>
        </div>
      </div>
    </div>
  )
}

export default InvitationHero