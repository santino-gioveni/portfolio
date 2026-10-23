import { describe, expect, it } from "vitest";
import { achievements, experience, experienceGroups, milestones, projects, workplaceInsights } from "@/data/portfolio";

describe("Confirmed portfolio experience", () => {
  it("keeps Parlyx exclusively in employment with its confirmed period and link", () => {
    expect(projects.some((p) => p.id === "parlyx")).toBe(false);
    expect(milestones.some((m) => m.id === "parlyx" || m.projectId === "parlyx")).toBe(false);
    const entries = experience.filter((e) => e.id === "parlyx");
    expect(entries).toHaveLength(1);
    expect(entries[0]?.period).toBe("Septiembre de 2026 – actualidad");
    expect(entries[0]?.link?.href).toBe("https://parlyx.vercel.app/");
    expect(entries[0]?.metric).toBeUndefined();
  });

  it("preserves the four personal projects", () => {
    expect(projects.map((p) => p.id)).toEqual(["conexa", "oma", "curaru", "recicoin"]);
  });

  it("orders jobs by the supplied chronology without duplicates", () => {
    expect(experience.map((e) => e.id)).toEqual([
      "parlyx", "aviatour", "global-merch", "ms-office", "ms-freelance", "ksk", "oma",
    ]);
    expect(new Set(experience.map((e) => e.id)).size).toBe(7);
    expect(experienceGroups.map((g) => g.period)).toEqual([
      "Septiembre de 2026 – actualidad", "Marzo de 2026 – septiembre de 2026",
      "2023–2026", "Marzo de 2022 – agosto de 2023", "2020 – actualidad",
    ]);
  });

  it("groups the three coinciding current jobs without merging companies", () => {
    expect(experienceGroups[0]?.entries.map((e) => e.company)).toEqual(["Parlyx", "Aviatour", "Global Merch"]);
    expect(experience.filter((e) => e.current).map((e) => e.id)).toEqual(["parlyx", "aviatour", "global-merch", "oma"]);
  });

  it("attributes USD 100,000 in sales only to Global Merch", () => {
    const result = experience.filter((e) => e.metric?.value === "USD 100.000");
    expect(result.map((e) => e.id)).toEqual(["global-merch"]);
    expect(result[0]?.period).toBe("Septiembre de 2026 – actualidad");
    expect(achievements.find((a) => a.value === "USD 100.000")?.note).toContain("Global Merch");
    expect(milestones.find((m) => m.id === "ms-office")?.details.join(" ")).not.toContain("100.000");
  });

  it("attributes ARS 70 million over three months to the office stage only", () => {
    const office = experience.find((e) => e.id === "ms-office");
    expect(office?.period).toBe("Marzo de 2026 – septiembre de 2026");
    expect(office?.metric?.value).toBe("≈ ARS 70 M");
    expect(office?.metric?.label).toContain("tres meses");
    expect(experience.filter((e) => e.metric?.value === "≈ ARS 70 M").map((e) => e.id)).toEqual(["ms-office"]);
  });

  it("keeps the freelance stage limited to connecting potential customers", () => {
    const freelance = experience.find((e) => e.id === "ms-freelance");
    expect(freelance?.period).toBe("2023–2026");
    expect(freelance?.items).toEqual(["Mi función era exclusivamente conectar potenciales clientes con la empresa."]);
    expect(freelance?.metric).toBeUndefined();
  });
});

describe("Workplace insights profile", () => {
  it("shows the four notable traits from the assessment", () => {
    expect(workplaceInsights.headlineTraits.map((t) => t.name)).toEqual([
      "Motivado", "Asertivo", "Extrovertido", "Competitivo",
    ]);
  });

  it("keeps the ten scores exactly as reported by Criteria", () => {
    expect(workplaceInsights.scores).toHaveLength(10);
    expect(workplaceInsights.scores.find((s) => s.label === "Motivación")).toMatchObject({ value: 8, population: 6 });
    expect(workplaceInsights.scores.find((s) => s.label === "Competitividad")).toMatchObject({ value: 7, population: 4 });
    expect(workplaceInsights.scores.find((s) => s.label === "Extroversión")).toMatchObject({ value: 7, population: 4 });
  });

  it("lists the strengths highlighted in the report and its source", () => {
    expect(workplaceInsights.strengths).toHaveLength(7);
    expect(workplaceInsights.source).toContain("Criteria");
  });
});