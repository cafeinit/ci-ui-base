<template lang="pug">
  div.ci-grid-cell(:class="sizeClass")
    slot
</template>

<script>
/**
 * @fileoverview CIGridCell
 * @author burning (www.cafeinit.com)
 * @version 2017.09.02
 */

export default {
  name: 'ci-grid-cell',

  props: {
    size: {
      type: String,
      default: '',
      required: true
    }
  },

  computed: {
    sizeClass() {
      let input = this.size.split(' ')
      let output = []

      for (let i = 0; i < input.length; i++) {
        output.push('ci-grid-cell_' + input[i])
      }

      return output.join(' ')
    }
  }
}
</script>
