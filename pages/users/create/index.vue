<template>
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
          <div class="relative h-48 bg-red-500 rounded-bl-4xl">
            <svg
              class="absolute bottom-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#ffffff"
                fill-opacity="1"
                d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div class="px-4 pt-4 pb-8 bg-white sm:px-10 rounded-tr-4xl">
            <h1 class="text-2xl font-semibold text-center text-gray-900">
              New Register!
            </h1>
            <form class="mt-8" @submit.prevent="register">
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
                  v-model="form.name"
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
                  class="w-full text-white bg-red-600  hover:bg-red-700 focus:ring-red-500"
                  >Submit
                </AppButton>
              </div>
            </form>
          </div>
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
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
    }
  },

  methods: {
    async register() {
      try {
        await this.$axios.get('sanctum/csrf-cookie')
        await this.$axios.post('register', this.form)
        // await this.$auth.login('laravelSanctum', {
        //   data: { email: this.form.email, password: this.form.password },
        // })
        // this.$notify(
        //   {
        //     group: 'success',
        //     title: 'Welcome',
        //     text: "You've been registered sucessfully!",
        //   },
        //   2000
        // )
      } catch (e) {
        // this.$notify(
        //   {
        //     title: 'Registration Failed',
        //     text: 'Please enter correct credentials!',
        //   },
        //   2000
        // )
      }
    },
  },
}
</script>
