<template>
  <div id="app">
    <no-ssr>
      <file-pond
        name="test"
        ref="pond"
        label-idle="Drop files here..."
        v-bind:allow-multiple="true"
        accepted-file-types="image/jpeg, image/png"
        server="http://admin.test/admin/images"
        v-bind:files="myFiles"
        v-on:init="handleFilePondInit"
      />
    </no-ssr>
  </div>
</template>

<script>
import vueFilePond from 'vue-filepond'
import 'filepond/dist/filepond.min.css'

import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
)

export default {
  middleware: ['authIndent'],

  data: function () {
    return { myFiles: null }
  },

  methods: {
    handleFilePondInit: function () {
      console.log('FilePond has initialized')

      // FilePond instance methods are available on `this.$refs.pond`
    },
  },
  components: {
    FilePond,
  },
}
</script>























