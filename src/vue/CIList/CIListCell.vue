<template lang="pug">
  li.ci-list__cell
    ci-media(v-if="title" :image="image"
      :title="title" :text="text" :extend="extend")
    slot
</template>

<script>
/**
 * @fileoverview CIListCell
 * @author burning (www.cafeinit.com)
 * @version 2017.07.16
 */

import CIMedia from '../CIMedia.vue'

export default {
  name: 'ci-list-cell',

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
