<template>
  <div
    class="flex items-center justify-center min-h-screen  bg-gradient-to-t from-red-400 to-red-200"
  >
    <div class="flex-1 px-2 py-4 sm:p-8">
      <div
        class="
          w-full
          mx-auto
          overflow-hidden
          shadow-xl
          sm:w-[28rem]
          rounded-3xl
        "
      >
        <div
          class="relative z-50 overflow-hidden bg-opacity-0  h-60 bg-gradient-to-br from-red-400 to-red-700"
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
          class="relative z-50 px-4 pb-8 bg-opacity-0  bg-gradient-to-br from-gray-300 to-transparent sm:px-10 blur-test"
        >
          <h1 class="pt-8 text-2xl font-semibold text-center text-gray-500">
            New Register!
          </h1>

          <form @submit.prevent="register">
            <div class="w-full p-2">
              <input
                v-model="form.name"
                name="name"
                type="text"
                placeholder="Name"
                class="flex-grow w-full px-0 bg-transparent border-0 border-b border-gray-400  focus:border-red-300 focus:ring-0 focus:ring-b focus:ring-red-200 focus:ring-opacity-50 focus:outline-none"
              />
              <AppInputError v-if="errors.name">
                {{ errors.name[0] }}
              </AppInputError>
            </div>

            <div class="w-full p-2">
              <input
                v-model="form.email"
                name="email"
                type="email"
                placeholder="Email"
                class="flex-grow w-full px-0 bg-transparent border-0 border-b border-gray-400  focus:border-red-300 focus:ring-0 focus:ring-b focus:ring-red-200 focus:ring-opacity-50 focus:outline-none"
              />
              <AppInputError v-if="errors.email">
                {{ errors.email[0] }}
              </AppInputError>
            </div>

            <div class="w-full p-2">
              <input
                v-model="form.password"
                name="password"
                type="password"
                placeholder="Password"
                class="flex-grow w-full px-0 bg-transparent border-0 border-b border-gray-400  focus:border-red-300 focus:ring-0 focus:ring-b focus:ring-red-200 focus:ring-opacity-50 focus:outline-none"
              />
              <AppInputError v-if="errors.password">
                {{ errors.password[0] }}
              </AppInputError>
            </div>

            <div class="w-full p-2">
              <input
                v-model="form.password_confirmation"
                name="password_confirmation"
                type="password"
                placeholder="Confirm Password"
                class="flex-grow w-full px-0 bg-transparent border-0 border-b border-gray-400  focus:border-red-300 focus:ring-0 focus:ring-b focus:ring-red-200 focus:ring-opacity-50 focus:outline-none"
              />
            </div>

            <div class="w-full p-2 mt-2">
              <AppButton
                type="submit"
                class="w-full text-white  vertical-gradient hover:bg-red-700 focus:ring-red-500"
                >Submit
              </AppButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'guest',
  middleware: 'authIndent',

  data() {
    return {
      errors: [],
      form: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
      },
    }
  },

  methods: {
    statusMessage(type, message) {
      const Toast = this.$swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
      })
      Toast.fire({
        icon: type,
        title: message,
      })
    },

    async register() {
      console.log(this.form)
      try {
        await this.$axios.post('auth/register', this.form).then((data) => {
          this.statusMessage('success', 'User Created Successfully!')
          this.errors = []
          this.form = []
        })
      } catch (e) {
        this.errors = e.response.data.errors
        this.statusMessage('error', 'Something wrong!')
      }
    },
  },
}
</script>
