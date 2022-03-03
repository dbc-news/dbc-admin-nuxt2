<template>
  <div class="container-fluid">
    <div class="font-sans antialiased text-gray-900">
      <div
        class="flex flex-col items-center min-h-screen pt-6 bg-gray-100  sm:justify-center sm:pt-0"
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
        {{ form }}
        <div
          class="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md  sm:max-w-md sm:rounded-lg"
        >
          <form @submit.prevent="signin">
            <div>
              <label
                class="block mb-1 text-sm font-semibold text-gray-700"
                for="email"
              >
                Email
              </label>
              <FormInput
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                v-model="form.email"
              />
              <FormInputError v-if="errors.email">
                {{ errors.email[0] }}
              </FormInputError>
            </div>

            <div class="mt-4">
              <label
                class="block mb-1 text-sm font-semibold text-gray-700"
                for="password"
              >
                Password
              </label>
              <FormInput
                placeholder="Password"
                type="password"
                id="password"
                name="password"
                v-model="form.password"
              />
              <FormInputError v-if="errors.password">
                {{ errors.password[0] }}
              </FormInputError>
            </div>

            <div class="block mt-4">
              <label for="remember_me" class="flex items-center">
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
              </label>
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
                class="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition bg-gray-800 border border-transparent rounded-md  hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25"
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
</template>
<script>
export default {
  data() {
    return {
      isloading: false,
      errors: '',
      form: {
        email: '',
        password: '',
      },
    }
  },
  middleware: ['redirectIfAuthenticated'],
  methods: {
    async signin() {
      try {
        this.isloading = true
        await this.$auth.loginWith('laravelSanctum', {
          data: this.form,
        })

        // if (this.$route.query.redirect) {
        //   this.$router.replace(this.$route.query.redirect)
        //   return
        // }
        this.$router.replace({
          name: 'index',
        })
      } catch (e) {
        this.isloading = false
        this.errors = e.response.data.errors
      }
    },
  },
}
</script>
