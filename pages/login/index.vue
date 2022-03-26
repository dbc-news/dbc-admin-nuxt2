<template>
  <div>
    <!-- <div class="container-fluid">
      <div class="font-sans antialiased text-gray-900">
        <div
          class="flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0"
        >
          <div>
            <a href="#">
              <img
                class="w-auto h-12"
                src="@/assets/images/dbc-red-logo.png"
                alt="Easywire logo"
              />
            </a>
          </div>
          <div
            class="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg"
          >
            <form @submit.prevent="login">
              <div>
                <AppLabel> Email </AppLabel>
                <AppInput
                  v-model="form.email"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                <AppInputError v-if="errors.email">
                  {{ errors.email[0] }}
                </AppInputError>
              </div>

              <div class="mt-4">
                <AppLabel> Password </AppLabel>
                <AppInput
                  v-model="form.password"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <AppInputError v-if="errors.password">
                  {{ errors.password[0] }}
                </AppInputError>
              </div>

              <div class="block mt-4">
                <AppLabel for="remember_me" class="flex items-center">
                  <label class="inline-flex items-center px-2">
                    <input
                      type="checkbox"
                      class="rounded-md form-checkbox"
                      id="remember_me"
                      name="remember"
                    />
                    <span class="ml-2"> </span>
                  </label>
                  <span class="ml-2 text-sm text-gray-600">Remember me</span>
                </AppLabel>
              </div>

              <div class="flex items-center justify-end mt-4">
                <a
                  class="text-sm text-gray-600 underline hover:text-gray-900"
                  href="http://metro.test/forgot-password"
                >
                  Forgot your password?
                </a>

                <button
                  type="submit"
                  class="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25"
                >
                  Log in
                </button>
              </div>

              <div class="flex items-center justify-end mt-4">
                <nuxt-link
                  :to="{ name: 'auth-register' }"
                  exact
                  class="text-sm text-gray-600 underline hover:text-gray-900"
                >
                  Don't have an account ? register
                </nuxt-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="selection:bg-red-500 selection:text-white">
      <div class="flex items-center justify-center min-h-screen bg-red-100">
        <div class="flex-1 px-2 py-4 sm:p-8">
          <div
            class="
              w-full
              mx-auto
              overflow-hidden
              bg-white
              shadow-xl
              sm:w-[30rem]
              rounded-3xl
            "
          >
            <div class="relative h-48 bg-red-500">
              <svg
                class="absolute bottom-0 text-white fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill-opacity="1"
                  d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>

            <div class="px-4 pb-8 bg-white sm:px-10 rounded-tr-4xl">
              <div class="flex justify-center">
                <nuxt-link to="/">
                  <img
                    src="@/assets/images/dbc-red-logo.png"
                    class="h-auto w-28"
                    alt="logo"
                  />
                </nuxt-link>
              </div>

              <h1 class="text-2xl font-semibold text-center text-gray-600">
                New Register!
              </h1>

              <form class="mt-1" @submit.prevent="register">
                <div class="w-full p-2">
                  <AppLabel>Name</AppLabel>
                  <AppInput
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name"
                    v-model="form.name"
                  />
                  <AppInputError v-if="errors.name">
                    {{ errors.name[0] }}
                  </AppInputError>
                </div>

                <div class="w-full p-2">
                  <AppLabel>Email</AppLabel>
                  <AppInput
                    placeholder="Email"
                    type="email"
                    id="email"
                    name="email"
                    v-model="form.email"
                  />
                  <AppInputError v-if="errors.email">
                    {{ errors.email[0] }}
                  </AppInputError>
                </div>

                <div class="w-full p-2">
                  <AppLabel>Password</AppLabel>
                  <AppInput
                    placeholder="Password"
                    type="password"
                    id="password"
                    name="password"
                    v-model="form.password"
                  />
                  <AppInputError v-if="errors.password">
                    {{ errors.password[0] }}
                  </AppInputError>
                </div>

                <div class="w-full p-2">
                  <AppLabel>Password Confirmarion</AppLabel>
                  <AppInput
                    placeholder="Password Confirmarion"
                    type="password"
                    id="password_confirmation"
                    name="password_confirmation"
                    v-model="form.password_confirmation"
                  />
                </div>

                <div class="w-full p-2 mt-2">
                  <AppButton
                    type="submit"
                    class="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-red-500"
                    >Submit
                  </AppButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div
      class="
        flex
        items-center
        justify-center
        min-h-screen
        bg-gradient-to-t
        from-red-400
        to-red-200
      "
    >
      <div class="flex-1 px-2 py-4 sm:p-8">
        <div
          class="
            relative
            w-full
            mx-auto
            shadow-xl
            sm:w-[24rem]
            overflow-hidden
            rounded-3xl
          "
        >
          <div class="">
            <div
              class="
                relative
                z-50
                h-48
                overflow-hidden
                bg-opacity-0 bg-gradient-to-br
                from-red-400
                to-red-700
              "
            >
              <div class="absolute inset-0 flex justify-center top-10">
                <nuxt-link to="/">
                  <img
                    src="@/assets/images/dbc-white-logo.svg"
                    class="h-auto w-28"
                    alt="logo"
                  />
                </nuxt-link>
              </div>

              <svg
                class="absolute bottom-0 text-gray-300 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill-opacity="1"
                  d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>

            <div
              class="
                relative
                z-50
                px-4
                pb-8
                bg-opacity-0 bg-gradient-to-br
                from-gray-300
                to-transparent
                sm:px-10
                blur-test
              "
            >
              <form @submit.prevent="login" class="pt-5">
                <div>
                  <input
                    v-model="form.email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    class="
                      flex-grow
                      w-full
                      px-0
                      bg-transparent
                      border-0 border-b border-gray-400
                      focus:border-red-300
                      focus:ring-0
                      focus:ring-b
                      focus:ring-red-200
                      focus:ring-opacity-50
                      focus:outline-none
                    "
                  />
                  <AppInputError v-if="errors.email">
                    {{ errors.email[0] }}
                  </AppInputError>
                </div>

                <div class="mt-4">
                  <input
                    v-model="form.password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    class="
                      flex-grow
                      w-full
                      px-0
                      bg-transparent
                      border-0 border-b border-gray-400
                      focus:border-red-300
                      focus:ring-0
                      focus:ring-b
                      focus:ring-red-200
                      focus:ring-opacity-50
                      focus:outline-none
                    "
                  />
                  <AppInputError v-if="errors.password">
                    {{ errors.password[0] }}
                  </AppInputError>
                </div>

                <div class="block mt-4">
                  <AppLabel for="remember_me" class="flex items-center">
                    <label class="inline-flex items-center">
                      <input
                        type="checkbox"
                        class="bg-transparent rounded-md form-checkbox"
                        id="remember_me"
                        name="remember"
                      />
                    </label>
                    <span class="ml-2 text-sm text-gray-600">Remember me</span>
                  </AppLabel>
                </div>

                <div class="flex items-center justify-end mt-8">
                  <button
                    type="submit"
                    class="
                      inline-flex
                      items-center
                      px-4
                      py-2
                      ml-4
                      text-xs
                      font-semibold
                      tracking-widest
                      text-gray-400
                      uppercase
                      transition
                      border border-transparent border-gray-400
                      rounded-md
                      hover:bg-gray-400 hover:text-gray-300
                      active:bg-red-900
                      focus:outline-none
                      focus:border-red-900
                      focus:ring
                      focus:ring-red-300
                      disabled:opacity-25
                    "
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  layout: 'guest',
  middleware: 'guest',
  data() {
    return {
      errors: [],
      form: {
        email: null,
        password: null,
      },
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('laravelSanctum', {
          data: this.form,
        })
        this.$router.push({
          path: this.$route.query.redirect || '/',
        })
      } catch (e) {
        this.errors = e.response.data.errors
      }
    },
  },
}
</script>


