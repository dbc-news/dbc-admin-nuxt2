
<template>
  <div class="p-1 mx-auto sm:p-3 lg:p-8">
    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Update Password
            </h3>
            <p class="mt-1 text-sm text-gray-600">
              Ensure your account is using a long, random password to stay
              secure.
            </p>
          </div>
        </div>

        <div class="mt-5 md:mt-0 md:col-span-2">
          <form @submit.prevent="changePassword">
            <div class="overflow-hidden shadow sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <AppLabel>New Password</AppLabel>
                    <AppInput
                      placeholder="New Password"
                      type="password"
                      id="password"
                      name="password"
                      v-model="form.password"
                    />
                    <AppInputError v-if="errors.password">
                      {{ errors.password[0] }}
                    </AppInputError>
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <AppLabel>Confirm Password</AppLabel>
                    <AppInput
                      placeholder="Confirm Password"
                      type="password"
                      id="password_confirmation"
                      name="password_confirmation"
                      v-model="form.password_confirmation"
                    />
                  </div>
                </div>
              </div>

              <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                <AppButton
                  type="submit"
                  class="text-white  bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-500"
                >
                  Submit
                </AppButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="hidden sm:block" aria-hidden="true">
      <div class="py-5">
        <div class="border-t border-gray-200" />
      </div>
    </div>

    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Personal Information
            </h3>
            <p class="mt-1 text-sm text-gray-600">
              Use a permanent address where you can receive mail.
            </p>
          </div>
        </div>

        <div class="mt-5 md:mt-0 md:col-span-2">
          <form @submit.prevent="updatePersonalInfo">
            <div class="overflow-hidden shadow sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <AppLabel> Name</AppLabel>
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

                  <div class="col-span-6 sm:col-span-3">
                    <AppLabel>Display Name</AppLabel>
                    <AppInput
                      placeholder="Display Name"
                      type="text"
                      id="display_name"
                      name="display_name"
                      v-model="form.display_name"
                    />
                    <AppInputError v-if="errors.display_name">
                      {{ errors.display_name[0] }}
                    </AppInputError>
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <AppLabel>Email address</AppLabel>
                    <AppInput
                      placeholder="Email"
                      type="text"
                      id="email"
                      name="email"
                      v-model="form.email"
                    />
                    <AppInputError v-if="errors.email">
                      {{ errors.email[0] }}
                    </AppInputError>
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <AppLabel>Phone Number</AppLabel>
                    <AppInput
                      placeholder="Phone Number"
                      type="text"
                      id="phone_number"
                      name="phone_number"
                      v-model="form.phone_number"
                    />
                    <AppInputError v-if="errors.phone_number">
                      {{ errors.phone_number[0] }}
                    </AppInputError>
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <AppLabel>Region</AppLabel>
                    <multiselect
                      v-model="selectedRegion"
                      placeholder="Search region"
                      label="local_name"
                      track-by="uuid"
                      :options="regions"
                      :hideSelected="true"
                      :regionable="true"
                    ></multiselect>
                  </div>
                </div>
              </div>

              <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                <AppButton
                  type="submit"
                  class="text-white  bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-500"
                >
                  Submit
                </AppButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { UserCircleIcon, PhotographIcon } from '@vue-hero-icons/outline'
import Multiselect from 'vue-multiselect'

export default {
  middleware: ['authIndent'],
  data() {
    return {
      errors: [],
      selectedRegion: null,
      regions: [],

      user: null,
      thumbnail: null,
      temporaryThumb: null,
    }
  },

  watch: {
    selectedRegion() {
      if (this.selectedRegion) {
        this.form.region_id = this.selectedRegion.id
      }
    },
  },

  components: {
    UserCircleIcon,
    PhotographIcon,
    Multiselect,
  },

  async asyncData({ params, app }) {
    try {
      let userResponse = await app.$axios.$get(
        `admin/users/${encodeURI(params.id)}`
      )
      let regionResponse = await app.$axios.$get('admin/regions/all')

      let user = userResponse.data

      return {
        user: user,
        regions: regionResponse.data,
        selectedRegion: user.region,
        form: {
          name: user.name,
          display_name: user.display_name,
          email: user.email,
          phone_number: user.phone_number,
          bio: user.bio,
          password: null,
          password_confirmation: null,
          region_id: user.region_id,
        },
      }
    } catch (e) {
      console.log(e.response.data.errors)
      // error({ statusCode: 404, message: 'This page could not be found.' })
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

    async updatePersonalInfo() {
      console.log(this.form)
      try {
        await this.$axios
          .patch(`admin/users/personal-info/${this.user.id}`, {
            name: this.form.name,
            display_name: this.form.display_name,
            email: this.form.email,
            phone_number: this.form.phone_number,
            region_id: this.form.region_id,
          })
          .then(({ data }) => {
            this.statusMessage('success', 'User updated')
            this.errors = []
          })
      } catch (e) {
        ;(this.errors = e.response.data.errors),
          this.statusMessage('error', 'Something went wrong')
      }
    },

    selectingThumbnail(e) {
      this.thumbnail = e.target.files[0]
      const file = e.target.files[0]

      this.temporaryThumb = URL.createObjectURL(file)
    },

    async changePassword() {
      console.log(this.form)
      try {
        await this.$axios
          .patch(`admin/users/change-password/${this.user.id}`, {
            password: this.form.password,
            password_confirmation: this.form.password_confirmation,
          })
          .then((data) => {
            this.statusMessage('success', 'Password updated')
            this.errors = []
            this.form.password = null
            this.form.password_confirmation = null
          })
      } catch (e) {
        this.errors = e.response.data.errors
        this.statusMessage('error', 'Something went wrong')
      }
    },
  },
}
</script>

<style >
@import 'vue-multiselect/dist/vue-multiselect.min.css';

.body-editor {
  min-height: 200px;
  max-height: 400px;
  overflow-y: auto;
}
.multiselect__input {
  border-radius: 5px !important;
  min-height: 40px;
}
</style>
