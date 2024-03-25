import React from "react";

const Material = () => {
  const teachers = ["t1", "t2", "t3", "t4"];
  return (
    <>
      <div className="w-full h-full bg-mygrey rounded-lg overflow-y-scroll shadow-lg p-6  border border-gray-200">
        <h2 className="text-4xl font-serif text-center mt-0 mb-5 shadow-lg p-3 ">
          Assignments
        </h2>
        <div id="accordion-arrow-icon" data-accordion="open">
          <h2 id="accordion-arrow-icon-heading-1">
            <button
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-900 bg-gray-100 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-arrow-icon-body-1"
              aria-expanded="true"
              aria-controls="accordion-arrow-icon-body-1"
            >
              <span>Class of 2020</span>
            </button>
          </h2>
          <div
            id="accordion-arrow-icon-body-1"
            aria-labelledby="accordion-arrow-icon-heading-1"
          >
            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
              <p class="text-gray-500 dark:text-gray-400">
                Check out this guide to learn how to get started and start
                developing websites even faster with components on top of
                Tailwind CSS.
              </p>
            </div>
          </div>
          <h2 id="accordion-arrow-icon-heading-2">
            <button
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-arrow-icon-body-2"
              aria-expanded="false"
              aria-controls="accordion-arrow-icon-body-2"
            >
              <span>Upload Assignment</span>
              <svg
                data-accordion-icon
                class="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-arrow-icon-body-2"
            class="hidden"
            aria-labelledby="accordion-arrow-icon-heading-2"
          >
            <div class="p-2 border border-b-0 border-gray-200 dark:border-gray-700">
              <div className=" bg-mygrey rounded-lg overflow-hidden shadow-lg p-4  border border-gray-200">
                <div class="flex items-center justify-center p-12">
                  <div class="mx-auto w-full max-w-[550px] bg-white">
                    <form
                      class="py-6 px-9"
                      action="https://formbold.com/s/FORM_ID"
                      method="POST"
                    >
                      <div class="mb-5">
                        <label
                          for="email"
                          class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Select Course
                        </label>
                        <select
                          id="teacher"
                          required
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          // value={selectedTeacher}
                          // onChange={(e) => setSelectedTeacher(e.target.value)}
                        >
                          <option value="">Select</option>
                          {teachers.map((teacher, index) => (
                            <option key={index} value={teacher}>
                              {teacher}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div class="mb-6 pt-4">
                        <label class="mb-5 block text-xl font-semibold text-[#07074D]">
                          Upload File
                        </label>

                        <div class="mb-8">
                          <input
                            type="file"
                            name="file"
                            id="file"
                            class="sr-only"
                          />
                          <label
                            for="file"
                            class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                          >
                            <div>
                              <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                                Drop files here
                              </span>
                              <span class="mb-2 block text-base font-medium text-[#6B7280]">
                                Or
                              </span>
                              <span class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                                Browse
                              </span>
                            </div>
                          </label>
                        </div>

                        <div class="mb-5">
                          <label
                            for="Description"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            Description
                          </label>
                          <input
                            type="text"
                            name="description"
                            id="description"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div>

                      <div>
                        <button class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                          Send File
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 id="accordion-arrow-icon-heading-3">
            <button
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-arrow-icon-body-3"
              aria-expanded="false"
              aria-controls="accordion-arrow-icon-body-3"
            >
              <span>Grade Assignment</span>
              <svg
                data-accordion-icon
                class="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-arrow-icon-body-3"
            class="hidden"
            aria-labelledby="accordion-arrow-icon-heading-3"
          >
            <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                The main difference is that the core components from Flowbite
                are open source under the MIT license, whereas Tailwind UI is a
                paid product. Another difference is that Flowbite relies on
                smaller and standalone components, whereas Tailwind UI offers
                sections of pages.
              </p>
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                However, we actually recommend using both Flowbite, Flowbite
                Pro, and even Tailwind UI as there is no technical reason
                stopping you from using the best of two worlds.
              </p>
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                Learn more about these technologies:
              </p>
              <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
                <li>
                  <a
                    href="https://flowbite.com/pro/"
                    class="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    class="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Material;
