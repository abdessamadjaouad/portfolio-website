export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-3xl items-center px-6 py-16 sm:px-10">
      <section aria-labelledby="portfolio-heading">
        <p className="text-foreground/70 mb-3 text-sm font-medium tracking-wide uppercase">
          Portfolio foundation
        </p>
        <h1
          id="portfolio-heading"
          className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl"
        >
          Abdessamad Jaouad
        </h1>
        <p className="text-foreground/80 mt-4 text-lg leading-8">
          Data Engineer · Software Engineer
        </p>
        <p className="text-foreground/70 mt-8 max-w-xl leading-7">
          The project foundation is ready. Portfolio content and visual design
          will be added in their reviewed phases.
        </p>
      </section>
    </main>
  );
}
