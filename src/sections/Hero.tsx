// src/sections/Hero.tsx
import React from "react";

type HeroProps = {
  nombre?: string;
  fotoUrl?: string;
};

const Hero: React.FC<HeroProps> = ({ nombre = "Amner", fotoUrl }) => {
  const src = fotoUrl || "/fotoperfil.jpg";

  return (
    <section className="hero">
      <div className="hero-inner">
        <img
          src={src}
          alt={`${nombre} - foto de perfil`}
          className="hero-avatar"
          width={160}
          height={160}
        />
        <div className="hero-text">
          <h1>Hola, soy {nombre}</h1>
          <p>Soy desarrollador frontend — aquí va una breve introducción.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
