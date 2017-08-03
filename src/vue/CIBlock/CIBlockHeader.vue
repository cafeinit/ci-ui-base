<template lang="pug">
  div.ci-block__header
    ci-media(v-if="title"
      :title="title"
      :extend-text="extendText"
      :extend-icon="extendIcon"
      :extend-icon-class-name="extendIconClassName")
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

    extendText: {
      type: String,
      default: ''
    },

    extendIcon: {
      type: String,
      default: ''
    },

    extendIconClassName: {
      type: String,
      default: ''
    }
  }
}
</script>
