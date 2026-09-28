
import Hero from '@/app/components/Hero'
import BlogHeroDetail from './BlogHeroDetail'



const page = () => {
  return (
    <div>
      <Hero page="BlogDetail"/>
        <BlogHeroDetail/>
    </div>
  )
}

export default page