<template lang="pug">
  li.ci-list__cell(@click="$emit('click')")
    ci-media(v-if="title" :image="image" :title="title" :text="text"
      :extendText="extendText" :extendIcon="extendIcon")
    slot
</template>

<script>
/**
 * @fileoverview CIListCell
 * @author burning (www.cafeinit.com)
 * @version 2017.07.16
 */

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

    extendText: {
      type: String,
      default: ''
    },

    extendIcon: {
      type: String,
      default: ''
    },

    accessory: {
      type: String,
      default: ''
    }
  },

  computed: {
    extend_content() {
      let icon = ''
      if (this.accessory) {
        icon = `<i class="ci-icon material-icons">chevron_right</i>`
      }
      // return `<span>${this.extend}</span>` + icon
      return this.extend + icon
    }
  }
}
</script>
