import Link from "next/link";
import { bios } from "../data/bios";

export default function Modelos() {
  return (
    <section id="modelos" className="modelos-secao">
      <h2>Modelos de bio</h2>
      <p className="servicos-desc">Abra um modelo e veja como fica no celular do seu cliente.</p>
      <ul className="modelos-lista">
        {bios.map((b) => (
          <li key={b.slug}>
            <Link href={`/b/${b.slug}`}>
              <strong>{b.nome}</strong>
              <span>{b.ramo}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}