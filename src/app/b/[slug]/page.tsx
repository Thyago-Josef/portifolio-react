import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { bios } from "../../data/bios";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return bios.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const bio = bios.find((b) => b.slug === slug);
  return bio ? { title: bio.nome, description: bio.descricao } : {};
}

export default async function BioPage({ params }: Props) {
  const { slug } = await params;
  const bio = bios.find((b) => b.slug === slug);
  if (!bio) notFound();

  return (
    <main className="bio-page">
      <div className="bio-card">
        <div className="bio-avatar" style={{ background: bio.cor }}>
          {bio.nome.slice(0, 2).toUpperCase()}
        </div>
        <h1>{bio.nome}</h1>
        <p>{bio.descricao}</p>
        <a className="bio-btn" style={{ background: bio.cor }} href={`https://wa.me/${bio.whatsapp}`}>
          Falar no WhatsApp
        </a>
        {bio.links.map((l) => (
          <a key={l.label} className="bio-btn alt" href={l.href}>
            {l.label}
          </a>
        ))}
      </div>
    </main>
  );
}