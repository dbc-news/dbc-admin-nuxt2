
<template>
  <div class="flex items-center justify-start mt-3">
    <div class="icon-wrapper">
      <LinkIcon class="w-4 h-4 text-blue-500" />
    </div>
    <div
      class="inline-flex ml-2 overflow-hidden text-center  h-7 whitespace-nowrap text-ellipsis"
    >
      <span class="root-url">{{ url }}</span>
      <span class="subdirectory-url">/{{ subdirectory }}/</span>
      <span
        class="p-1 overflow-hidden bg-gray-200 whitespace-nowrap text-ellipsis"
        v-show="slug && !isEditing"
        >{{ slug }}</span
      >
      <input
        v-show="isEditing"
        id="min-w-40 max-w-45"
        size="sm"
        name="slug"
        placeholder="Slug"
        class="flex-grow w-full px-2 border border-gray-300 rounded-md shadow-sm  focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 focus:outline-none"
        v-model="customSlug"
        @keyup="adjustWidth"
        @keydown.esc.prevent
        @keydown.enter.prevent
      />
    </div>

    <div class="ml-2">
      <button
        class="px-2 border border-blue-200 rounded-md"
        v-show="!isEditing"
        @click.prevent="editSlug"
      >
        Edit
      </button>
      <button
        class="px-2 border border-green-200 rounded-md"
        v-show="isEditing"
        @click.prevent="saveSlug"
      >
        Save
      </button>
      <button
        class="px-2 border border-indigo-200 rounded-md"
        v-show="wasEdited"
        @click.prevent="resetEditing"
      >
        Reset
      </button>
    </div>
  </div>
</template>

<script>
import { LinkIcon } from '@vue-hero-icons/outline'

export default {
  components: {
    LinkIcon,
  },
  props: {
    url: {
      type: String,
      required: false,
      default: process.env.APP_CLIENT_URL,
    },
    subdirectory: {
      type: String,
      required: false,
      default: 'news',
    },
    title: {
      type: String,
      required: true,
    },
    // icon: {
    //   type: String,
    //   default: 'fa fa-link',
    // },
  },
  data: function () {
    return {
      slug: this.setSlug(this.title),
      isEditing: false,
      customSlug: '',
      wasEdited: false,
    }
  },
  methods: {
    adjustWidth: function (event) {
      const val = event.target.value
      const key = event.key
      if (key === 'Escape') {
        event.preventDefault()
        this.cancelEditing()
      } else if (key === 'Enter') {
        event.preventDefault()
        this.saveSlug()
      } else {
        let canvas = document.createElement('canvas')
        let ctx = canvas.getContext('2d')
        ctx.font = '14px sans-serif'
        document.getElementById('slug-editor').style.width =
          Math.ceil(ctx.measureText(val).width + 25) + 'px'
      }
    },
    editSlug: function () {
      this.customSlug = this.slug
      this.$emit('edit', this.slug)
      this.isEditing = true
      window.setTimeout(function () {
        document.getElementById('slug-editor').focus()
      }, 0) // must set timeout to wait for the thread to become available
    },
    saveSlug: function () {
      if (this.customSlug !== this.slug) this.wasEdited = true
      this.setSlug(this.customSlug)
      this.$emit('save', this.slug)
      this.isEditing = false
    },
    resetEditing: function () {
      this.setSlug(this.title)
      this.$emit('reset', this.slug)
      this.wasEdited = false
      this.isEditing = false
    },
    cancelEditing: function () {
      this.$emit('cancel', this.customSlug, this.slug)
      this.isEditing = false
    },
    setSlug(newVal, count = 0) {
      if (newVal === '') return ''
      let slug = this.slugify(newVal + (count > 0 ? `-${count}` : ''))
      this.slug = slug
      this.$emit('slug-changed', slug)

      return this.slug
    },

    slugify(value, delimiter = '-') {
      return _.trim(value.replace(/[&\/\\#,+()$~%.।'":*?`@^;ঃ<>{}]/g, ''))
        .replace(/ +/g, ' ')
        .replace(/\s/g, delimiter)
    },
  },
  watch: {
    title: _.debounce(function () {
      if (this.wasEdited == false) this.setSlug(this.title)
    }, 500),
  },
}
</script>



