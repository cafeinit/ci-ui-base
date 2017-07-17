<template lang="pug">
  div.ci-collection__header
    ci-media(v-if="title" :title="title" :extend="extend")
    slot
</template>

<script>
/**
 * @fileoverview CICollectionHeader
 * @author burning (www.cafeinit.com)
 * @version 2017.07.16
 */

import CIMedia from '../CIMedia.vue'

export default {
  name: 'ci-collection-header',

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
