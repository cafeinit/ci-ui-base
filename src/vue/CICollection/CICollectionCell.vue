<template lang="pug">
  li.ci-collection__cell
    ci-media(v-if="title" :image="image"
      :title="title" :text="text" :extend="extend")
    slot
</template>

<script>
/**
 * @fileoverview CICollectionCell
 * @author burning (www.cafeinit.com)
 * @version 2017.07.16
 */

import CIMedia from '../CIMedia.vue'

export default {
  name: 'ci-collection-cell',

  props: {
    image: {
      type: String,
      default: ''
    },

    title: {
      type: String,
      default: ''
    },

    text: {
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
