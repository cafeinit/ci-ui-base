<template lang="pug">
  div.ci-media
    div.ci-media__image(v-if="image")
      img(:src="image.src" width="100%")
    div.ci-media__content
      h4.ci-media__title(v-if="title") {{title}}
      p.ci-media__text(v-if="text") {{text}}
    div.ci-media__extend(v-if="extend") {{extend}}
</template>

<script>
export default {
  name: 'ci-media',

  props: {
    image: {
      type: Object,
      default() {
        return null
      }
    },

    title: {
      type: String,
      default: ''
    },

    text: {
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
