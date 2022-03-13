<template>
  <div class="flex h-screen">
    <div class="flex flex-col flex-1 min-w-0 overflow-hidden">
      <div class="relative z-0 flex flex-1 overflow-hidden">
        <main
          class="relative z-0 flex-1 overflow-y-auto bg-white  focus:outline-none xl:order-last"
        >
          <nav
            class="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden"
            aria-label="Breadcrumb"
          >
            <a
              href="#"
              class="inline-flex items-center space-x-3 text-sm font-medium text-gray-900 "
            >
              <svg
                class="w-5 h-5 -ml-2 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Directory</span>
            </a>
          </nav>

          <article>
            <div>
              <div>
                <img
                  class="object-cover w-full h-32 lg:h-48"
                  src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt=""
                />
              </div>
              <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                  <div class="flex">
                    <img
                      class="w-24 h-24 rounded-full  ring-4 ring-white sm:h-32 sm:w-32"
                      src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                      alt=""
                    />
                  </div>
                  <div
                    class="mt-6  sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1"
                  >
                    <div class="flex-1 min-w-0 mt-6 sm:hidden 2xl:block">
                      <h1 class="text-2xl font-bold text-gray-900 truncate">
                        Ricardo Cooper
                      </h1>
                    </div>
                    <div
                      class="flex flex-col mt-6 space-y-3  justify-stretch sm:flex-row sm:space-y-0 sm:space-x-4"
                    >
                      <button
                        type="button"
                        class="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                      >
                        <svg
                          class="w-5 h-5 mr-2 -ml-1 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                          />
                          <path
                            d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                          />
                        </svg>
                        <span>Message</span>
                      </button>
                      <button
                        type="button"
                        class="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                      >
                        <svg
                          class="w-5 h-5 mr-2 -ml-1 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                          />
                        </svg>
                        <span>Call</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="flex-1 hidden min-w-0 mt-6 sm:block 2xl:hidden">
                  <h1 class="text-2xl font-bold text-gray-900 truncate">
                    Ricardo Cooper
                  </h1>
                </div>
              </div>
            </div>

            <div class="mt-6 sm:mt-2 2xl:mt-5">
              <div class="border-b border-gray-200"></div>
            </div>

            <div class="max-w-5xl px-4 mx-auto mt-6 sm:px-6 lg:px-8">
              <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-gray-500">Phone</dt>
                  <dd class="mt-1 text-sm text-gray-900">(555) 123-4567</dd>
                </div>

                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-gray-500">Email</dt>
                  <dd class="mt-1 text-sm text-gray-900">
                    ricardocooper@example.com
                  </dd>
                </div>

                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-gray-500">Title</dt>
                  <dd class="mt-1 text-sm text-gray-900">
                    Senior Front-End Developer
                  </dd>
                </div>

                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-gray-500">Team</dt>
                  <dd class="mt-1 text-sm text-gray-900">
                    Product Development
                  </dd>
                </div>

                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-gray-500">Location</dt>
                  <dd class="mt-1 text-sm text-gray-900">San Francisco</dd>
                </div>

                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-gray-500">Sits</dt>
                  <dd class="mt-1 text-sm text-gray-900">Oasis, 4th floor</dd>
                </div>

                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-gray-500">Salary</dt>
                  <dd class="mt-1 text-sm text-gray-900">$145,000</dd>
                </div>

                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-gray-500">Birthday</dt>
                  <dd class="mt-1 text-sm text-gray-900">June 8, 1990</dd>
                </div>

                <div class="sm:col-span-2">
                  <dt class="text-sm font-medium text-gray-500">About</dt>
                  <dd class="mt-1 space-y-5 text-sm text-gray-900 max-w-prose">
                    <p>
                      Tincidunt quam neque in cursus viverra orci, dapibus nec
                      tristique. Nullam ut sit dolor consectetur urna, dui cras
                      nec sed. Cursus risus congue arcu aenean posuere aliquam.
                    </p>
                    <p>
                      Et vivamus lorem pulvinar nascetur non. Pulvinar a sed
                      platea rhoncus ac mauris amet. Urna, sem pretium sit
                      pretium urna, senectus vitae. Scelerisque fermentum,
                      cursus felis dui suspendisse velit pharetra. Augue et duis
                      cursus maecenas eget quam lectus. Accumsan vitae nascetur
                      pharetra rhoncus praesent dictum risus suspendisse.
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </article>
        </main>
        <aside
          class="flex-shrink-0 hidden bg-white border-r border-gray-200  xl:order-first xl:flex xl:flex-col w-96"
        >
          <div class="px-6 pt-6 pb-4">
            <h2 class="text-lg font-medium text-gray-900">Directory</h2>
            <p class="mt-1 text-sm text-gray-600">
              Search directory of 3,018 employees
            </p>
            <form class="flex mt-6 space-x-4" action="#">
              <div class="flex-1 min-w-0">
                <label for="search" class="sr-only">Search</label>
                <div class="relative rounded-md shadow-sm">
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "
                  >
                    <svg
                      class="w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    name="search"
                    id="search"
                    class="block w-full pl-10 border-gray-300 rounded-md  focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                    placeholder="Search"
                  />
                </div>
              </div>
              <button
                type="submit"
                class="
                  inline-flex
                  justify-center
                  px-3.5
                  py-2
                  border border-gray-300
                  shadow-sm
                  text-sm
                  font-medium
                  rounded-md
                  text-gray-700
                  bg-white
                  hover:bg-gray-50
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-pink-500
                "
              >
                <svg
                  class="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Search</span>
              </button>
            </form>
          </div>
          <!-- Directory list -->
          <nav class="flex-1 min-h-0 overflow-y-auto" aria-label="Directory">
            <div class="relative">
              <ul role="list" class="relative z-0 divide-y divide-gray-200">
                <li v-for="n in 20" :key="n">
                  <div
                    class="relative flex items-center px-6 py-5 space-x-3  hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500"
                  >
                    <div class="flex-shrink-0">
                      <img
                        class="w-10 h-10 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <a href="#" class="focus:outline-none">
                        <!-- Extend touch target to entire panel -->
                        <span
                          class="absolute inset-0"
                          aria-hidden="true"
                        ></span>
                        <p class="text-sm font-medium text-gray-900">
                          Leslie Abbott
                        </p>
                        <p class="text-sm text-gray-500 truncate">
                          Co-Founder / CEO
                        </p>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: ['authIndent'],

  data() {
    return {
      user: '',
    }
  },

  async asyncData({ app, errors }) {
    try {
      let response = await app.$axios.get('me')

      return {
        user: response.data,
      }
    } catch (e) {
      console.log(e)
    }
  },
}
</script>
