<template>
  <div class="flex flex-col flex-1 min-w-lg">
    <div class="lg:hidden">
      <div
        class="
          flex
          items-center
          justify-between
          bg-white
          border-b border-gray-200
          px-4
          py-1.5
        "
      >
        <div>
          <a href="http://metro.test/admin/dashboard">
            <svg xmlns="http://www.w3.org/2000/svg" class="block w-9 h-9">
              <g transform="translate(.1)" fill="none" fill-rule="evenodd">
                <g fill-rule="nonzero">
                  <g fill="#4A4A4A">
                    <path
                      d="m33.785 33.332-2.112-5.227a2.108 2.108 0 0 1 1.172-2.74 2.108 2.108 0 0 1 2.746 1.158l2.112 5.226a2.108 2.108 0 0 1-1.171 2.741 2.108 2.108 0 0 1-2.747-1.158zM29.27 22.159l-4.523-11.197a2.108 2.108 0 0 1 1.171-2.741 2.108 2.108 0 0 1 2.747 1.158l4.524 11.197a2.108 2.108 0 0 1-1.172 2.74 2.108 2.108 0 0 1-2.746-1.157z"
                    ></path>
                    <path
                      d="m35.439 34.617-23.54-3.44a2.157 2.157 0 0 1-1.83-2.423 2.114 2.114 0 0 1 2.4-1.805l23.54 3.44a2.157 2.157 0 0 1 1.83 2.423 2.114 2.114 0 0 1-2.4 1.805z"
                    ></path>
                    <path
                      d="M28.385 11.518 13.842 30.345a2.115 2.115 0 0 1-2.956.39l-.025-.02a2.157 2.157 0 0 1-.367-3.015L25.038 8.873a2.115 2.115 0 0 1 2.98-.37 2.157 2.157 0 0 1 .367 3.015z"
                    ></path>
                  </g>
                  <path
                    d="m26.698 25.672 5.176-10.55a2.157 2.157 0 0 1 2.875-.99 2.132 2.132 0 0 1 .985 2.862l-5.177 10.549a2.157 2.157 0 0 1-2.875.99 2.132 2.132 0 0 1-.984-2.86z"
                    fill="#53B5FF"
                  ></path>
                </g>
                <ellipse
                  stroke="#FFCE47"
                  stroke-width="2.42"
                  cx="21.559"
                  cy="6.882"
                  rx="5.705"
                  ry="5.672"
                ></ellipse>
                <ellipse
                  stroke="#7AE0CB"
                  stroke-width="1.614"
                  cx="4.475"
                  cy="31.17"
                  rx="3.668"
                  ry="3.646"
                ></ellipse>
                <ellipse
                  stroke="#25CFF7"
                  stroke-width="3.227"
                  cx="43.525"
                  cy="15.788"
                  rx="2.861"
                  ry="2.839"
                ></ellipse>
              </g>
            </svg>
          </a>
        </div>
        <div class="flex items-center flex-grow px-3 space-x-8">
          <input
            class="w-full h-10 border border-gray-300 rounded-md shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="search"
            placeholder="Search...."
            id=""
            name=""
          />
        </div>
        <div>
          <button
            type="button"
            class="inline-flex items-center justify-center w-12 h-12 -mr-3 text-gray-500 rounded-md  hover:text-gray-900"
            @click="open = true"
          >
            <span class="sr-only">Open sidebar</span>
            <svg
              class="w-6 h-6"
              x-description="Heroicon name: outline/menu"
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
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="flex my-3">
      <main
        class="flex-1 w-full h-screen px-2 mx-auto overflow-y-auto  sm:px-6 lg:pl-8 lg:pr-1"
        id="main-scroll"
        x-data="{createForm:false}"
      >
        <div class="my-3">
          <div
            wire:id="kgdrgJKXNcg9uuTsvLVK"
            class="flex flex-wrap items-center justify-between mb-3"
          >
            <h2 class="text-lg font-semibold leading-tight text-gray-800">
              Media
            </h2>
            <button
              class="px-3 py-1 text-white bg-green-600 rounded-md  hover:bg-green-700 hover:text-white focus:outline-none"
              wire:click="$set('showingFileUploadForm', true)"
            >
              Upload New File
            </button>

            <div
              x-show="show"
              id="22f830c7d3ad80f18a2b3a8b64aae117"
              class="fixed inset-0 z-50 px-4 py-6 overflow-y-auto modal sm:px-0"
            >
              <div
                x-show="show"
                class="fixed inset-0 transition-all transform"
                x-on:click="show = false"
                x-transition:enter="ease-out duration-300"
                x-transition:enter-start="opacity-0"
                x-transition:enter-end="opacity-100"
                x-transition:leave="ease-in duration-200"
                x-transition:leave-start="opacity-100"
                x-transition:leave-end="opacity-0"
                style="display: none"
              >
                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>

              <div
                x-show="show"
                class="mb-6 overflow-hidden transition-all transform bg-white rounded-lg shadow-xl  sm:w-full sm:max-w-2xl sm:mx-auto"
                x-transition:enter="ease-out duration-300"
                x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100"
                x-transition:leave="ease-in duration-200"
                x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100"
                x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                style="display: none"
              >
                <div
                  wire:ignore=""
                  class="m-3 border-2 border-dashed"
                  x-data="{
            initFilepond() {
                const pond = FilePond.create(this.$refs.filepond, {
                    allowImageCrop: true,
                    imageCropAspectRatio: '650:358',
                    allowImageResize: true,
                    imageResizeTargetWidth: 650,
                    imageResizeTargetHeight: 358,
                    imageResizeMode: 'contain',

                    onprocessfile: (error, file) => {
                        pond.removeFile(file.id)

                        if (pond.getFiles().length === 0) {
                            window.livewire.find('kgdrgJKXNcg9uuTsvLVK').set('showingFileUploadForm', false)
                        }
                    },
                    allowRevert: false,
                    server: {
                        process: (fieldName, file, metdata, load, error, progress, abort, transfer, options) => {
                            window.livewire.find('kgdrgJKXNcg9uuTsvLVK').upload('upload', file, load, error, progress)
                        }
                    }
                })
            }
        }"
                  x-init="initFilepond"
                >
                  <div>
                    <div
                      class="filepond--root true filepond--hopper"
                      data-style-button-remove-item-position="left"
                      data-style-button-process-item-position="right"
                      data-style-load-indicator-position="right"
                      data-style-progress-indicator-position="right"
                      data-style-button-remove-item-align="false"
                    >
                      <input
                        class="filepond--browser"
                        type="file"
                        id="filepond--browser-wj9h4jj7m"
                        name="filepond"
                        aria-controls="filepond--assistant-wj9h4jj7m"
                        aria-labelledby="filepond--drop-label-wj9h4jj7m"
                        multiple=""
                      />
                      <div style="height: 100%"></div>
                      <a
                        class="filepond--credits"
                        aria-hidden="true"
                        href="https://pqina.nl/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Powered by PQINA</a
                      >
                      <div
                        class="filepond--drop-label"
                        style="
                          transform: translate3d(0px, 0px, 0px);
                          opacity: 1;
                        "
                      >
                        <label
                          for="filepond--browser-wj9h4jj7m"
                          id="filepond--drop-label-wj9h4jj7m"
                          aria-hidden="true"
                          >Drag &amp; Drop your files or
                          <span class="filepond--label-action" tabindex="0"
                            >Browse</span
                          ></label
                        >
                      </div>
                      <div class="filepond--list-scroller">
                        <ul class="filepond--list" role="list"></ul>
                      </div>
                      <div
                        class="filepond--panel filepond--panel-root"
                        data-scalable="true"
                      >
                        <div
                          class="filepond--panel-top filepond--panel-root"
                        ></div>
                        <div
                          class="filepond--panel-center filepond--panel-root"
                        ></div>
                        <div
                          class="filepond--panel-bottom filepond--panel-root"
                        ></div>
                      </div>
                      <div class="filepond--drip"></div>
                      <span
                        class="filepond--assistant"
                        id="filepond--assistant-wj9h4jj7m"
                        role="status"
                        aria-live="polite"
                        aria-relevant="additions"
                      ></span>
                      <fieldset class="filepond--data"></fieldset>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Livewire Component wire-end:kgdrgJKXNcg9uuTsvLVK -->
        </div>
        <div wire:id="HlWzIY4s80dI46SsqpBN" class="grid grid-cols-12 md:gap-3">
          <div class="col-span-12 mt-5 md:mt-0">
            <div
              x-data="{tag:false,more_filter:false,selectedTab: window.Livewire.find('HlWzIY4s80dI46SsqpBN').entangle('tab')}"
            >
              <section
                class="border-2 border-dashed rounded-md shadow-sm"
                aria-labelledby="gallery-heading"
              >
                <div
                  class="flex justify-between w-full p-2 space-x-6 border-b border-gray-200 cursor-pointer  sm:px-6 lg:px-8 sm:py-3 lg:py-4"
                >
                  <nav class="flex flex-wrap items-center space-x-3">
                    <div>All</div>
                    <div>archived</div>
                  </nav>
                  <div class="flex flex-nowrap">
                    <button
                      type="button"
                      class="
                        p-1.5
                        rounded-md
                        text-gray-400
                        hover:bg-white hover:shadow-sm
                        focus:outline-none
                        focus:ring-2
                        focus:ring-inset
                        focus:ring-indigo-500
                      "
                    >
                      <svg
                        class="w-5 h-5"
                        x-description="Heroicon name: solid/view-list"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="sr-only">Use list view</span>
                    </button>
                    <button
                      type="button"
                      class="
                        ml-0.5
                        bg-white
                        p-1.5
                        rounded-md
                        shadow-sm
                        text-gray-400
                        focus:outline-none
                        focus:ring-2
                        focus:ring-inset
                        focus:ring-indigo-500
                      "
                    >
                      <svg
                        class="w-5 h-5"
                        x-description="Heroicon name: solid/view-grid"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        ></path>
                      </svg>
                      <span class="sr-only">Use grid view</span>
                    </button>
                  </div>
                </div>
                <div
                  class="flex flex-wrap items-center justify-between w-full p-2 bg-white border-b  sm:px-6 lg:px-8 sm:py-3 lg:py-4"
                >
                  <div class="flex-grow mr-1">
                    <div class="flex mt-1">
                      <div
                        class="relative flex items-stretch flex-grow  focus-within:z-10"
                      >
                        <input
                          class="flex-grow w-full h-10 px-2 border border-gray-300 rounded-md shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
                          type="search"
                          placeholder="Search..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-3">
                  <ul role="list" class="grid grid-cols-12 gap-3">
                    {{
                      images
                    }}
                    <li
                      class="relative col-span-6 border border-transparent  sm:col-span-3 xl:col-span-2"
                      v-for="image in images"
                      :key="image.id"
                    >
                      <a href="">
                        <div
                          class="block w-full overflow-hidden bg-gray-100  group aspect-w-10 aspect-h-7"
                        >
                          <!-- <img
                            :src="image.thumbnails.original"
                            alt="thumbnail"
                            class="object-cover pointer-events-none"
                          /> -->
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
              <div class="p-2">
                <div class="mt-2 pagination"><div></div></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <aside
        class="hidden h-screen px-8 overflow-y-auto bg-white w-96 lg:block"
        id="aside-scroll"
      >
        <div wire:id="OLOwUB8fwvGUXF8zc5CL">
          <div
            class="w-full h-full pb-16 space-y-6 border-2 border-dashed rounded-md "
          >
            <div
              class="flex justify-center w-full h-full px-2 mt-20 text-base font-semibold text-green-500 "
            >
              Click view option to see article detail
            </div>
          </div>

          <div
            class="fixed inset-0 z-50 px-4 py-6 overflow-y-auto modal sm:px-0"
          >
            <div
              x-show="show"
              class="fixed inset-0 transition-all transform"
              x-on:click="show = false"
              x-transition:enter="ease-out duration-300"
              x-transition:enter-start="opacity-0"
              x-transition:enter-end="opacity-100"
              x-transition:leave="ease-in duration-200"
              x-transition:leave-start="opacity-100"
              x-transition:leave-end="opacity-0"
              style="display: none"
            >
              <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div
              x-show="show"
              class="mb-6 overflow-hidden transition-all transform bg-white rounded-lg shadow-xl  sm:w-full sm:max-w-2xl sm:mx-auto"
              x-transition:enter="ease-out duration-300"
              x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100"
              x-transition:leave="ease-in duration-200"
              x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100"
              x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              style="display: none"
            >
              <div class="px-6 py-4">
                <div class="text-lg">Delete record</div>

                <div class="mt-4">Are you sure to delete</div>
              </div>

              <div class="px-6 py-4 text-right bg-gray-100">
                <button
                  type="button"
                  class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-gray-700 uppercase transition bg-white border border-gray-300 rounded-md shadow-sm  hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:text-gray-800 active:bg-gray-50 disabled:opacity-25"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  class="inline-flex items-center justify-center p-1 ml-2 text-xs tracking-widest text-white uppercase transition bg-red-600 border border-transparent rounded-md  hover:bg-red-500 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 active:bg-red-600 disabled:opacity-25"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [],
    }
  },
  async asyncData({ app, errors }) {
    try {
      let responseImages = await app.$axios.get('images')
      return {
        images: responseImages.data,
      }
    } catch (e) {
      console.log(e)
    }
  },
}
</script>


