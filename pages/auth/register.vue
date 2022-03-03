<template>
  <div class="container-fluid">
    <div class="font-sans antialiased text-gray-900">
      <div
        class="flex flex-col items-center min-h-screen pt-6 bg-gray-100  sm:justify-center sm:pt-0"
      >
        <div>
          <a href="/">
            <img
              class="w-auto h-12"
              src="@/assets/images/dbc-red-logo.png"
              alt="Easywire logo"
            />
          </a>
        </div>

        <div
          class="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md  sm:max-w-md sm:rounded-lg"
        >
          <form method="POST" action="http://metro.test/register">
            <input
              type="hidden"
              name="_token"
              value="So7OY7y6hF4s1tAvaYZiVK5YIkcDnUDSp24z1uP1"
            />
            <div>
              <label
                class="block mb-1 text-sm font-semibold text-gray-700"
                for="name"
              >
                Name
              </label>
              <input
                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="name"
                type="text"
                name="name"
                required="required"
                autofocus="autofocus"
                autocomplete="name"
                placeholder=""
              />
            </div>

            <div class="mt-4">
              <label
                class="block mb-1 text-sm font-semibold text-gray-700"
                for="email"
              >
                Email
              </label>
              <input
                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="email"
                type="email"
                name="email"
                required="required"
                placeholder=""
              />
            </div>

            <div class="mt-4">
              <label
                class="block mb-1 text-sm font-semibold text-gray-700"
                for="password"
              >
                Password
              </label>
              <input
                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="password"
                type="password"
                name="password"
                required="required"
                autocomplete="new-password"
                placeholder=""
              />
            </div>

            <div class="mt-4">
              <label
                class="block mb-1 text-sm font-semibold text-gray-700"
                for="password_confirmation"
              >
                Confirm Password
              </label>
              <input
                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="password_confirmation"
                type="password"
                name="password_confirmation"
                required="required"
                autocomplete="new-password"
                placeholder=""
              />
            </div>

            <div class="flex items-center justify-end mt-4">
              <nuxt-link
                :to="{ name: 'auth-signin' }"
                class="text-sm text-gray-600 underline hover:text-gray-900"
              >
                Already registered?
              </nuxt-link>

              <button
                type="submit"
                class="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition bg-gray-800 border border-transparent rounded-md  hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
