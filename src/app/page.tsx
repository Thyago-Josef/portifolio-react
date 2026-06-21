import styles from "./page.module.css";
import FrameV from "./components/FrameV";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Navbar />

        {/* Quadro Cima (Primeira seção) */}
        <section id="home" className="quadro-cima">
          <FrameV>
            <h1>Bem vindo.</h1>
            <p>
              Meu nome é Thyago José, tenho 35 anos. Sou um desenvolvedor
              FullStack e Design. Possuo vasto conhecimento e experiência
              com Desenvolvimento de aplicações web e mobile, assim como
              também com designer gráfico em geral.
            </p>
            <p>
              Se procura aplicações com velocidade e segurança, está no
              lugar certo.
            </p>
            <p>
              Sou apaixonado por interfaces modernas, pixel-perfect, bonitas
              e intuitivamente implementadas.
            </p>
          </FrameV>
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
