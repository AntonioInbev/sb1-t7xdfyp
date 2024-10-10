import React from 'react'
import levantateLogo from './images/logo.png'

const LevantateHero: React.FC = () => {
  return (
    <div className="relative bg-blue-800 text-white py-16 md:py-24">
      <div 
        className="absolute inset-0 bg-cover bg-center"

      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <img src={levantateLogo} alt="Levantate Logo" className="mx-auto mb-8 w-48 md:w-64" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">LEVÁNTATE</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Un evento especial donde recibirás un milagro para tu vida y una palabra especial de parte de Dios.</p>
          <a 
            href="#contact" 
            className="bg-white text-blue-800 px-6 py-3 rounded-full font-semibold text-lg md:text-xl hover:bg-blue-100 transition duration-300 inline-block"
          >
            Asiste este 13 de Octubre
          </a>
        </div>
      </div>
    </div>
  )
}

export default LevantateHero