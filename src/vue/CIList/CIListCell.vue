<template lang="pug">
  li.ci-list__cell(@click="$emit('click')")
    ci-media(v-if="title"
      :title="title" :text="text"
      :image="image" :image-mode="imageMode"
      :image-width="imageWidth" :image-height="imageHeight"
      :image-border="imageBorder" :image-radius="imageRadius"
      :image-is-lazy="imageIsLazy"
      :extend-text="extendText" :extend-icon="extendIcon"
      :extend-icon-class-name="extendIconClassName"
      @click-image="$emit('click-image')"
      @click-extend="$emit('click-extend')")
    slot
</template>

<script>
/**
 * @fileoverview CIListCell
 * @author burning (www.cafeinit.com)
 * @version 2017.08.09
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

    extendIconClassName: {
      type: String,
      default: ''
    }
  }
}
</script>
