<template lang="pug">
  div.ci-block__header
    ci-media(:title="title" :extend="extend")
</template>

<script>
/**
 * @fileoverview CIBlockHeader
 * @author burning (www.cafeinit.com)
 * @version 2017.07.16
 */

import CIMedia from '../CIMedia.vue'

export default {
  name: 'ci-block-header',

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
