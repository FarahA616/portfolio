import Image from "next/image";
import Footer from "@/components/Footer";


export const metadata = {
  title: "About - My Portfolio",
  description: "Learn more about me and my journey.",
};

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-10 p-8 max-w-6xl mx-auto">
      {/* Left: About text */}
      <div className="md:w-2/3 text-black dark:text-white">
        <h1 className="text-4xl font-bold leading-tight mb-6">
          I&apos;m Farah. I live in Salt Lake City, where I am persuing my Bachelor&apos;s Degree.
        </h1>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
        I&apos;m Farah, a software engineer with a passion for creating innovative solutions and a commitment to continuous learning. I thrive on designing dependable and scalable software that makes a meaningful impact.        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
        Balancing my roles as a dedicated professional, a loving wife, and a proud mother, I bring a unique perspective to my work. My journey has been shaped by creativity, precision, and empathy, which I channel into crafting solutions that truly make a difference.
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
        Whether it&apos;s tackling complex challenges or building modern web applications, I strive to deliver results that not only meet expectations but also inspire. My experiences have taught me the value of perseverance, adaptability, and the importance of staying curious.
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
        I&apos;m excited to continue growing as a software engineer and to contribute to projects that bridge technology and human connection. Let&apos;s create something extraordinary together!
        </p>
      </div>

      {/* Right: Image + Links and extra sections */}
      <div className="md:w-1/3 flex flex-col items-center md:items-start text-sm text-gray-600 dark:text-gray-300">
        <Image
          src="/family.jpg"
          alt="Profile"
          width={350}
          height={350}
          className="rounded-lg object-cover mb-6"
        />

        {/* Social Links */}
        <div className="flex flex-col gap-3 w-full items-start">
          <a href="https://github.com/FarahA616" className="flex items-center gap-2 hover:text-teal-500">
            <Image src="/github.svg" alt="GitHub" width={16} height={16} className="w-4 h-4" />
            Follow me on GitHub
          </a>
          <a href="https://www.linkedin.com/in/farah-alabdulrazzak-3515b532b/" className="flex items-center gap-2 hover:text-teal-500">
            <Image src="/linkedin.svg" alt="LinkedIn" width={16} height={16} className="w-4 h-4" />
            Follow me on LinkedIn
          </a>
          <hr className="border-t border-gray-400 dark:border-white my-3 w-1/2" />
          <a
            href="mailto:farahf.aaf@gmail.com"
            className="flex items-center gap-2 hover:text-teal-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 text-gray-600 dark:text-gray-300"
            >
              <path d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" />
            </svg>
            farahf.aaf@gmail.com
          </a>
          {/* Downloadable Resume Link */}
          <a
            href="/resume.pdf"
            download
            className="mt-4 inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Download Resume
          </a>
          {/* Personal Quote */}
          <blockquote className="mt-4 italic text-gray-500 dark:text-gray-400 border-l-4 border-teal-600 pl-4">
            &quot;Keep clucking, keep coding, and never stop pecking at the secrets of the universe.&quot;
          </blockquote>
          {/* Career Timeline */}
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2">Career Highlights</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>2022: Graduated From High School</li>
              <li>2022: Got accepted at one of the biggest universities in KSA</li>
              <li>2023: Started my journey in Software engineering</li>
              <li>2024: Moved to the US whilst studying software engineering</li> 
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
