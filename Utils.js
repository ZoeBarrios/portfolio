export const PROYECTOS = {
  1: {
    nombre: "Juego de la memoria",
    descripcion:
      "Es un juego de la memoria que presenta 3 niveles de dificultad y permite almacenar en el navegador los usuarios y puntuaciones de los mismos.",
    deploy: "https://juego-memoria-neon.vercel.app/",
    github: "https://github.com/ZoeBarrios/JuegoMemoria",
    img: "/img/proyectos/memoria.png",
    tecnologias: ["Javascript", "HTML", "CSS"],
    color: "#fad3cf",
  },

  3: {
    nombre: "Stoom",
    descripcion:
      "Es una pagina que consume la Api Rawg para acceder a videojuegos y manipular de diversas formas los datos. Es un proyecto de la facultad para poder implementar nuestras habilidades en javascript vanilla.",
    deploy: "https://stoom-labo.vercel.app/",
    github: "https://github.com/ZoeBarrios/Stoom",
    img: "/img/proyectos/stoom.png",
    tecnologias: ["Javascript", "HTML", "CSS", "GitHub", "Upstash"],
    color: "#1e549f",
  },
  4: {
    nombre: "Reloj de Ajedrez",
    descripcion:
      "Es un reloj de tiempo de ajedrez con diferentes modalidades hecho en React.",
    deploy: "https://chess-clock-lac.vercel.app/",
    github: "https://github.com/ZoeBarrios/chess-clock",
    img: "/img/proyectos/ajedrez.png",
    tecnologias: ["React", "HTML", "CSS"],
    color: "#606470",
  },
  5: {
    nombre: "MyGif",
    descripcion:
      "Es una aplicacion creada con React,TypeScript y Tailwind utilizando la API de Giphy y una base de datos upstash-redis que permite buscar gifs, crear usuarios, guardar los gifs como favoritos, cambiar la foto de perfil, etc..",
    deploy: "https://my-gif.vercel.app/",
    github: "https://github.com/ZoeBarrios/MyGif",
    img: "/img/proyectos/mygif.png",
    tecnologias: ["React", "TypeScript", "Tailwind", "Upstash"],
    color: "#f8da5b",
  },
  6: {
    nombre: "Generador de contraseñas aleatorias",
    descripcion:
      "Es una aplicación hecha en React que permite generar contraseñas aleatorias y verificar la seguridad de tus contraseñas. (basandose en la longitud de las mismas)",
    deploy: "https://password-generator-mauve-tau.vercel.app/",
    github: "https://github.com/ZoeBarrios/password-generator",
    img: "/img/proyectos/password.png",
    tecnologias: ["React", "HTML", "CSS"],
    color: "#afc5ff",
  },
  7: {
    nombre: "MarketHub",
    descripcion:
      "Es una aplicación hecha en React y ASP.NET WEB API que permite comprar y vender tus productos favoritos.",
    img: "/img/proyectos/markethub.png",
    github: "https://github.com/ZoeBarrios/MarketHub",
    tecnologias: ["React", "HTML", "CSS", "ASP.NET", "JWT", "SQL SERVER"],
    color: "#fecea8",
  },
};
export const TECNOLOGIAS = {
  React: {
    className: "fa-brands fa-react",
  },
  Javascript: { className: "fa-brands fa-js" },
  HTML: {
    className: "fa-brands fa-html5",
  },
  CSS: { className: "fa-brands fa-css3-alt" },
  JWT: { img: "/img/tecnologias/jwt.svg" },

  GitHub: { className: "fa-brands fa-github" },
  TypeScript: { img: "/img/tecnologias/typescript.webp" },
  Tailwind: { img: "/img/tecnologias/tailwind.png" },
  Upstash: { img: "/img/tecnologias/upstash.png" },
  "ASP.NET": { img: "/img/tecnologias/asp.svg" },
  "SQL SERVER": { img: "/img/tecnologias/sqlserver.png" },
};
