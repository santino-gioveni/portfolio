import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowDown, ArrowUpRight, ChevronDown, Linkedin, Mail, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import photo from "@/assets/san.png.asset.json";
import {
  achievements,
  contact,
  experienceGroups,
  milestones,
  projects,
  workplaceInsights,
  type Milestone,
  type Project,
} from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Santino Gioveni — Ideas que se convierten en negocios" },
      {
        name: "description",
        content:
          "Perfil comercial y emprendedor. Hitos, proyectos y resultados: ventas B2B, Conexa Agency, Comidas Oma y más.",
      },
      { property: "og:title", content: "Santino Gioveni — Ideas que se convierten en negocios" },
      {
        property: "og:description",
        content: "Detecto oportunidades, conecto personas y transformo ideas en resultados.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e?.isIntersecting && (setV(true), io.disconnect()), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${v ? "is-visible" : ""} ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const nav = [
  { href: "#hitos", label: "Hitos" },
  { href: "#logros", label: "Logros" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#perfil", label: "Perfil" },
  { href: "#contacto", label: "Contacto" },
];

function Index() {
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const openById = (id?: string) => {
    const p = projects.find((x) => x.id === id);
    if (p) setOpenProject(p);
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="font-display text-lg font-semibold">Santino Gioveni</a>
          <nav aria-label="Secciones" className="hidden gap-6 text-sm md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-muted-foreground transition-colors hover:text-primary">
                {n.label}
              </a>
            ))}
          </nav>
          <a href={`mailto:${contact.email}`} className="rounded-full bg-ink px-4 py-1.5 text-sm text-ink-foreground transition-colors hover:bg-primary">
            Contacto
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 pt-14 md:grid-cols-[1.4fr_1fr] md:pt-24">
        <Reveal>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Comercial · Emprendedor · Buenos Aires</p>
          <h1 className="text-5xl font-extrabold leading-[0.95] sm:text-6xl lg:text-7xl">
            Ideas que se convierten en <em className="font-normal text-primary">negocios.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Soy un perfil comercial y emprendedor. Me gusta detectar oportunidades, conectar personas, resolver problemas y
            llevar las ideas a la acción. Combino visión comercial, iniciativa y capacidad de ejecución para generar
            oportunidades de negocio.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#hitos" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
              Conocé mi recorrido <ArrowDown className="h-4 w-4" />
            </a>
            <a href="#proyectos" className="inline-flex items-center gap-2 rounded-full border border-foreground/25 px-6 py-3 font-semibold transition-colors hover:border-primary hover:text-primary">
              Explorá mis proyectos
            </a>
          </div>
        </Reveal>
        <Reveal delay={150} className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 -rotate-3 rounded-[2rem] bg-accent" aria-hidden />
          <img src={photo.url} alt="Retrato de Santino Gioveni" className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover" />
          <div className="absolute -bottom-5 -left-5 rounded-2xl bg-ink px-5 py-3 text-ink-foreground shadow-xl">
            <div className="font-display text-2xl font-bold">≈ ARS 70 M</div>
            <div className="text-xs opacity-80">en ventas en 3 meses</div>
          </div>
        </Reveal>
      </section>

      {/* HITOS */}
      <section id="hitos" className="scroll-mt-16 border-t border-border bg-card py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead kicker="01 — Recorrido" title="Los hitos que marcaron mi camino" sub="Una trayectoria construida a partir de iniciativa, aprendizaje, oportunidades y resultados." />
          <ol className="relative mt-14">
            <span className="absolute left-4 top-0 h-full w-px bg-border lg:left-1/2" aria-hidden />
            {milestones.map((m, i) => (
              <MilestoneItem key={m.id} m={m} side={i % 2 === 0 ? "left" : "right"} onProject={openById} />
            ))}
          </ol>
        </div>
      </section>

      {/* LOGROS */}
      <section id="logros" className="scroll-mt-16 bg-ink py-20 text-ink-foreground">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">02 — Resultados</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Hechos, no adjetivos.</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-ink-foreground/15 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((a, i) => (
              <Reveal key={`${a.value}-${a.label}-${a.note}`} delay={i * 80} className={`bg-ink p-7 ${a.lead ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}`}>
                <div className={`font-display font-bold text-primary ${a.lead ? "text-6xl" : "text-4xl"}`}>{a.value}</div>
                <div className="mt-3 font-semibold">{a.label}</div>
                <div className="mt-1 text-sm opacity-70">{a.note}</div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-xs opacity-60">
            Cifras aproximadas. Cada una corresponde a un período o concepto distinto (ventas, cierres, tamaño de operación,
            descuentos, emprendimientos) y no deben sumarse ni compararse entre sí.
          </p>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="scroll-mt-16 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead kicker="03 — Iniciativas" title="Proyectos e iniciativas" sub="Cada uno cuenta qué intenté construir, por qué, qué hice y hasta dónde llegó. Tocá una tarjeta para abrir la historia." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.id} delay={i * 70} className={i === 0 ? "lg:col-span-2" : ""}>
                <button
                  onClick={() => setOpenProject(p)}
                  className="group flex h-full w-full flex-col rounded-2xl border border-border bg-card p-7 text-left transition-all hover:-translate-y-1 hover:border-primary hover:shadow-xl"
                  aria-label={`Abrir la historia de ${p.name}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{p.type}</span>
                    <StatusTag>{p.status}</StatusTag>
                  </div>
                  <h3 className="mt-6 text-3xl font-bold">{p.name}</h3>
                  <p className="mt-2 text-muted-foreground">{p.tagline}</p>
                  {p.results.metric && (
                    <p className="mt-5 font-display text-2xl font-bold text-primary">
                      {p.results.metric.value} <span className="font-sans text-sm font-medium text-muted-foreground">{p.results.metric.label}</span>
                    </p>
                  )}
                  <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-primary">
                    <Plus className="h-4 w-4 transition-transform group-hover:rotate-90" /> Ver la historia completa
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section id="experiencia" className="scroll-mt-16 border-t border-border bg-card py-20">
        <div className="mx-auto max-w-4xl px-5">
          <SectionHead kicker="04 — Experiencia" title="Experiencia profesional" />
          <ol className="relative mt-12 border-l border-border ml-2 sm:ml-3">
            {experienceGroups.map((group) => (
              <li key={group.period} className="relative pb-12 pl-6 last:pb-0 sm:pl-9">
                <span className="absolute -left-2 top-1 h-4 w-4 rounded-full border-4 border-card bg-primary" aria-hidden />
                <Reveal>
                  <p className="text-sm font-semibold text-primary">{group.period}</p>
                  <div className="mt-5 divide-y divide-border">
                    {group.entries.map((e) => (
                      <article key={e.id} data-experience={e.id} className="py-6 first:pt-0 last:pb-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-2xl font-bold">{e.company}</h3>
                          {e.current && (
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden /> Actual
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-base font-medium text-primary">{e.role}</p>
                        {e.metric && (
                          <div className="mt-4 border-l-2 border-primary bg-accent/40 px-4 py-4 sm:px-5">
                            <p className="font-display text-3xl font-bold text-primary sm:text-4xl">{e.metric.value}</p>
                            <p className="mt-1 text-sm font-semibold">{e.metric.label}</p>
                            <p className="mt-2 text-sm text-muted-foreground">{e.metric.description}</p>
                          </div>
                        )}
                        <ul className="mt-3 space-y-1 text-muted-foreground">
                          {e.items.map((it) => <li key={it}>— {it}</li>)}
                        </ul>
                        {e.link && (
                          <a href={e.link.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                            {e.link.label} <ArrowUpRight className="h-4 w-4" />
                          </a>
                        )}
                      </article>
                    ))}
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PERFIL */}
      <section id="perfil" className="scroll-mt-16 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead kicker="05 — Perfil" title="Cómo trabajo" sub={workplaceInsights.intro} />
          <Reveal className="mt-5">
            <p className="text-xs text-muted-foreground">{workplaceInsights.source}</p>
          </Reveal>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div className="grid content-start gap-4 sm:grid-cols-2">
              {workplaceInsights.headlineTraits.map((t, i) => (
                <Reveal key={t.name} delay={i * 70} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-display text-2xl font-bold text-primary">{t.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t.description}</p>
                </Reveal>
              ))}
            </div>
            <div>
              <div className="space-y-4">
                {workplaceInsights.scores.map((s, i) => (
                  <Reveal key={s.label} delay={i * 30}>
                    <div className="flex items-baseline justify-between text-sm">
                      <span className="font-semibold">{s.label}</span>
                      <span className="text-muted-foreground">{s.value}/10</span>
                    </div>
                    <div className="relative mt-1.5 h-2.5 rounded-full bg-accent" role="img" aria-label={`${s.label}: ${s.value} de 10, población general ${s.population}`}>
                      <div className="absolute inset-y-0 left-0 rounded-full bg-primary" style={{ width: `${s.value * 10}%` }} aria-hidden />
                      <div className="absolute inset-y-0 w-0.5 rounded-full bg-ink" style={{ left: `calc(${s.population * 10}% - 1px)` }} aria-hidden />
                    </div>
                  </Reveal>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">La barra sólida es mi resultado; la línea oscura marca el promedio de la población general.</p>
            </div>
          </div>
          <Reveal className="mt-14">
            <h3 className="text-2xl font-bold">Lo que destaca la evaluación</h3>
            <ul className="mt-5 grid gap-3 text-muted-foreground sm:grid-cols-2">
              {workplaceInsights.strengths.map((s) => (
                <li key={s} className="border-l-2 border-primary pl-3">— {s}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="scroll-mt-16 py-24">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-5xl font-extrabold sm:text-6xl">
            ¿Estás listo para <em className="font-normal text-primary">maximizar tu rendimiento?</em>
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
              <Mail className="h-4 w-4" /> {contact.email}
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-foreground/25 px-6 py-3 font-semibold transition-colors hover:border-primary hover:text-primary">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </section>
      <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground">© 2026 Santino Gioveni</footer>

      <ProjectDialog project={openProject} onClose={() => setOpenProject(null)} />
    </div>
  );
}

function SectionHead({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <Reveal>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{kicker}</p>
      <h2 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{sub}</p>}
    </Reveal>
  );
}

function StatusTag({ children }: { children: ReactNode }) {
  return <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">{children}</span>;
}

function MilestoneItem({ m, side, onProject }: { m: Milestone; side: "left" | "right"; onProject: (id?: string) => void }) {
  const [open, setOpen] = useState(false);
  const major = m.weight === "major";
  const panelId = `hito-${m.id}`;
  return (
    <li className={`relative mb-8 pl-12 lg:w-1/2 lg:pl-0 ${side === "left" ? "lg:pr-12" : "lg:ml-auto lg:pl-12"}`}>
      <span
        className={`absolute top-6 rounded-full border-4 border-card ${major ? "h-5 w-5 bg-primary" : "h-3.5 w-3.5 bg-foreground/40"} left-4 -translate-x-1/2 ${side === "left" ? "lg:left-auto lg:right-0 lg:translate-x-1/2" : "lg:left-0"}`}
        aria-hidden
      />
      <Reveal>
        <div className={`rounded-2xl border p-6 transition-colors ${major ? "border-primary/40 bg-background shadow-lg" : "border-border bg-background/60"}`}>
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider">
            <span className="text-primary">{m.period}</span>
            <span className="text-muted-foreground">· {m.kind}</span>
          </div>
          <h3 className={`mt-2 font-bold ${major ? "text-3xl" : "text-xl"}`}>{m.title}</h3>
          <p className="mt-2 text-muted-foreground">{m.summary}</p>
          {m.metric && (
            <div className={`mt-4 ${major ? "rounded-xl bg-ink p-4 text-ink-foreground" : ""}`}>
              <div className={`font-display font-bold ${major ? "text-4xl text-primary" : "text-2xl text-primary"}`}>{m.metric.value}</div>
              <div className="text-sm opacity-80">{m.metric.label}</div>
            </div>
          )}
          <p className="mt-4 border-l-2 border-primary pl-3 text-sm font-medium">{m.highlight}</p>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls={panelId}
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary"
          >
            {open ? "Ocultar contexto" : "Ver más contexto"}
            <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
          <div id={panelId} hidden={!open} className="mt-3">
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {m.details.map((d) => (
                <li key={d}>— {d}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
              {m.projectId && (
                <button onClick={() => onProject(m.projectId)} className="underline underline-offset-4 hover:text-primary">
                  Abrir ficha del proyecto
                </button>
              )}
              {m.link && (
                <a href={m.link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-primary">
                  {m.link.label} <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </li>
  );
}

function ProjectDialog({ project: p, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <Dialog open={!!p} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-h-[92vh] w-[96vw] max-w-2xl overflow-y-auto rounded-2xl border-border bg-card p-0 sm:rounded-2xl [&>button]:text-ink-foreground [&>button]:opacity-100">
        {p && (
          <article>
            <div className="bg-ink p-7 text-ink-foreground sm:p-9">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider opacity-70">{p.type}</span>
                <StatusTag>{p.status}</StatusTag>
              </div>
              <DialogTitle className="mt-4 font-display text-4xl font-bold">{p.name}</DialogTitle>
              <DialogDescription className="mt-2 text-ink-foreground/75">{p.tagline}</DialogDescription>
            </div>
            <div className="space-y-6 p-7 sm:p-9">
              <Block n="1" t="La idea">{p.idea}</Block>
              <Block n="2" t="El problema u oportunidad">{p.opportunity}</Block>
              <Block n="3" t="Mi rol">{p.role}</Block>
              <Block n="4" t="Qué hice">
                <ul className="space-y-1">
                  {p.actions.map((a) => (
                    <li key={a}>— {a}</li>
                  ))}
                </ul>
              </Block>
              <Block n="5" t="Cómo evolucionó">{p.evolution}</Block>
              <Block n="6" t="Estado actual"><StatusTag>{p.status}</StatusTag></Block>
              <Block n="7" t="Resultados">
                {p.results.metric && (
                  <div className="mb-2 font-display text-4xl font-bold text-primary">
                    {p.results.metric.value} <span className="font-sans text-base font-medium text-muted-foreground">{p.results.metric.label}</span>
                  </div>
                )}
                {p.results.text}
              </Block>
              {p.next && <Block n="8" t="Próximo paso">{p.next}</Block>}
              {p.link && (
                <a href={p.link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground">
                  {p.link.label} <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </article>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Block({ n, t, children }: { n: string; t: string; children: ReactNode }) {
  return (
    <section className="grid grid-cols-[2rem_1fr] gap-3">
      <span className="font-display text-sm font-bold text-primary">0{n}</span>
      <div>
        <h4 className="text-lg font-semibold">{t}</h4>
        <div className="mt-1 text-muted-foreground">{children}</div>
      </div>
    </section>
  );
}
