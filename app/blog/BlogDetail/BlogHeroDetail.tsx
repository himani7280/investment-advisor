import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3, FolderOpen, UserRound } from "lucide-react";
import { investmentContent } from "../../data/investmentContent";

const content = investmentContent.blogDetail;

const BlogHeroDetail = () => {
  return (
    <section className="w-full bg-white pt-10 sm:pt-12 lg:pt-14">
      <div className="mx-auto max-w-7xl px-8 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_340px] xl:gap-10">
          
          
          <article className="min-w-0">

           
            <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-3 text-xs text-[#31558f] sm:gap-x-5 sm:text-sm">
              <div className="group flex items-center gap-2">
                <CalendarDays size={20} className="rounded-full bg-[#eaf3ff] p-1 text-[#1769e0] transition-colors group-hover:bg-[#1769e0] group-hover:text-white" />
                <span>{content.date}</span>
              </div>

              <span className="hidden h-5 w-px bg-[#dce6f3] sm:block" />

              <div className="group flex items-center gap-2">
                <UserRound size={20} className="rounded-full bg-[#eaf3ff] p-1 text-[#1769e0] transition-colors group-hover:bg-[#1769e0] group-hover:text-white" />
                <span>{content.authorPrefix} {content.author}</span>
              </div>

              <span className="hidden h-5 w-px bg-[#dce6f3] sm:block" />

              <div className="group flex items-center gap-2">
                <FolderOpen size={20} className="rounded-full bg-[#eaf3ff] p-1 text-[#1769e0] transition-colors group-hover:bg-[#1769e0] group-hover:text-white" />
                <span>{content.category}</span>
              </div>

              <span className="hidden h-5 w-px bg-[#dce6f3] sm:block" />

              <div className="group flex items-center gap-2">
                <Clock3 size={20} className="rounded-full bg-[#eaf3ff] p-1 text-[#1769e0] transition-colors group-hover:bg-[#1769e0] group-hover:text-white" />
                <span>{content.readTime}</span>
              </div>
            </div>

            
            <div className="relative mb-5 h-[230px] overflow-hidden rounded-lg sm:h-[320px] md:h-[390px] lg:h-[410px]">
              <Image
                src={content.image}
                alt={content.imageAlt}
                fill
                priority
                className="object-cover"
              />
            </div>

            
            {content.introduction.map((paragraph) => (
              <p key={paragraph} className="mb-4 text-[15px] leading-6 text-[#536b91] sm:text-base sm:leading-7">
                {paragraph}
              </p>
            ))}

            {content.sections.slice(0, 1).map((section) => (
              <div key={section.heading}>
                <h2 className="mb-1 text-xl font-bold text-[#102d63] sm:text-2xl">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mb-5 text-[15px] leading-6 text-[#536b91] sm:text-base sm:leading-7">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}

           
            <div className="mb-6 rounded-lg bg-[#edf6ff] px-5 py-5 sm:px-8 sm:py-6">
              <div className="flex gap-4">
                <div className="text-5xl font-bold leading-none text-[#72b4ff]">
                  “
                </div>

                <p className="pt-1 text-sm font-semibold leading-6 text-[#17417e] sm:text-base">
                  {content.quote}
                </p>
              </div>
            </div>

            
            {content.sections.slice(1).map((section) => (
              <div key={section.heading}>
                <h2 className="mb-1 text-xl font-bold text-[#102d63] sm:text-2xl">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mb-5 text-[15px] leading-6 text-[#536b91] sm:text-base sm:leading-7">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}

            
            <p className="border-b border-[#dce6f3] pb-5 text-[15px] leading-6 text-[#536b91] sm:text-base sm:leading-7">
              {content.closing}
            </p>
          </article>

         
          <aside className="space-y-6">

            <div className="rounded-lg bg-[#f4f8fd] p-5 sm:p-6">
              <h3 className="mb-5 text-xl font-bold text-[#102d63]">
                {content.recentPostsTitle}
              </h3>

              <div className="space-y-5">
                {content.recentPosts.map((post) => (
                  <Link key={post.title} href={post.href} className="group flex gap-3">
                    <div className="relative h-[72px] w-24 shrink-0 overflow-hidden rounded-md sm:h-[82px] sm:w-[120px] xl:w-[135px]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div>
                      <h4 className="text-sm font-bold leading-5 text-[#102d63]">
                        {post.title}
                      </h4>
                      <p className="mt-1 text-xs text-[#3982e8]">
                        {post.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#1675e8] to-[#083b86] p-7 text-white">
              <div className="absolute right-0 top-0 h-full w-1/2 opacity-10">
                <div className="h-full w-full -skew-x-12 bg-white" />
              </div>

              <div className="relative">
                <div className="mb-3 h-[2px] w-12 bg-[#9ccfff]" />

                <p className="mb-1 text-sm font-medium text-[#dcecff]">
                  {content.advice.eyebrow}
                </p>

                <h3 className="mb-3 text-2xl font-bold leading-8">
                  {content.advice.titleLines.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </h3>

                <p className="mb-5 text-sm leading-5 text-[#dcecff]">
                  {content.advice.description}
                </p>

                <Link
                  href={content.advice.href}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#1769e0] transition hover:bg-[#f0f6ff] sm:w-auto sm:px-7"
                >
                  {content.advice.buttonText}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="rounded-lg bg-[#f4f8fd] p-5 sm:p-6">
              <h3 className="mb-4 text-xl font-bold text-[#102d63]">
                {content.categoriesTitle}
              </h3>

              <div className="divide-y divide-[#dce6f3]">
                {content.categories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="group -mx-2 flex items-center justify-between rounded-md px-2 py-3 text-sm text-[#31558f] transition-colors hover:bg-[#1769e0] hover:text-white"
                  >
                    <span>{category.name}</span>
                    <ArrowRight size={18} className="rounded-full bg-[#eaf3ff] p-1 text-[#1769e0] transition-colors group-hover:bg-white group-hover:text-[#1769e0]" />
                  </Link>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>
    </section>
  );
};

export default BlogHeroDetail;