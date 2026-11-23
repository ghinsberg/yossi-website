// The single h1 of a page, with an optional intro line.
export default function PageIntro({ title, intro }: { title: string; intro?: string }) {
  return (
    <header>
      <h1 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight text-brand-text">{title}</h1>
      {intro ? <p className="mt-6 text-lg md:text-xl text-brand-text-secondary">{intro}</p> : null}
    </header>
  );
}
