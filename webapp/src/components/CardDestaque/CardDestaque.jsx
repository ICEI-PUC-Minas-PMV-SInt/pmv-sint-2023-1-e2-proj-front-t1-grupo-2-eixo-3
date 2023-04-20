import "./styles.css";
export default function CardDestaque() {
  return (
    <div className="App"> <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cards de Destaque</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
    <main className="cards">
      <section className="card">
        <div className="icon">
          <a href="https://catapiri.onrender.com/eventos">
            <img src="assets/ICON 1.png" alt="calendário" />{" "}
          </a>
        </div>
        <h3> Calendário de Eventos</h3>
        <span>
          {" "}
          Fique por dentro de todos os eventos realizados pelo projeto catapiri
        </span>
      </section>
      <section className="card">
        <div className="icon">
          <a href="https://catapiri.onrender.com/instrucoes">
            <img src="assets/ICON 2.png" alt="reciclagem" />{" "}
          </a>
        </div>
        <h3> Saiba como Separar</h3>
        <span>Descubra a forma ideal de separar e descartar o seu lixo</span>
      </section>
      <section className="card">
        <div className="icon">
          <a href="https://catapiri.onrender.com/artigo">
            <img src="assets/ICON3.png" alt="artigo" />{" "}
          </a>
        </div>
        <h3>O Problema do Lixo</h3>
        <span>
          {" "}
          Saiba o motivo do projeto catapiri existir e como o lixo tem um impacto
          enorme
        </span>
      </section>
      <section className="card">
        <div className="icon">
          <a href="https://catapiri.onrender.com/coleta">
            <img src="assets/ICON 4.png" alt="rotas" />{" "}
          </a>
        </div>
        <h3> Rotas de Coleta</h3>
        <span>
          {" "}
          Veja as rotas de coleta que o projeto catapiri abrange na sua região
        </span>
      </section>
    </main>
  </>
    </div>
  );
}
