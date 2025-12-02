// src/sections/Hero.tsx
import React from "react";
import fotoPerfil from "../assets/fotoperfil.jpg";

type HeroProps = {
  nombre?: string;
  fotoUrl?: string; 
};

const Hero: React.FC<HeroProps> = ({ nombre = "Amner", fotoUrl }) => {
  // si se envía fotoUrl, úsalo; si no, usa la imagen importada
  const src = fotoUrl || fotoPerfil;

  return (
    <section className="hero">
      <div className="hero-inner">
        
        {/* Imagen de perfil */}
        <img
          src={src}
          alt={`${nombre} - foto de perfil`}
          className="hero-avatar"
          width={160}
          height={160}
        />

        {/* Texto */}
        <div className="hero-text">
          <h1>Hola, soy {nombre}</h1>
          <p>Soy desarrollador frontend — aquí va una breve introducción.</p>
        </div>

      </div>
    </section>
  );
};

export default Hero;
