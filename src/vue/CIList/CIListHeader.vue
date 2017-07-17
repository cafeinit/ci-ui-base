<template lang="pug">
  div.ci-list__header
    ci-media(v-if="title" :title="title" :extend="extend")
    slot
</template>

<script>
/**
 * @fileoverview CIListHeader
 * @author burning (www.cafeinit.com)
 * @version 2017.07.16
 */

import CIMedia from '../CIMedia.vue'

export default {
  name: 'ci-list-header',

  components: {
    'ci-media': CIMedia
  },

  props: {
    title: {
      type: String,
      default: ''
    },

    extend: {
      type: String,
      default: ''
    }
  }
}
</script>
