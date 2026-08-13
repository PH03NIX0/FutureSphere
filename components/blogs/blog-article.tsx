import Image from "next/image";
import type { BlogPost } from "@/lib/blogs";

interface BlogArticleProps {
  readonly post: BlogPost;
}

export default function BlogArticle({ post }: BlogArticleProps) {
  const beforeImage = post.sections.slice(0, 2);
  const afterImage = post.sections.slice(2);

  return (
    <section className="fs-container w-full px-4 sm:px-6 mt-8 sm:mt-12 lg:mt-[50px]">
      <div className="mx-auto flex w-full max-w-[720px] flex-col gap-8 sm:gap-10">
        {beforeImage.map((section) => (
          <ArticleSection key={section.title} section={section} />
        ))}

        <div className="relative aspect-[771/483] w-full overflow-hidden rounded-[8px] sm:rounded-blog">
          <Image
            src={post.inlineImageSrc}
            alt={post.inlineImageAlt}
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            className="object-cover"
            loading="lazy"
          />
        </div>

        {afterImage.map((section) => (
          <ArticleSection key={section.title} section={section} />
        ))}
      </div>
    </section>
  );
}

function ArticleSection({
  section,
}: {
  readonly section: BlogPost["sections"][number];
}) {
  return (
    <article className="flex flex-col gap-4 sm:gap-5">
      <h2 className="font-heading text-[22px] leading-[28px] font-medium text-fs-dark sm:text-[24px] sm:leading-[29px] sm:tracking-[-0.75px]">
        {section.title}
      </h2>
      <p className="font-body text-[15px] leading-[22px] text-fs-grey sm:text-[16px] sm:leading-[24px]">
        {section.intro}
      </p>
      {"heading" in section && section.heading ? (
        <h3 className="font-heading text-[18px] leading-[24px] font-medium text-fs-dark sm:text-[20px] sm:leading-[24px]">
          {section.heading}
        </h3>
      ) : null}
      <ul className="flex list-disc flex-col gap-2 pl-5 font-body text-[15px] leading-[22px] text-fs-grey sm:gap-2.5 sm:text-[16px] sm:leading-[24px]">
        {section.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
