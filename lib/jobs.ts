export const jobs = [
  {
    title: "Product Manager",
    type: "Full Time",
    location: "On site",
    locationTone: "accent" as const,
    description:
      "FutureSphere is in need of a talented Product Designer with more tha 3 years of past experience in tech sector.",
  },
  {
    title: "Human Resources",
    type: "Full Time",
    location: "On site",
    locationTone: "purple" as const,
    description:
      "FutureSphere is in need of a talented Product Designer with more tha 3 years of past experience in tech sector.",
  },
  {
    title: "UI/UX Designer",
    type: "Full Time",
    location: "Remote",
    locationTone: "accent" as const,
    description:
      "FutureSphere is in need of a talented Product Designer with more tha 3 years of past experience in tech sector.",
  },
] as const;

export type Job = (typeof jobs)[number];
