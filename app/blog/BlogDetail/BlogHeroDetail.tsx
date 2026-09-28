import Image from "next/image";
import Link from "next/link";


const BlogHeroDetail = () => {
  return (
    <section className="w-full bg-white py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,2.1fr)_340px] lg:gap-10">
          
          
          <article className="min-w-0">

           
            <div className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[#31558f]">
              <div className="flex items-center gap-2">
                <span className="text-lg">▣</span>
                <span>August 22, 2026</span>
              </div>

              <span className="hidden h-5 w-px bg-[#dce6f3] sm:block" />

              <div className="flex items-center gap-2">
                <span className="text-lg">♙</span>
                <span>By Rahul Mehta</span>
              </div>

              <span className="hidden h-5 w-px bg-[#dce6f3] sm:block" />

              <div className="flex items-center gap-2">
                <span className="text-lg">▱</span>
                <span>Investment Planning</span>
              </div>

              <span className="hidden h-5 w-px bg-[#dce6f3] sm:block" />

              <div className="flex items-center gap-2">
                <span className="text-lg">◷</span>
                <span>5 Min Read</span>
              </div>
            </div>

            
            <div className="relative mb-5 h-[230px] overflow-hidden rounded-lg sm:h-[320px] md:h-[390px] lg:h-[410px]">
              <Image
                src="/blogdetail.png"
                alt="Smart Investment Strategies"
                fill
                priority
                className="object-cover"
              />
            </div>

            
            <p className="mb-4 text-[15px] leading-6 text-[#536b91] sm:text-base sm:leading-7">
              Investing is one of the most effective ways to build wealth and
              secure your financial future. However, with so many options
              available, it can be challenging to know where to start. In this
              article, we&apos;ll explore practical investment strategies that
              can help you make informed decisions and stay on track toward
              your goals.
            </p>

           
            <h2 className="mb-1 text-xl font-bold text-[#102d63] sm:text-2xl">
              1. Understand Your Financial Goals
            </h2>

            <p className="mb-5 text-[15px] leading-6 text-[#536b91] sm:text-base sm:leading-7">
              Before making any investment, it&apos;s important to define what
              you want to achieve. Are you saving for retirement, a home, or
              your children&apos;s education? Clear goals help you choose the
              right investment options and set a realistic timeline.
            </p>

           
            <div className="mb-6 rounded-lg bg-[#edf6ff] px-5 py-5 sm:px-8 sm:py-6">
              <div className="flex gap-4">
                <div className="text-5xl font-bold leading-none text-[#72b4ff]">
                  “
                </div>

                <p className="pt-1 text-sm font-semibold leading-6 text-[#17417e] sm:text-base">
                  A goal without a plan is just a wish. Define your goals,
                  create a strategy, and take consistent action.
                </p>
              </div>
            </div>

            
            <h2 className="mb-1 text-xl font-bold text-[#102d63] sm:text-2xl">
              2. Diversify Your Portfolio
            </h2>

            <p className="mb-5 text-[15px] leading-6 text-[#536b91] sm:text-base sm:leading-7">
              Diversification helps reduce risk by spreading your investments
              across different asset classes such as equities, bonds, mutual
              funds, and real estate. A well-diversified portfolio can provide
              more stable returns over the long term.
            </p>

            
            <h2 className="mb-1 text-xl font-bold text-[#102d63] sm:text-2xl">
              3. Focus on Long-Term Growth
            </h2>

            <p className="mb-5 text-[15px] leading-6 text-[#536b91] sm:text-base sm:leading-7">
              While short-term gains can be tempting, long-term investing
              typically offers greater rewards. Staying invested through market
              fluctuations allows you to benefit from the power of compounding.
            </p>

            
            <h2 className="mb-1 text-xl font-bold text-[#102d63] sm:text-2xl">
              4. Review and Adjust Regularly
            </h2>

            <p className="mb-5 text-[15px] leading-6 text-[#536b91] sm:text-base sm:leading-7">
              Your financial situation and market conditions can change over
              time. Regularly reviewing your portfolio ensures that your
              investments remain aligned with your goals and risk tolerance.
            </p>

            
            <p className="border-b border-[#dce6f3] pb-5 text-[15px] leading-6 text-[#536b91] sm:text-base sm:leading-7">
              At PrimeCore, we help individuals and businesses create
              personalized investment strategies designed for long-term
              success. If you&apos;re ready to take control of your financial
              future, get in touch with our experts today.
            </p>
          </article>

         
          <aside className="space-y-6">

            <div className="rounded-lg bg-[#f4f8fd] p-4">
              <div className="flex overflow-hidden rounded-md bg-white">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-[#31558f] outline-none placeholder:text-[#9aaec9]"
                />

                <button
                  type="button"
                  className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#1769e0] text-xl text-white"
                  aria-label="Search"
                >
                  🔍
                </button>
              </div>
            </div>

            <div className="rounded-lg bg-[#f4f8fd] p-5 sm:p-6">
              <h3 className="mb-5 text-xl font-bold text-[#102d63]">
                Recent Posts
              </h3>

              <div className="space-y-5">

                <Link
                  href="/#"
                  className="group flex gap-3"
                >
                  <div className="relative h-[82px] w-[135px] shrink-0 overflow-hidden rounded-md">
                    <Image
                      src="/blog1.png"
                      alt="Smart Investment Strategies"
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold leading-5 text-[#102d63]">
                      Smart Investment Strategies for a Brighter Future
                    </h4>

                    <p className="mt-1 text-xs text-[#3982e8]">
                      August 22, 2026
                    </p>
                  </div>
                </Link>

                <Link
                  href="/#"
                  className="group flex gap-3"
                >
                  <div className="relative h-[82px] w-[135px] shrink-0 overflow-hidden rounded-md">
                    <Image
                      src="/blog2.png"
                      alt="Secure Retirement"
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold leading-5 text-[#102d63]">
                      How to Plan for a Secure Retirement
                    </h4>

                    <p className="mt-1 text-xs text-[#3982e8]">
                      August 15, 2026
                    </p>
                  </div>
                </Link>

                <Link
                  href="/#"
                  className="group flex gap-3"
                >
                  <div className="relative h-[82px] w-[135px] shrink-0 overflow-hidden rounded-md">
                    <Image
                      src="/blog3.png"
                      alt="Build Wealth"
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold leading-5 text-[#102d63]">
                      Top 5 Ways to Build Wealth in 2026
                    </h4>

                    <p className="mt-1 text-xs text-[#3982e8]">
                      August 10, 2026
                    </p>
                  </div>
                </Link>

                <Link
                  href="/#"
                  className="group flex gap-3"
                >
                  <div className="relative h-[82px] w-[135px] shrink-0 overflow-hidden rounded-md">
                    <Image
                      src="/service.png"
                      alt="Smart Tax Planning"
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold leading-5 text-[#102d63]">
                      A Guide to Smart Tax Planning
                    </h4>

                    <p className="mt-1 text-xs text-[#3982e8]">
                      August 05, 2026
                    </p>
                  </div>
                </Link>

              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#1675e8] to-[#083b86] p-7 text-white">
              <div className="absolute right-0 top-0 h-full w-1/2 opacity-10">
                <div className="h-full w-full -skew-x-12 bg-white" />
              </div>

              <div className="relative">
                <div className="mb-3 h-[2px] w-12 bg-[#9ccfff]" />

                <p className="mb-1 text-sm font-medium text-[#dcecff]">
                  Need Expert Advice?
                </p>

                <h3 className="mb-3 text-2xl font-bold leading-8">
                  Let&apos;s Plan Your
                  <br />
                  Financial Future
                  <br />
                  Together
                </h3>

                <p className="mb-5 text-sm leading-5 text-[#dcecff]">
                  Get in touch with our advisors for personalized investment
                  guidance.
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-md bg-white px-7 py-3 text-sm font-semibold text-[#1769e0] transition hover:bg-[#f0f6ff]"
                >
                  Get in Touch
                  <span className="text-lg">→</span>
                </Link>
              </div>
            </div>

            <div className="rounded-lg bg-[#f4f8fd] p-5 sm:p-6">
              <h3 className="mb-4 text-xl font-bold text-[#102d63]">
                Categories
              </h3>

              <div className="divide-y divide-[#dce6f3]">
                {[
                  "Investment Planning",
                  "Retirement Planning",
                  "Wealth Management",
                  "Tax Planning",
                  "Financial Tips",
                  "Market Insights",
                ].map((category) => (
                  <Link
                    key={category}
                    href="#"
                    className="flex items-center justify-between py-3 text-sm text-[#31558f] transition hover:text-[#1769e0]"
                  >
                    <span>{category}</span>
                    <span className="text-lg">›</span>
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