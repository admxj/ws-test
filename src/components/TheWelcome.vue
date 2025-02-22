<script>
import WelcomeItem from './WelcomeItem.vue'
import {defineComponent} from 'vue'

export default defineComponent({
  components: {
    WelcomeItem
  },
  setup() {
    return {
      openInEditor
    }
  }
})

function openInEditor() {
  debugger
  this.$router.push('/hello')
}

</script>

<template>
  <WelcomeItem>
    Vue’s
    <a href="javascript:void(0)" @click.prevent="openInEditor" rel="noopener">official documentation</a>
    provides you with all information you need to get started.
  </WelcomeItem>

</template>
