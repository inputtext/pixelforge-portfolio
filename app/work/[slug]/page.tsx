import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/ProjectDetail";
import { projects } from "@/components/ProjectDetailData";

const projectSlugs = ["devcollective", "zero-trust-vault", "cflow"] as const;

const metadataBySlug = {
  devcollective: {
    title: "DevCollective — PixelForge",
    description: "DevCollective case study by Piyush Kanojiya.",
  },
  "zero-trust-vault": {
    title: "Zero-Trust Vault — PixelForge",
    description: "Zero-Trust Vault case study by Piyush Kanojiya.",
  },
  cflow: {
    title: "C·FLOW — PixelForge",
    description: "C·FLOW case study by Piyush Kanojiya.",
  },
} as const;

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return metadataBySlug[slug as keyof typeof metadataBySlug] ?? { title: "Project — PixelForge" };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!projectSlugs.includes(slug as (typeof projectSlugs)[number])) {
    notFound();
  }

  return <ProjectDetail project={projects[slug as keyof typeof projects]} />;
}
