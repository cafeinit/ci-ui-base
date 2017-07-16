<template lang="pug">
  div.ci-media
    div.ci-media__image(v-if="image")
      img(:src="image.src" width="100%")
    div.ci-media__content
      h4.ci-media__title(v-if="title") {{title}}
      p.ci-media__text(v-if="text") {{text}}
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
      type: [ String, Number ],
      default: ''
    },

    text: {
      type: [ String, Number ],
      default: ''
    }
  }
}
</script>
