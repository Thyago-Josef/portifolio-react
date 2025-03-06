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
          <h1>Thyago Rodrigues</h1>

          <div className="nome-centro">Olá,visitante!<p className="nome">Me chamo Thyago</p> sou um desenvolvedor Full Stack</div>

          <div className="elementos-cima">
            <div className="contato">Contato</div>
            <div className="sobre">Sobre</div>
            <div className="home">Home</div>
          </div>

        </div>


      </main>
    </div>
  );
}
