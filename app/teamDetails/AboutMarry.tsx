'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  ArrowRight,
  Link as LinkIcon,
  Users,
  Settings,
  TrendingUp,
  Award,
  GraduationCap,
  Check,
} from 'lucide-react'

// Custom SVGs for exact Brand Social Icons (LinkedIn, Facebook, X/Twitter) - resized to w-5 h-5
const LinkedinIcon = () => (
  <svg className="w-5 h-5 fill-[#0B1E48] transition-colors duration-200 group-hover:fill-white" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
)

const FacebookIcon = () => (
  <svg className="w-5 h-5 fill-[#0B1E48] transition-colors duration-200 group-hover:fill-white" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const TwitterXIcon = () => (
  <svg className="w-5 h-5 fill-[#0B1E48] transition-colors duration-200 group-hover:fill-white" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export default function AboutMarry() {
  const [copied, setCopied] = useState(false)
  const [experienceCount, setExperienceCount] = useState(1)
  const [portfolioCount, setPortfolioCount] = useState(1)
  const [satisfactionCount, setSatisfactionCount] = useState(1)

  useEffect(() => {
    const startTime = performance.now()
    let frameId: number

    const updateCount = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / 1200, 1)
      setExperienceCount(Math.floor(1 + progress * 9))
      setPortfolioCount(Math.floor(1 + progress * 49))
      setSatisfactionCount(Math.floor(1 + progress * 97))

      if (progress < 1) {
        frameId = requestAnimationFrame(updateCount)
      }
    }

    frameId = requestAnimationFrame(updateCount)
    return () => cancelAnimationFrame(frameId)
  }, [])

  const handleCopyLink = async () => {
    try {
      if (typeof window !== 'undefined') {
        await navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch (err) {
      console.error(err)
    }
  }

  const skills = [
    { name: 'Strategic Planning', percentage: 90 },
    { name: 'Client Engagement', percentage: 85 },
    { name: 'Operations Management', percentage: 88 },
    { name: 'Financial Analysis', percentage: 80 },
  ]

  const expertise = [
    { title: 'Client Relationship Management', icon: <Users className="w-4 h-4 text-blue-600 transition-colors duration-200 group-hover:text-white" /> },
    { title: 'Operational Strategy & Process Improvement', icon: <Settings className="w-4 h-4 text-blue-600 transition-colors duration-200 group-hover:text-white" /> },
    { title: 'Investment Planning & Advisory', icon: <TrendingUp className="w-4 h-4 text-blue-600 transition-colors duration-200 group-hover:text-white" /> },
    { title: 'Team Leadership & Development', icon: <Award className="w-4 h-4 text-blue-600 transition-colors duration-200 group-hover:text-white" /> },
  ]

  const experiences = [
    {
      period: '2018 - Present',
      company: 'PrimeCore Investment Advisors',
      role: 'Operations Director',
    },
    {
      period: '2014 - 2018',
      company: 'FinTrust Capital',
      role: 'Senior Operations Manager',
    },
    {
      period: '2010 - 2014',
      company: 'Global Finance Solutions',
      role: 'Operations Associate',
    },
  ]

  return (
    <section className="mx-auto w-full max-w-7xl bg-white px-3 pt-8 pb-4 font-sans antialiased text-slate-800 sm:px-5 sm:pt-12 sm:pb-8 lg:px-10 lg:pt-14 lg:pb-10">
      {/* ==================== SECTION 1: TOP HERO ROW ==================== */}
      <div className="mb-6 grid grid-cols-1 items-start gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-12">
        
        {/* Left Column: Image + Integrated Stats Card */}
        <div className="flex min-w-0 flex-col justify-between overflow-hidden rounded-2xl border border-blue-100 bg-[#F5F8FF] md:col-span-1 lg:col-span-4">
          <div className="relative w-full h-[290px]">
            <Image
              src="/marry.png"
              alt="Mary Merrill"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          {/* Key Metrics Banner */}
          <div className="grid grid-cols-3 py-5 text-center divide-x divide-blue-200/60 bg-[#F5F8FF]">
            <div className="px-1">
              <div className="text-xl font-extrabold text-[#0B1E48] sm:text-2xl">{experienceCount}+</div>
              <div className="text-[11px] text-gray-500 font-medium leading-tight mt-1">
                Years<br />Experience
              </div>
            </div>
            <div className="px-1">
              <div className="text-xl sm:text-2xl font-extrabold text-[#0B1E48]">{portfolioCount}+</div>
              <div className="text-[11px] text-gray-500 font-medium leading-tight mt-1">
                Client<br />Portfolios
              </div>
            </div>
            <div className="px-1">
              <div className="text-xl sm:text-2xl font-extrabold text-[#0B1E48]">{satisfactionCount}%</div>
              <div className="text-[11px] text-gray-500 font-medium leading-tight mt-1">
                Client<br />Satisfaction
              </div>
            </div>
          </div>
        </div>

        {/* Center Column: Bio & Direct Contact Details */}
        <div className="flex h-full min-w-0 flex-col justify-between pt-1 md:col-span-1 lg:col-span-5">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E48] tracking-tight">Mary Merrill</h1>
            <p className="text-blue-600 font-semibold text-base mt-1 mb-2">Operations Director</p>
            <div className="w-8 h-[2px] bg-blue-600 mb-5"></div>

            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
              Mary Merrill brings over a decade of experience in investment advisory and financial services. With a strong focus on operational excellence, client satisfaction, and strategic growth, Mary plays a key role in ensuring that PrimeCore delivers consistent value and a seamless experience to every client.
            </p>
          </div>

          {/* Direct Contact Links */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-600 font-medium">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Phone className="w-4 h-4 fill-current" />
              </div>
              <span className="text-gray-700">+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-600 font-medium">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Mail className="w-4 h-4" />
              </div>
              <span className="min-w-0 break-all text-gray-700">mary.merrill@primecoreadvisors.com</span>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-600 font-medium">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-gray-700">New Delhi, India</span>
            </div>
          </div>
        </div>

        {/* Right Column: Share Profile & Let's Connect Card */}
        <div className="flex h-full min-w-0 flex-col justify-between pt-1 md:col-span-2 lg:col-span-3">
          {/* Share Profile Social Icons - Bada aur niche shift kiya gaya */}
          <div className="pt-2">
            <h3 className="text-xs font-bold text-[#0B1E48] uppercase tracking-wider mb-3">
              Share Profile
            </h3>
            <div className="mt-3 flex flex-wrap items-center gap-3 sm:mt-4">
              <button aria-label="LinkedIn" className="group flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 shadow-sm transition-all hover:scale-105 hover:border-blue-600 hover:bg-blue-600">
                <LinkedinIcon />
              </button>
              <button aria-label="Facebook" className="group flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 shadow-sm transition-all hover:scale-105 hover:border-blue-600 hover:bg-blue-600">
                <FacebookIcon />
              </button>
              <button aria-label="Twitter/X" className="group flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 shadow-sm transition-all hover:scale-105 hover:border-blue-600 hover:bg-blue-600">
                <TwitterXIcon />
              </button>
              <button onClick={handleCopyLink} aria-label="Copy Link" className="group flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 shadow-sm transition-all hover:scale-105 hover:border-blue-600 hover:bg-blue-600">
                {copied ? <Check className="h-5 w-5 text-green-600" /> : <LinkIcon className="h-5 w-5 text-[#0B1E48] transition-colors group-hover:text-white" />}
              </button>
            </div>
          </div>

          {/* Let's Connect Card */}
          <div className="bg-[#F5F8FF] border border-blue-100 rounded-2xl p-6 mt-6 lg:mt-0 flex flex-col justify-between">
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors duration-200 hover:bg-blue-600 hover:text-white">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1E48] mb-1">Let's Connect</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-6">
                Get in touch to discuss how we can work together.
              </p>
            </div>
            <Link
              href="#contact"
              className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              Contact Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* ==================== SECTION 2: MIDDLE ROW (ABOUT & SKILLS) ==================== */}
      <div className="mb-6 grid grid-cols-1 gap-6 border-t border-gray-100 pt-5 sm:gap-8 md:grid-cols-2 lg:grid-cols-12">
        {/* Left: About Paragraphs */}
        <div className="md:col-span-1 lg:col-span-6 pr-0 lg:pr-4">
          <h2 className="text-lg font-bold text-[#0B1E48] mb-1">About Mary Merrill</h2>
          <div className="w-8 h-[2px] bg-blue-600 mb-4"></div>

          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4">
            Mary Merrill has been an integral part of PrimeCore Investment Advisors, leading operational strategy and client engagement initiatives. With a deep understanding of market dynamics and a passion for helping individuals achieve their financial goals, Mary ensures that our processes, people, and technology work together to deliver exceptional client outcomes.
          </p>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
            Mary believes in building long-term relationships based on trust, transparency, and performance. Her leadership and commitment continue to drive PrimeCore's mission of empowering clients with smarter investment solutions.
          </p>
        </div>

        {/* Right: Key Skills Progress Bars */}
        <div className="md:col-span-1 lg:col-span-6">
          <h2 className="text-lg font-bold text-[#0B1E48] mb-1">Key Skills</h2>
          <div className="w-8 h-[2px] bg-blue-600 mb-6"></div>

          <div className="space-y-5">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-xs font-bold text-[#0B1E48] mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="w-full bg-blue-50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ==================== SECTION 3: BOTTOM ROW (EXPERTISE, QUOTE & EXPERIENCE) ==================== */}
      <div className="grid grid-cols-1 items-stretch gap-6 border-t border-gray-100 pt-5 sm:gap-8 md:grid-cols-2 lg:grid-cols-12">
        
        {/* Column 1: Areas of Expertise */}
        <div className="md:col-span-1 lg:col-span-4 flex flex-col justify-start">
          <h2 className="text-lg font-bold text-[#0B1E48] mb-1">Areas of Expertise</h2>
          <div className="w-8 h-[2px] bg-blue-600 mb-6"></div>

          <div className="space-y-4">
            {expertise.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 transition-all duration-200 hover:scale-110 hover:bg-blue-600 hover:shadow-sm">
                  {item.icon}
                </div>
                <span className="text-xs font-medium text-gray-700 leading-snug sm:text-sm">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Quote Box */}
        <div className="md:col-span-1 lg:col-span-4 bg-[#F5F8FF] border border-blue-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="text-blue-600 text-5xl font-serif font-bold leading-none mb-3">“</div>
            <p className="text-base sm:text-lg font-bold text-[#0B1E48] leading-snug mb-8">
              Success in investing comes from discipline, clarity, and a client-first mindset.
            </p>
          </div>
          <div>
            <div className="w-8 h-[2px] bg-blue-600 mb-2"></div>
            <p className="text-xs font-bold text-[#0B1E48]">Mary Merrill</p>
          </div>
        </div>

        {/* Column 3: Experience Timeline & Education */}
        <div className="md:col-span-2 lg:col-span-4 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#0B1E48] mb-1">Experience & Education</h2>
            <div className="w-8 h-[2px] bg-blue-600 mb-6"></div>

            {/* Timeline with Inline Date Column */}
            <div className="relative border-l-2 border-blue-600 pl-4 space-y-5 ml-1">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative flex items-start gap-3">
                  {/* Blue Timeline Node */}
                  <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                  
                  <span className="text-[11px] font-semibold text-gray-400 shrink-0 w-20 pt-0.5">
                    {exp.period}
                  </span>
                  <div>
                    <div className="text-xs font-bold text-[#0B1E48]">{exp.company}</div>
                    <div className="text-[11px] text-gray-500">{exp.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Pill */}
          <div className="flex items-center gap-3 pt-2">
            <div className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-200 hover:scale-110 hover:bg-blue-600 hover:text-white">
              <GraduationCap className="h-5 w-5 transition-colors group-hover:text-white" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0B1E48]">
                Master of Business Administration (MBA)
              </div>
              <div className="text-[11px] text-gray-500">Delhi University, India | 2010</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}