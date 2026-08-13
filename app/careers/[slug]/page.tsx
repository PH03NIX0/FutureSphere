import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import CareerHero from "@/components/careers/career-hero";
import JobDescription from "@/components/careers/job-description";
import dynamic from "next/dynamic";
import { getJobBySlug, jobs } from "@/lib/jobs";

const CareersSection = dynamic(() => import("@/components/about/careers-section"));

export const dynamicParams = false;

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return { title: "Career | FutureSphere" };
  }

  return {
    title: `${job.title} | Careers | FutureSphere`,
    description: job.description,
  };
}

export default async function CareerSingle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  return (
    <main className="bg-fs-background flex flex-col items-center w-full pb-12 sm:pb-16 lg:pb-[80px]">
      <Navbar />
      <CareerHero job={job} />
      <JobDescription job={job} />
      <CareersSection heading="Related job opportunities" />
      <Footer />
    </main>
  );
}
