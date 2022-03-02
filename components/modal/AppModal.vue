<template>
  <transition name="modal">
    <div class="app-modal" v-if="visible">
      <div
        v-if="closer"
        @click.prevent="visible = false"
        class="app-modal-closer-dash"
      ></div>
      <div class="app-modal-inner">
        <a href="#" @click.prevent="visible = false" class="times-button"
          ><i class="fa fa-times-circle-o"></i
        ></a>
        <div class="app-modal-body">
          <slot :params="params" />
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      visible: true,
      params: {},
    }
  },
  props: {
    name: {
      required: false,
      type: String,
      default: 'modal',
    },
    closer: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  beforeMount() {
    this.$modal.$event.$on('show', (modal, params) => {
      if (this.name !== modal) {
        return
      }
      this.params = params
      if (!this.$listeners['before-open']) {
        this.setVisible()
        return
      }
      this.$emit('before-open', () => {
        this.setVisible()
      })
      if (this.$listeners['get-params']) {
        this.$emit('get-params', this.params)
      }
    })
    this.$modal.$event.$on('hide', (modal) => {
      if (this.name === modal) {
        this.setHidden()
      }
    })
  },
  methods: {
    async setVisible() {
      this.visible = true
    },
    async setHidden() {
      this.visible = false
    },
  },
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (this.visible && e.keyCode === 27) {
        this.visible = false
      }
    })
  },
}
</script>


<style>
.app-modal {
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
  transition: opacity 0.3s ease;
}
.app-modal-closer-dash {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
  transition: opacity 0.3s ease;
}
.app-modal-inner {
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: 90%;
  max-width: 1080px;
  z-index: 9999;
  transition: all 0.3s ease;
  border: 1px solid rgb(222, 31, 38);
  /* border-radius: 6px; */
  outline: 0;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  border-top: 5px solid rgb(222, 31, 38);
}
.app-modal-body {
  width: 100%;
  max-height: calc(100vh - 100px);
  overflow-x: hidden;
  overflow-y: auto;
}
.app-modal-body::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
  border-radius: 10px;
}

.app-modal-body::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}

.app-modal-body::-webkit-scrollbar-thumb {
  background-color: #de1f26;
  border-radius: 10px;
  background-image: -webkit-linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.5) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0.5) 75%,
    transparent 75%,
    transparent
  );
}
.times-button {
  position: absolute;
  top: -3px;
  right: 0px;
  z-index: 9999;
  font-size: 18px;
  color: #585858;
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
