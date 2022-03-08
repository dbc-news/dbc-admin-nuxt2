<template>
  <aside class="px-1 mt-3 sm:mt-0">
    <div
      class="w-full mx-auto overflow-y-auto bg-white border-l border-gray-200 rounded-md  sm:rounded-none sm:w-68 md:w-72"
    >
      <div class="p-2 pb-16 space-y-6 sm:p-3" v-if="image">
        <div>
          <div
            class="block w-full overflow-hidden rounded-lg  aspect-w-10 aspect-h-7"
          >
            <img
              src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=512&amp;q=80"
              alt=""
              class="object-cover"
            />
          </div>
          <div class="flex items-start justify-between mt-4">
            <div>
              <h2 class="text-lg font-medium text-gray-900">
                <span class="sr-only">Details for </span>IMG_4985.HEIC
              </h2>
              <p class="text-sm font-medium text-gray-500">3.9 MB</p>
            </div>
            <button
              type="button"
              class="flex items-center justify-center w-8 h-8 ml-4 text-gray-400 bg-white rounded-full  hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <svg
                class="w-6 h-6"
                x-description="Heroicon name: outline/heart"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
              <span class="sr-only">Favorite</span>
            </button>
          </div>
        </div>
        <div>
          <h3 class="font-medium text-gray-900">Information</h3>
          <dl
            class="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200 "
          >
            <div class="flex justify-between py-3 text-sm font-medium">
              <dt class="text-gray-500">Uploaded by</dt>
              <dd class="text-gray-900">Marie Culver</dd>
            </div>

            <div class="flex justify-between py-3 text-sm font-medium">
              <dt class="text-gray-500">Created</dt>
              <dd class="text-gray-900">June 8, 2020</dd>
            </div>

            <div class="flex justify-between py-3 text-sm font-medium">
              <dt class="text-gray-500">Last modified</dt>
              <dd class="text-gray-900">June 8, 2020</dd>
            </div>

            <div class="flex justify-between py-3 text-sm font-medium">
              <dt class="text-gray-500">Dimensions</dt>
              <dd class="text-gray-900">4032 x 3024</dd>
            </div>

            <div class="flex justify-between py-3 text-sm font-medium">
              <dt class="text-gray-500">Resolution</dt>
              <dd class="text-gray-900">72 x 72</dd>
            </div>
          </dl>
        </div>
        <div>
          <h3 class="font-medium text-gray-900">Description</h3>
          <div class="flex items-center justify-between mt-2">
            <p class="text-sm italic text-gray-500">
              Add a description to this image.
            </p>
            <button
              type="button"
              class="flex items-center justify-center w-8 h-8 text-gray-400 bg-white rounded-full  hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <svg
                class="w-5 h-5"
                x-description="Heroicon name: solid/pencil"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                ></path>
              </svg>
              <span class="sr-only">Add description</span>
            </button>
          </div>
        </div>
        <div>
          <h3 class="font-medium text-gray-900">Shared with</h3>
          <ul
            role="list"
            class="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200 "
          >
            <li class="flex items-center justify-between py-3">
              <div class="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=1024&amp;h=1024&amp;q=80"
                  alt=""
                  class="w-8 h-8 rounded-full"
                />
                <p class="ml-4 text-sm font-medium text-gray-900">
                  Aimee Douglas
                </p>
              </div>
              <button
                type="button"
                class="ml-6 text-sm font-medium text-indigo-600 bg-white rounded-md  hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Remove<span class="sr-only"> Aimee Douglas</span>
              </button>
            </li>

            <li class="flex items-center justify-between py-3">
              <div class="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixqx=oilqXxSqey&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt=""
                  class="w-8 h-8 rounded-full"
                />
                <p class="ml-4 text-sm font-medium text-gray-900">
                  Andrea McMillan
                </p>
              </div>
              <button
                type="button"
                class="ml-6 text-sm font-medium text-indigo-600 bg-white rounded-md  hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Remove<span class="sr-only"> Andrea McMillan</span>
              </button>
            </li>

            <li class="flex items-center justify-between py-2">
              <button
                type="button"
                class="flex items-center p-1 -ml-1 bg-white rounded-md  group focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <span
                  class="flex items-center justify-center w-8 h-8 text-gray-400 border-2 border-gray-300 border-dashed rounded-full "
                >
                  <svg
                    class="w-5 h-5"
                    x-description="Heroicon name: solid/plus-sm"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span
                  class="ml-4 text-sm font-medium text-indigo-600  group-hover:text-indigo-500"
                  >Share</span
                >
              </button>
            </li>
          </ul>
        </div>
        <div class="flex">
          <button
            type="button"
            class="flex-1 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Download
          </button>
          <button
            type="button"
            class="flex-1 px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Delete
          </button>
        </div>
      </div>
      <div class="fixed w-full lg:inset-y-0" v-else>
        <div class="flex flex-col flex-grow h-full text-red-600 bg-red-400">
          <div class="absolute top-0">Select an image to view and edit</div>
        </div>
      </div>
    </div>
  </aside>
</template>
<script >
export default {
  props: {
    image: {
      required: false,
      type: Object,
      default: null,
    },
  },
}
</script>
