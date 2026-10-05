import { services, zap } from "../data/services";

export default function Servicos() {
  return (
    <section id="servicos" className="servicos-secao">
      <h2>Serviços</h2>
      <p className="servicos-desc">
        Do link na bio ao sistema completo: escolha o tamanho que cabe no seu negócio.
      </p>
      <div className="servicos-lista">
        {services.map((sv) => (
          <article key={sv.id} className={`servico-linha${sv.destaque ? " destaque" : ""}`}>
            <div>
              <h3>{sv.nome}</h3>
              <p>{sv.resumo}</p>
            </div>
            <ul>
              {sv.itens.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <div className="servico-preco">
              <strong>{sv.preco}</strong>
              <a className="servico-botao" href={zap(`Olá! Tenho interesse em: ${sv.nome}.`)}>
                Pedir orçamento
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}