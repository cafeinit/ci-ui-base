<template lang="pug">
  div.ci-collection__header
    ci-media(v-if="title"
      :title="title"
      :extend-text="extendText"
      :extend-icon="extendIcon"
      :extend-icon-class-name="extendIconClassName")
    slot
</template>

<script>
/**
 * @fileoverview CICollectionHeader
 * @author burning (www.cafeinit.com)
 * @version 2017.08.03
 */

export default {
  name: 'ci-collection-header',

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
