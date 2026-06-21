import styles from "./page.module.css";
import FrameV from "./components/FrameV";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import HeroVisual from "./components/HeroVisual";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Navbar />

        {/* Quadro Cima (Primeira seção) */}
        <section id="home" className="quadro-cima">
          <div className="hero-grid">
            <FrameV>
              <h1>Bem vindo.</h1>
              <p>
                Sou Thyago José, desenvolvedor Full Stack apaixonado por
                interfaces modernas e performáticas.
              </p>
              <div className="hero-cta">
                <a href="#projetos" className="cta-primary">Ver Projetos</a>
                <a href="#contato" className="cta-secondary">Fale Comigo</a>
                <a href="/cv-thyago-jose.pdf" className="cta-outline" download>Baixar CV</a>
              </div>
            </FrameV>
            <HeroVisual />
          </div>
        </section>

        {/* Seção Sobre Mim */}
        <section id="sobre" className="sobre-mim">
          <h2>Sobre mim</h2>
          <p className="sobre-desc">
            Desenvolvedor Full Stack com foco em soluções web modernas e performáticas.
          </p>

          {/* Cards de categorias */}
          <div className="sobre-cards">
            <div className="sobre-card">
              <div className="card-icon">🎓</div>
              <h3>Formação</h3>
              <ul>
                <li>Análise e Desenvolvimento de Sistemas</li>
                <li>Engenharia da Computação (cursando)</li>
              </ul>
            </div>

            <div className="sobre-card">
              <div className="card-icon">⚙️</div>
              <h3>Backend</h3>
              <ul>
                <li>Java + Spring Boot</li>
                <li>Python + Django</li>
                <li>Node.js</li>
              </ul>
            </div>

            <div className="sobre-card">
              <div className="card-icon">🎨</div>
              <h3>Frontend</h3>
              <ul>
                <li>React / Next.js</li>
                <li>Angular</li>
                <li>TypeScript / JavaScript</li>
              </ul>
            </div>

            <div className="sobre-card">
              <div className="card-icon">🛠️</div>
              <h3>Ferramentas</h3>
              <ul>
                <li>Git / GitHub</li>
                <li>Docker</li>
                <li>HTML5 / CSS3 / SASS</li>
              </ul>
            </div>
          </div>

          {/* Tech stack visual */}
          <div className="tech-stack">
            <h3>Stack Principal</h3>
            <div className="stack-icons">
              <div className="stack-item" style={{'--color': '#61DAFB'} as React.CSSProperties}>
                <span className="stack-symbol">⚛️</span>
                <span>React</span>
              </div>
              <div className="stack-item" style={{'--color': '#3178C6'} as React.CSSProperties}>
                <span className="stack-symbol">TS</span>
                <span>TypeScript</span>
              </div>
              <div className="stack-item" style={{'--color': '#ED8B00'} as React.CSSProperties}>
                <span className="stack-symbol">☕</span>
                <span>Java</span>
              </div>
              <div className="stack-item" style={{'--color': '#3776AB'} as React.CSSProperties}>
                <span className="stack-symbol">🐍</span>
                <span>Python</span>
              </div>
              <div className="stack-item" style={{'--color': '#6DB33F'} as React.CSSProperties}>
                <span className="stack-symbol">🌱</span>
                <span>Spring</span>
              </div>
              <div className="stack-item" style={{'--color': '#092E20'} as React.CSSProperties}>
                <span className="stack-symbol">🎯</span>
                <span>Django</span>
              </div>
              <div className="stack-item" style={{'--color': '#F05032'} as React.CSSProperties}>
                <span className="stack-symbol">⑂</span>
                <span>Git</span>
              </div>
              <div className="stack-item" style={{'--color': '#2496ED'} as React.CSSProperties}>
                <span className="stack-symbol">🐳</span>
                <span>Docker</span>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Projetos */}
        <section id="projetos" className="projetos-secao">
          <h2>Projetos</h2>
          <p>Em breve...</p>
        </section>

        {/* Seção Contato */}
        <section id="contato" className="contato-secao">
          <h2>Contato</h2>
          <p>Entre em contato comigo</p>
          <Contact />
        </section>
      </main>
    </div>
  );
}
