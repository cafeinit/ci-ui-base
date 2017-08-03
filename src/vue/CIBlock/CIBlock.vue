<template lang="pug">
  div.ci-block(:class="className")
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
    modifier: {
      type: String,
      default: ''   // border, radius, raised
    }
  },

  computed: {
    className() {
      let name = []
      if (this.modifier) {
        name = this.modifier.split(' ')
        name = name.map((item) => {
          return ('ci-block_' + item)
        })
      }
      return name
    }
  }
}
</script>
