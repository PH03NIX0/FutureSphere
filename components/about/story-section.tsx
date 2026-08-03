import StoryCard from "./story-card";

export default function StorySection() {
  return (
    <section className="flex justify-center mt-[80px] w-full px-4 sm:px-6">
      <div className="fs-container mx-auto">
        <div className="border border-fs-border rounded-card bg-white p-6 sm:p-10 flex flex-col gap-[50px]">
          <StoryCard
            badge="Our Story"
            description={[
              "In 2010, our founder, Vasily, faced a daunting challenge - preparing for the Law School Admission Test (LSAT) while juggling an internship and evening classes in different cities. The lack of time and a conducive study environment made it incredibly difficult for him to achieve his dream of becoming a lawyer.",
              "During a train ride, a moment of inspiration struck Vasily. He wished for a convenient study tool on his phone to help him prepare for the LSAT. However, such an app didn&apos;t exist at the time. Determined to overcome this hurdle, Vasily took matters into his own hands and developed one of the earliest and most comprehensive LSAT apps on the market. The app quickly gained popularity, becoming the #1 paid LSAT app for over a year.",
            ]}
            imageSrc="futuresphere/images/mission-visual"
            imageAlt="Story card visual"
          />
          <StoryCard
            description={[
              "This success prompted Vasily to establish FutureSphere, an app development company with a strong focus on creating profitable and impactful applications. Building on their initial achievement, FutureSphere expanded their educational app portfolio to include exams such as SAT, GMAT, MCAT, and more, catering to the needs of a broader audience.",
              "As time went on, it became evident that the industry had much more to offer than just exam-focused applications. People began approaching FutureSphere, seeking guidance on how to develop their own apps, what it takes to succeed, and how to navigate the complex world of mobile applications. In response to this growing demand for expertise and support, FutureSphere expanded its services and evolved into a comprehensive resource for aspiring app creators - a company known as FutureSphere.",
            ]}
            imageSrc="futuresphere/images/mission-visual"
            imageAlt="Story card visual"
            reverse
          />
        </div>
      </div>
    </section>
  );
}
