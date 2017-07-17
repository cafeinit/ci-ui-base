<template lang="pug">
  div.ci-media(:class="class_name")
    div.ci-media__image(v-if="image")
      img(:src="image" width="100%")
    div.ci-media__content
      h4.ci-media__title(v-if="title") {{title}}
      p.ci-media__text(v-if="text") {{text}}
    div.ci-media__extend(v-if="extend" v-html="extend")
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

    extend: {
      type: String,
      default: ''
    }
  },

  computed: {
    class_name() {
      let name = ''
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
