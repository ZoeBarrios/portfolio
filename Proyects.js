import { LANGUAJES } from "./src/utils/language";

export const PROYECTOS = {
  1: {
    nombre: "Juego de la memoria",
    descripcion: {
      [LANGUAJES.ESP]:
        "Es un juego de la memoria que presenta 3 niveles de dificultad y permite almacenar en el navegador los usuarios y puntuaciones de los mismos. Presenta un diseño amigable y divertido para todas las edades. ",
      [LANGUAJES.ENG]:
        "It is a memory game that presents 3 levels of difficulty and allows you to store users and scores in the browser. It has a friendly and fun design for all ages.",
    },
    deploy: "https://juego-memoria-neon.vercel.app/",
    github: "https://github.com/ZoeBarrios/JuegoMemoria",
    img: "/img/proyectos/memoria.png",
    tecnologias: ["Javascript", "HTML", "CSS"],
    color: "#fad3cf",
  },

  3: {
    nombre: "Stoom",
    descripcion: {
      [LANGUAJES.ENG]:
        "Stoom is a platform that allows you to access a catalog of games and access information about them, such as some stores where they are available, their price, etc. In addition, it allows you to create an account and save your favorite games.",
      [LANGUAJES.ESP]:
        "Stoom es una plataforma que permite acceder a un catalogo de juegos y poder acceder a información de los mismos, tal como algunas tiendas en las que se encuentran disponibles, su precio, etc. Ademas, permite crear una cuenta y guardar tus juegos favoritos.",
    },

    deploy: "https://stoom-labo.vercel.app/",
    github: "https://github.com/ZoeBarrios/Stoom",
    img: "/img/proyectos/stoom.png",
    tecnologias: ["Javascript", "HTML", "CSS", "GitHub", "Upstash"],
    color: "#1e549f",
  },
  4: {
    nombre: "Reloj de Ajedrez",
    descripcion: {
      [LANGUAJES.ESP]:
        "Es un reloj de ajedrez hecho en React. Este permite llevar el tiempo de cada jugador. Contamos con varias modalidades para poder calcular el tiempo de cada jugador, ademas podes guardar el reloj y volver a cargarlo cuando quieras.",
      [LANGUAJES.ENG]:
        "It is a chess clock made in React. This allows you to keep track of each player's time. We have several modalities to be able to calculate the time of each player, you can also save the clock and reload it whenever you want.",
    },
    deploy: "https://chess-clock-lac.vercel.app/",
    github: "https://github.com/ZoeBarrios/chess-clock",
    img: "/img/proyectos/ajedrez.png",
    tecnologias: ["React", "HTML", "CSS"],
    color: "#606470",
  },
  5: {
    nombre: "MyGif",
    descripcion: {
      [LANGUAJES.ESP]:
        "Es una aplicación hecha en React que permite buscar y guardar gifs. Ademas, permite crear una cuenta y guardar tus gifs favoritos. Para la persistencia de datos se utilizo Upstash.",
      [LANGUAJES.ENG]:
        "It is an application made in React that allows you to search and save gifs. In addition, it allows you to create an account and save your favorite gifs. Upstash was used for data persistence.",
    },
    deploy: "https://my-gif.vercel.app/",
    github: "https://github.com/ZoeBarrios/MyGif",
    img: "/img/proyectos/mygif.png",
    tecnologias: ["React", "TypeScript", "Tailwind", "Upstash"],
    color: "#f8da5b",
  },
  6: {
    nombre: "Generador de contraseñas aleatorias",
    descripcion: {
      [LANGUAJES.ESP]:
        "Es una aplicación hecha en React que permite generar contraseñas aleatorias. Ademas, permite copiar la contraseña generada al portapapeles. Permite también elegir el largo de la contraseña y que caracteres incluir, teniendo la posibilidad de simultaneamente medir la seguridad de tus propias contraseñas.",
      [LANGUAJES.ENG]:
        "It is an application made in React that allows you to generate random passwords. In addition, it allows you to copy the generated password to the clipboard. It also allows you to choose the length of the password and which characters to include, having the possibility of in turn measuring the security of your own passwords.",
    },
    deploy: "https://password-generator-mauve-tau.vercel.app/",
    github: "https://github.com/ZoeBarrios/password-generator",
    img: "/img/proyectos/password.png",
    tecnologias: ["React", "HTML", "CSS"],
    color: "#afc5ff",
  },
  7: {
    nombre: "MarketHub",
    descripcion: {
      [LANGUAJES.ESP]:
        "Es una aplicación hecha en React y ASP.NET WEB API que te permite crear, comprar y vender productos. Con MarketHub, puedes explorar una amplia variedad de productos,ademas de poder vender tus propios productos sin necesidad de tener una tienda física.",
      [LANGUAJES.ENG]:
        "It is an application made in React and ASP.NET WEB API that allows you to create, buy and sell products. With MarketHub, you can explore a wide variety of products, as well as sell your own products without the need for a physical store.",
    },
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
