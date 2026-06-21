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
          <p>
            Me chamo Thyago, tenho 35 anos e sou desenvolvedor Full Stack.
          </p>
          <p>
            Sou formado em Análise e Desenvolvimento de Sistemas e estou
            cursando Engenharia da Computação.
          </p>
          <p>
            Tenho vasto conhecimento em Desenvolvimento web e desktop,
            utilizando Java com Spring Boot e Python com Django.
          </p>
          <p>
            No Front-end, tenho conhecimento em Angular, React, HTML,
            CSS e JavaScript.
          </p>
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
