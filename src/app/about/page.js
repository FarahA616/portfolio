import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-10 p-8 max-w-6xl mx-auto">
      {/* Left: About text */}
      <div className="md:w-2/3 text-black dark:text-white">
        <h1 className="text-4xl font-bold leading-tight mb-6">
          I&#39;m ChickenJoe. I live in New York City, where I develop the future.
        </h1>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Meet ChickenJoe, my unstoppable poultry sidekick who struts around
          the Big Apple like he owns the place. Our daily routine? Brainstorming
          the next big app while sipping coffee in Central Park—though
          ChickenJoe prefers pecking at leftover bagels.
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          I&apos;m a software engineer by day, a dreamer by night, and a proud
          caretaker of my feathery friend. When I&apos;m not debugging code,
          I&apos;m often chasing ChickenJoe through the streets of Manhattan.
          It&apos;s a workout, but hey, it keeps me on my toes.
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Between the bustling city lights and ChickenJoe&apos;s random
          crowing, life is never dull. I&apos;m always looking for ways to merge
          tech and whimsy—like designing a crow-activated door or an app that
          translates clucks into English. Stay tuned for more poultry-inspired projects.
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          In all seriousness, I&apos;m passionate about building solutions that
          bridge creativity and practicality. ChickenJoe might hog the spotlight,
          but together, we aim to inspire a world where technology serves everyone—humans and chickens alike!
        </p>
      </div>

      {/* Right: Image + Links and extra sections */}
      <div className="md:w-1/3 flex flex-col items-center md:items-start text-sm text-gray-600 dark:text-gray-300">
        <Image
          src="/ChickJoe.png"
          alt="Profile"
          width={350}
          height={350}
          className="rounded-lg object-cover mb-6"
        />

        {/* Social Links */}
        <div className="flex flex-col gap-3 w-full items-start">
          <a href="https://x.com" className="flex items-center gap-2 hover:text-teal-500">
            <Image src="/twitter.svg" alt="X" width={16} height={16} className="w-4 h-4" />
            Follow me on X
          </a>
          <a href="https://github.com/yourusername" className="flex items-center gap-2 hover:text-teal-500">
            <Image src="/github.svg" alt="GitHub" width={16} height={16} className="w-4 h-4" />
            Follow me on GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" className="flex items-center gap-2 hover:text-teal-500">
            <Image src="/linkedin.svg" alt="LinkedIn" width={16} height={16} className="w-4 h-4" />
            Follow me on LinkedIn
          </a>
          <hr className="border-t border-gray-400 dark:border-white my-3 w-1/2" />
          <a
            href="mailto:jane@email.com"
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
            ChickenJoe@email.com
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
              <li>2015: Graduated with a degree in Computer Science</li>
              <li>2016: Landed my first job as a Software Engineer</li>
              <li>2018: Developed a groundbreaking mobile app</li>
              <li>2020: Promoted to Lead Developer at my company</li>
              <li>2023: Founded my own tech startup</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
