import { offices } from "@/lib/offices";

const jobDetailSections = [
  {
    title: "Education and Experience",
    intro:
      "The ideal candidate should have a Bachelor's degree in a relevant field such as Business, Computer Science, or a related discipline. Additionally, a minimum of 3 years of experience in product management or a similar role is required. Familiarity with Agile methodologies is also highly desirable.",
    items: [
      "Bachelor's degree in a relevant field such as Business, Computer Science, or a related discipline",
      "Minimum of 3 years of experience in product management or a similar role",
      "Familiarity with Agile methodologies",
    ],
  },
  {
    title: "Technical Skills",
    intro:
      "Proficiency in product development processes and tools is essential. The candidate should have a strong understanding of software development life cycles, project management tools such as JIRA or Asana, and prototyping tools like Sketch or Adobe XD. Knowledge of data analysis and visualization tools, such as Excel or Tableau, is also preferred. Additionally, a basic understanding of programming languages, such as HTML, CSS, and JavaScript, would be advantageous.",
    items: [
      "Product development processes and software development life cycles",
      "Project management tools such as JIRA or Asana",
      "Prototyping tools like Sketch or Adobe XD",
      "Data analysis and visualization tools such as Excel or Tableau",
      "Basic understanding of HTML, CSS, and JavaScript",
    ],
  },
  {
    title: "Core Competencies",
    intro: "The candidate should possess the following core competencies:",
    items: [
      "Strategic Thinking: Ability to think strategically and align product goals with overall business objectives.",
      "Leadership: Strong leadership skills to inspire and motivate cross-functional teams.",
      "Communication: Excellent communication skills to effectively collaborate with stakeholders and convey product vision.",
      "Problem Solving: Proven ability to identify and solve complex problems in a fast-paced environment.",
      "Collaboration: Demonstrated ability to work collaboratively with cross-functional teams, including engineering, design, and marketing.",
    ],
  },
  {
    title: "Desired Qualities",
    intro:
      "In addition to the required qualifications, the following qualities are desired:",
    items: [
      "Passion for Technology: A genuine passion for technology and a desire to stay updated with industry trends.",
      "Customer-Centric Mindset: A customer-centric approach to product development, focusing on delivering value to end-users.",
      "Adaptability: Ability to adapt to changing priorities and thrive in a fast-paced, dynamic environment.",
      "Detail-Oriented: Strong attention to detail to ensure product quality and accuracy.",
      "Results-Driven: A results-driven mindset with a focus on delivering products that meet business goals.",
    ],
  },
] as const;

export const jobs = [
  {
    slug: "product-manager",
    title: "Product Manager",
    category: "Design",
    type: "Full Time",
    location: "On site",
    locationTone: "accent" as const,
    officeCity: "San Francisco",
    description:
      "FutureSphere is in need of a talented Product Designer with more tha 3 years of past experience in tech sector.",
    sections: jobDetailSections,
  },
  {
    slug: "human-resources",
    title: "Human Resources",
    category: "People",
    type: "Full Time",
    location: "On site",
    locationTone: "purple" as const,
    officeCity: "San Francisco",
    description:
      "FutureSphere is in need of a talented Product Designer with more tha 3 years of past experience in tech sector.",
    sections: jobDetailSections,
  },
  {
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    category: "Design",
    type: "Full Time",
    location: "Remote",
    locationTone: "accent" as const,
    officeCity: "San Francisco",
    description:
      "FutureSphere is in need of a talented Product Designer with more tha 3 years of past experience in tech sector.",
    sections: jobDetailSections,
  },
] as const;

export type Job = (typeof jobs)[number];

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug);
}

export function getJobOffice(job: Job) {
  return offices.find((office) => office.city === job.officeCity) ?? offices[0];
}
