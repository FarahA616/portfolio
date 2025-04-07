import Navbar from "@/components/Navbar";
import Image from "next/image";
import NewsletterCard from "@/components/NewsLetterCard";
import WorkCard from "@/components/WorkCard";
import SkillsCard from "@/components/SkillsCard";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Portfolio - Home",
  description: "Home page of my portfolio.",
};

export default function Home() {
  // Example article data in English
  const articles = [
    {
      date: "December 25, 2023",
      title: "Embracing Modern Web Technologies",
      description:
        "Discover how modern frameworks and libraries are revolutionizing the way we build applications, enabling faster development and more robust user experiences.",
    },
    {
      date: "December 25, 2023",
      title: "Building Scalable Applications",
      description:
        "Learn about strategies for designing systems that efficiently handle growing user demands and data, ensuring reliability and high performance.",
    },
    {
      date: "December 25, 2023",
      title: "Innovative Problem Solving in Tech",
      description:
        "Explore techniques and methodologies that drive innovative solutions in the fast-paced world of software engineering.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 py-10">
          {/* Left side */}
          <div className="md:col-span-2">
            <Image
              src="/portfolio.png"
              alt="profile"
              width={128}
              height={128}
              className="rounded-full shadow-lg"
            />
            <h1 className="text-2xl font-bold  dark:text-white mt-4">
              Software Engineer, Wife, and a Mother
            </h1>
            <p className="mt-2 text-gray-600   dark:text-gray-300">
             Driven by a passion for innovation and a commitment to continuous learning, I focus on creating dependable and scalable software solutions. Whether it&#39;s designing modern web applications or solving intricate challenges, I aim to deliver impactful results that not only meet expectations but also inspire. As a dedicated software engineer, a loving wife, and a proud mother, I bring a unique perspective to my work, balancing creativity, precision, and empathy to craft solutions that truly make a difference.
            </p>

            {/* Article Section */}
            <div className="w-full md:w-[594px] flex flex-col gap-[40px] pt-8 pb-8">
              {articles.map((article, index) => (
                <div key={index} className="space-y-2">
                  <time className="inline-flex items-center gap-2 font-roboto font-normal text-[14px] leading-6 tracking-[0%] text-[#A1A1AA]">
                    <span className="mr-1 text-[#A1A1AA]">|</span> {article.date}
                  </time>
                  <h2 className="text-xl  dark:text-white font-bold">{article.title}</h2>
                  <div className="w-[512px]  dark:text-gray-300 pt-2">
                    <p className="w-[512px] font-roboto   dark:text-gray-300 font-normal text-[14px] leading-6 tracking-[0%] text-[#52525B]">
                      {article.description}
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href="#"
                      className="inline-flex items-center font-roboto font-medium text-[14px] leading-6 tracking-[0%] text-[#14B8A6]"
                    >
                      Read article &gt;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="space-y-6 transform scale-90 origin-top-right">
            <NewsletterCard />
            <WorkCard />
            <SkillsCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}