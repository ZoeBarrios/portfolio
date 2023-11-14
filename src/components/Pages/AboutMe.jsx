import "../../stylesheets/aboutme.css";
export default function AboutMe() {
  return (
    <div className="info-personal-container" id="about">
      <div className="info-personal">
        <div className="info-personal-texto">
          <h2>About me</h2>
          <p>
            Soy una desarrolladora web junior. Me encanta la programación y
            estoy interesada en incursionar tanto en el frontend como en el
            backend. Disfruto aprendiendo cosas nuevas y enfrentándome a nuevos
            retos. Me considero una persona muy responsable y organizada, con
            muchas ganas de aprender y mejorar cada día. Mi curiosidad me
            impulsa a enfrentar nuevos desafíos con entusiasmo.
          </p>
        </div>
        <div className="biografia__container__image">
          <img src="/img/foto.jpeg" alt="zoe barrios" />
        </div>
      </div>
    </div>
  );
}
