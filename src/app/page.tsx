import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}


        <div className="quadro-cima">
          <div className="elementos-cima">
            <div className="home">Home</div>
            <div className="sobre mim">Sobre mim</div>
            <div className="projetos">Projetos</div>
            <div className="contato">Contato</div>
          </div>

          <div className="nome-centro">Olá,visitante!<br />
            <p className="nome">Me chamo Thyago</p>
            Sou um desenvolvedor Full Stack, apaixonado por tecnologia
          </div>

        </div>

        <div className="sobre-mim">
          <h2>Sobre mim</h2>
          <p>Me chamo Thyago, tenho 34 anos e sou desenvolvedor Full Stack.</p> <p> Sou formado em Análise e Desenvolvimento de SIstemas e estou Cursando Engenharia da Computação.</p>
          <p>Tenho vasto conhecimento em Desenvolvimento web e desktop, utilizando Java com Springboot e Python com Jango</p>
          <p>E no Front end tenho conhecimento com Angular, React e HTML, CSS e JavaScript.</p>
        </div>

      </main>

    </div>
  );
}
