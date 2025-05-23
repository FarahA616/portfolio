export default function WorkCard() {
  return (
    <div
      data-testid="workCard"
      className="flex flex-col gap-3 p-6 border border-gray-200 dark:border-gray-700 rounded-md shadow-md bg-white dark:bg-gray-900 text-black dark:text-white"
    >
      <div className="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          className="w-6 h-6 text-gray-500 dark:text-gray-300"
          aria-hidden="true"
        >
          <path
            d="M488.727,100.848H372.364V31.03c0-12.853-10.42-23.273-23.273-23.273H162.909c-12.853,0-23.273,10.42-23.273,23.273
      v69.818H23.273C10.42,100.848,0,111.268,0,124.121v170.667c0,11.247,8.045,20.885,19.11,22.897l11.92,2.166V480.97
      c0,12.853,10.42,23.273,23.273,23.273h403.394c12.853,0,23.273-10.42,23.273-23.273V319.851l11.922-2.166
      c11.064-2.012,19.108-11.65,19.108-22.897V124.121C512,111.268,501.58,100.848,488.727,100.848z M186.182,54.303h139.636v46.545
      H186.182V54.303z M434.424,457.697H77.576V328.315l93.091,16.925v27.124c0,12.853,10.42,23.273,23.273,23.273h124.121
      c12.853,0,23.273-10.42,23.273-23.273v-27.122l93.091-16.925V457.697z M217.212,349.091v-46.545h77.576v46.545H217.212z
       M465.455,275.364l-124.121,22.568v-18.66c0-12.853-10.42-23.273-23.273-23.273H193.939c-12.853,0-23.273,10.42-23.273,23.273
      v18.66L46.545,275.364V147.394h116.364h186.182h116.364V275.364z"
          />
        </svg>

        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Work</h2>
      </div>

      <p className="text-gray-600 dark:text-gray-300 text-sm">
        I haven&apos;t worked for any companies yet, as I am pursuing my degree in Software Engineering.
        But I am looking for internships and co-op opportunities. I am also open to freelance work
        and volunteering for open-source projects. If you are interested in working with me, please
        contact me.
      </p>
    </div>
  );
}
