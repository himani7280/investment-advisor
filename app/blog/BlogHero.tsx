import React from 'react'
import Image from "next/image";

const BlogHero = () => {
     return (
       <section className="relative w-full h-[55vh] min-h-[350px] max-h-[650px] overflow-hidden">
         <Image
           src="/about/img1.png"
           alt="About Us"
           fill
           priority
           className="object-cover"
         />
   
         <div className="absolute inset-0 bg-black/35"></div>
   
         <div className="absolute inset-0 flex items-center justify-center">
           <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">
             Blog
           </h1>
         </div>
       </section>
     );
}

export default BlogHero