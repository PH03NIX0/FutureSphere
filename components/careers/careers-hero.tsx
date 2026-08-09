const careersHeroImage =
  "https://res.cloudinary.com/wfqwup4o/image/upload/f_auto,q_auto/v1786281198/futuresphere/images/careers-hero-composition.png";

export default function CareersHero() {
  return (
    <section className="fs-container px-4 sm:px-6 pt-4 pb-12 flex flex-col items-center gap-[50px]">
      <div className="flex flex-col items-center gap-[15px] w-full max-w-[935px]">
        <h1 className="font-heading text-h2 leading-[29px] font-medium text-center text-fs-dark sm:text-[48px] sm:leading-[58px] sm:tracking-[-3.8267px] sm:font-normal">
          Join Our Team and Shape the Future
        </h1>
        <p className="font-body text-center text-fs-grey max-w-[930px] text-[16px] leading-[19px] sm:leading-[24px]">
          Looking for an opportunity to showcase your web design skills? Join our team of talented designers, both remote and on-site, and bring your creativity to life. Collaborate with a dynamic group, create stunning websites, and make a lasting impact in the world of design, no matter where you are.
        </p>
      </div>

      {/* Native img avoids next/image optimizer quirks that clipped this asset. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={careersHeroImage}
        alt="FutureSphere team collage with global presence and 30+ talented team members"
        width={834}
        height={706}
        className="block w-full max-w-[834px] h-auto overflow-visible"
      />
    </section>
  );
}
