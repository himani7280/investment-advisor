import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Share2, ArrowRight } from 'lucide-react'

interface TeamMember {
  id: string
  name: string
  role: string
  description: string
  image: string
  profileUrl: string
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Amelia Margaret',
    role: 'Director',
    description:
      'Leads our strategic vision with deep industry expertise and a client-first approach.',
    image: '/team1.png',
    profileUrl: '#',
  },
  {
    id: '2',
    name: 'Mary Merrill',
    role: 'Operations Director',
    description:
      'Ensures seamless operations and delivers excellence across every client interaction.',
    image: '/team2.png',
    profileUrl: '#',
  },
  {
    id: '3',
    name: 'Andrew Cameron',
    role: 'Team Leader',
    description:
      'Guides and motivates the team to deliver the best financial solutions for our clients.',
    image: '/team3.png',
    profileUrl: '#',
  },
  {
    id: '4',
    name: 'Sofia Charlotte',
    role: 'Manager',
    description:
      'Brings expertise and dedication to help clients make confident financial decisions.',
    image: '/team4.png',
    profileUrl: '#',
  },
    {
    id: '5',
    name: 'Amelia Margaret',
    role: 'Director',
    description:
      'Leads our strategic vision with deep industry expertise and a client-first approach.',
    image: '/team1.png',
    profileUrl: '#',
  },
  {
    id: '6',
    name: 'Mary Merrill',
    role: 'Operations Director',
    description:
      'Ensures seamless operations and delivers excellence across every client interaction.',
    image: '/team2.png',
    profileUrl: '#',
  },
  {
    id: '7',
    name: 'Andrew Cameron',
    role: 'Team Leader',
    description:
      'Guides and motivates the team to deliver the best financial solutions for our clients.',
    image: '/team3.png',
    profileUrl: '#',
  },
  {
    id: '8',
    name: 'Sofia Charlotte',
    role: 'Manager',
    description:
      'Brings expertise and dedication to help clients make confident financial decisions.',
    image: '/team4.png',
    profileUrl: '#',
  },
]

const OurTeam: React.FC = () => {
  return (
    <section className="mx-auto w-full max-w-7xl bg-white px-4 pt-8 pb-8 sm:px-6 sm:pt-12 lg:px-10 lg:pt-14">
      {/* Header Section */}
      <div className="text-center mb-10 md:mb-14">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="w-8 h-[2px] bg-[#2563eb]"></span>
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#1e3a8a] uppercase">
            OUR TEAM
          </span>
          <span className="w-8 h-[2px] bg-[#2563eb]"></span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1E48] tracking-tight mb-3">
          Meet Our <span className="text-[#2563eb]">Experts</span>
        </h2>
        <p className="text-[#64748b] text-sm sm:text-base max-w-xl mx-auto font-normal">
          A team of experienced professionals, committed to helping you achieve
          your financial goals.
        </p>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
          >
            {/* Image & Share Button */}
            <div className="relative aspect-[4/3] sm:aspect-square w-full bg-slate-100 overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <button
                type="button"
                aria-label={`Share ${member.name}'s profile`}
                className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white text-[#2563eb] flex items-center justify-center shadow-md hover:bg-blue-50 transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>

            {/* Info Section */}
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#0B1E48]">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-[#2563eb] mt-0.5">
                  {member.role}
                </p>

                {/* Decorative underline */}
                <div className="w-6 h-[2px] bg-[#2563eb] my-3"></div>

                <p className="text-xs text-[#64748b] leading-relaxed mb-6">
                  {member.description}
                </p>
              </div>

              {/* Action Link */}
              <Link
                href={member.profileUrl}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#2563eb] hover:gap-3 transition-all duration-200"
              >
                View Profile
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurTeam