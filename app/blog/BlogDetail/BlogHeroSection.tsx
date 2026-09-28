
import Image from "next/image";

interface HeroProps {
  title: string;
  image: string;
  alt?: string;
}
const BlogHeroSection = () => {
     return (
       <section className="relative w-full h-[55vh] min-h-[350px] max-h-[650px] overflow-hidden">
         <Image
           src="/blog.png"
           alt="Blog "
           fill
           priority
           className="object-cover"
         />
   
         <div className="absolute inset-0 bg-black/35"></div>
   
         <div className="absolute inset-0 flex items-center justify-center">
           <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">
            Blog Detail
           </h1>
         </div>
       </section>
     );
}

export default BlogHeroSection