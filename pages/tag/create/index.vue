<template>
  <div class="">
    <Breadcrumb
      leading="Tag"
      trialing="Tags"
      :href="{ name: 'tag' }"
      breadcrumb="Tag / Create"
    />
    {{ errors }}
    <form @submit.prevent="tagCreate">
      <div class="grid grid-cols-12 gap-6 px-2 mt-8 sm:px-4 lg:px-8">
        <div class="col-span-12 2md:col-span-8">
          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="flex flex-wrap">
              <div class="w-full px-2 py-4 md:w-6/12">
                <FormLabel>Name</FormLabel>
                <FormInput
                  placeholder="Name"
                  inpuType="text"
                  inputId="name"
                  inpuName="name"
                  v-model="form.name"
                />
                <FormInputError>The title field is required</FormInputError>
              </div>
              <div class="w-full px-2 py-4 md:w-6/12">
                <FormLabel>Name</FormLabel>
                <FormInput
                  placeholder="Slug"
                  inpuType="text"
                  inputId="slug"
                  inpuName="slug"
                  v-model="form.slug"
                />
                <FormInputError>The title field is required</FormInputError>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 px-2 sm:px-4 lg:px-8">
        <FormButton
          type="submit"
          class="
            w-full
            text-white
            bg-cyan-600
            hover:bg-cyan-700
            focus:ring-cyan-500
            hover:ring-1
          "
          >Submit</FormButton
        >
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
      },
    }
  },
  methods: {
    async tagCreate() {
      try {
        await this.$axios.post(`tags`, this.form).then(({ data }) => {})
      } catch (e) {}
      this.isLoading = false
    },
  },
}
</script>
