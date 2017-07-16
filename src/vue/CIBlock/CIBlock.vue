<template lang="pug">
  div.ci-block(:class="class_name")
    slot
</template>

<script>
/**
 * @fileoverview CIBlock
 * @author burning (www.cafeinit.com)
 * @version 2017.07.16
 */

export default {
  name: 'ci-block',

  props: {
    border: {
      type: String,
      default: ''
    },

    radius: {
      type: String,
      default: ''
    },

    raised: {
      type: String,
      default: ''
    }
  },

  computed: {
    class_name() {
      return {
        'ci-block_border': this.border,
        'ci-block_radius': this.radius,
        'ci-block_raised': this.raised
      }
    }
  }
}
</script>
