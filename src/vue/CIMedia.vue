<template lang="pug">
div.ci-media(:class="className" @click="$emit('click')")
  div.ci-media__image(v-if="image" @click="$emit('click-image')")
    ci-figure(:image="image" :mode="imageMode"
      :width="imageWidth" :height="imageHeight"
      :border="imageBorder" :radius="imageRadius"
      :is-lazy="imageIsLazy")
    slot(name="image")

  div.ci-media__content
    h4.ci-media__title(v-if="title" @click="$emit('click-title')" v-html="title")
    p.ci-media__text(v-if="text" v-html="text")
    slot

  div.ci-media__extend(v-if="extendText || extendIcon || $slots.extend"
    @click="$emit('click-extend')")
    span.ci-media__text(v-if="extendText") {{extendText}}
    i.ci-media__icon.material-icons(v-if="extendIcon") {{extendIcon}}
    i.ci-media__icon(v-if="extendIconClassName" :class="extendIconClassName")
    slot(name="extend")
</template>

<script>
/**
 * @fileoverview CIMedia
 * @author burning (www.cafeinit.com)
 * @version 2018.11.12
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

    imageMode: {
      type: String,
      default: 'aspect-fill'    // aspect-fill, aspect-fit, auto-height, auto-width
    },

    imageWidth: {
      type: [ Number, String ],
      default: '100%'
    },

    imageHeight: {
      type: [ Number, String ],
      default: '100%'
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
