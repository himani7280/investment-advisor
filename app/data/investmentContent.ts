import data from "./investment.json";

const sections = data.Investment.sections;

export const investmentTemplate =
  data.Investment.templateComponents["template-1"];

export const investmentContent = {
  heroes: {
    about: sections.Hero.variants.InvestmentAboutHero1,
    contact: sections.Hero.variants.InvestmentContactHero1,
    blog: sections.Hero.variants.InvestmentBlogHero1,
    service: sections.Hero.variants.InvestmentServicesHero1,
    investment: sections.Hero.variants.InvestmentProcessHero1,
    BlogDetail: sections.Hero.variants.InvestmentBlogDetailHero1,
    serviceDetail: sections.Hero.variants.InvestmentServiceDetailHero1,
    missionVision: sections.Hero.variants.InvestmentMissionVisionHero1,
    whyChooseUs: sections.Hero.variants.InvestmentWhyChooseUsHero1,
    ourTeam: sections.Hero.variants.InvestmentOurTeamHero1,
    teamDetails: sections.Hero.variants.InvestmentTeamDetailsHero1,
    ourPartners: sections.Hero.variants.InvestmentPartnersHero1,
    testimonials: sections.Hero.variants.InvestmentTestimonialsHero1,
    faqs: sections.Hero.variants.InvestmentFaqHero1,
    awards: sections.Hero.variants.InvestmentAwardsHero1,
    privacyPolicy: sections.Hero.variants.InvestmentPrivacyHero1,
    bookConsultation: sections.Hero.variants.InvestmentConsultationHero1,
  },
  homeHero: sections.HomeHero.variants.InvestmentHomeHero1,
  about: sections.About.variants.InvestmentAbout1,
  services: sections.Services.variants.InvestmentServices1,
  howItWorks: sections.HowItWorks.variants.InvestmentHowItWorks1,
  trusted: sections.Trusted.variants.InvestmentTrusted1,
  whyChooseUs: sections.WhyChooseUs.variants.InvestmentWhyChooseUs1,
  testimonials: sections.Testimonials.variants.InvestmentTestimonials1,
  blog: sections.Blog.variants.InvestmentBlog1,
  partners: sections.Partners.variants.InvestmentPartners1,
  faq: sections.Faq.variants.InvestmentFaq1,
  awards: sections.Awards.variants.InvestmentAwards1,
  reviews: sections.Reviews.variants.InvestmentReviews1,
  privacyPolicy: sections.PrivacyPolicy.variants.InvestmentPrivacyPolicy1,
  team: sections.Team.variants.InvestmentTeam1,
  aboutPage: sections.AboutPage.variants.InvestmentAboutPage1,
  blogPage: sections.BlogPage.variants.InvestmentBlogPage1,
  blogDetail: sections.BlogDetailContent.variants.InvestmentBlogDetail1,
  missionVision: sections.MissionVisionContent.variants.InvestmentMissionVision1,
  siteChrome: sections.SiteChromeContent.variants.InvestmentSiteChrome1,
  contactForm: sections.ContactFormContent.variants.InvestmentContactForm1,
  consultation: sections.ConsultationContent.variants.InvestmentConsultation1,
  teamProfile: sections.TeamProfileContent.variants.InvestmentTeamProfile1,
  serviceDetail: sections.ServiceDetailContent.variants.InvestmentServiceDetail1,
  contactLocation: sections.ContactLocation.variants.InvestmentLocation1,
  investmentProcess: sections.InvestmentProcess.variants.InvestmentProcess1,
  processWork: sections.ProcessWork.variants.InvestmentProcessWork1,
};
