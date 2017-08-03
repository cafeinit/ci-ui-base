<template lang="pug">
  li.ci-list__cell(@click="$emit('click')")
    ci-media(v-if="title" :title="title" :text="text"
      :image="image" :image-mode="imageMode"
      :image-width="imageWidth" :image-height="imageHeight"
      :image-border="imageBorder" :image-radius="imageRadius"
      :image-is-lazy="imageIsLazy"
      :extend-text="extendText" :extend-icon="extendIcon")
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

    imageMode: {
      type: String,
      default: 'aspect-fill'    // aspect-fill, aspect-fit, auto-height, auto-width
    },

    imageWidth: {
      type: [ Number, String ],
      default: 96
    },

    imageHeight: {
      type: [ Number, String ],
      default: 96
    },

    imageBorder: {
      type: [ Number, String ],
      default: 0
    },

    imageRadius: {
      type: [ Number, String ],
      default: 0
    },

    imageIsLazy: {
      type: Boolean,
      default: false
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
