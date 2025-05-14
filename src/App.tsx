import "./App.css";

export function App() {
  return (
    <>
      <header>
        <div className="container">
          <h1 className="logo">TECPIXEL</h1>

          <button href="#" className="btn-header">
            Iniciar avaliação
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="text-content">
          <h2>Nos conheça melhor!</h2>
          <p>
            Somos uma equipe independente, originada por meio acadêmico a fins
            de ajudar a comunidade diretamente.
          </p>
          <a href="#" className="btn">
            Saber mais
          </a>
        </div>
        <div className="image-content">
          <img
            src="https://i.imgur.com/HuWiEoY.png"
            alt="Homem com fone e tablet"
          />
        </div>
      </section>

      <section className="analysis">
        <div className="text-box">
          <h2>Análise Técnica</h2>
          <p>
            Responda as perguntas para que nossa análise seja feita da melhor
            forma.
          </p>
          <p>Fique tranquilo, vamos resolver seu problema junto a você!</p>
          <a href="#" className="btn">
            Começar
          </a>
        </div>
        <div className="phone-image">
          <img src="https://i.imgur.com/Yyzlg5B.png" alt="Mockup de celular" />
        </div>
      </section>
    </>
  );
}

export default App;
