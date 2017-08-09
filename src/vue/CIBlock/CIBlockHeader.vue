<template lang="pug">
  div.ci-block__header(@click="$emit('click')")
    ci-media(v-if="title"
      :title="title"
      :image="image" :image-mode="imageMode"
      :image-width="imageWidth" :image-height="imageHeight"
      :image-border="imageBorder" :image-radius="imageRadius"
      :extend-text="extendText" :extend-icon="extendIcon"
      :extend-icon-class-name="extendIconClassName")
    slot
</template>

<script>
/**
 * @fileoverview CIBlockHeader
 * @author burning (www.cafeinit.com)
 * @version 2017.08.08
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
