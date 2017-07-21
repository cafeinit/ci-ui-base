<template lang="pug">
  div.ci-block__header
    ci-media(v-if="title" :title="title" :extend="extend")
    slot
</template>

<script>
/**
 * @fileoverview CIBlockHeader
 * @author burning (www.cafeinit.com)
 * @version 2017.07.16
 */

export default {
  name: 'ci-block-header',

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
