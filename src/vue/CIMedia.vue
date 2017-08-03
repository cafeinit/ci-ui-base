<template lang="pug">
  div.ci-media(:class="className")
    div.ci-media__image(v-if="image")
      img(:src="image" width="100%")
      slot(name="image")

    div.ci-media__content
      h4.ci-media__title(v-if="title") {{title}}
      p.ci-media__text(v-if="text") {{text}}
      slot

    div.ci-media__extend(v-if="extendText || extendIcon")
      span.ci-media__text(v-if="extendText") {{extendText}}
      i.ci-media__icon.material-icons(v-if="extendIcon") {{extendIcon}}
      i.ci-media__icon(v-if="extendIconClassName" :class="extendIconClassName")
      slot(name="extend")
</template>

<script>
/**
 * @fileoverview CIMedia
 * @author burning (www.cafeinit.com)
 * @version 2017.08.03
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
  },

  computed: {
    className() {
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
