<template lang="pug">
  div.ci-media(:class="class_name")
    div.ci-media__image(v-if="image")
      img(:src="image" width="100%")

    div.ci-media__content
      h4.ci-media__title(v-if="title") {{title}}
      p.ci-media__text(v-if="text") {{text}}

    div.ci-media__extend(v-if="extend_text || extend_icon")
      span.ci-media__text(v-if="extend_text") {{extend_text}}
      i.ci-media__icon.material-icons(v-if="extend_icon") {{extend_icon}}
</template>

<script>
/**
 * @fileoverview CIMedia
 * @author burning (www.cafeinit.com)
 * @version 2017.07.16
 */

export default {
  name: 'ci-media',

  props: {
    modifier: {
      type: String,
      default: ''
    },

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

    extend_text: {
      type: String,
      default: ''
    },

    extend_icon: {
      type: String,
      default: ''
    }
  },

  computed: {
    class_name() {
      let name = []
      if (this.modifier) {
        name = this.modifier.split(' ')
        name = name.map((item) => {
          return ('ci-media_' + item)
        })
      }
      return name
    }
  }
}
</script>
