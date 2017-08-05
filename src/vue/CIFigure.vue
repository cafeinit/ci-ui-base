<template lang="pug">
figure.ci-figure(:style="viewStyle" @click="$emit('click')")
  img(:src="image" width="100%")
  strong(v-if="title") {{title}}
  div {{viewStyle}}
</template>

<script>
/**
 * @fileoverview CIFigure
 * @author burning (www.cafeinit.com)
 * @version 2017.08.05
 */

export default {
  name: 'ci-figure',

  props: {
    image: {
      type: String,
      default: ''
    },

    title: {
      type: String,
      default: ''
    },

    width: {
      type: [ Number, String ],
      default: '100%'
    },

    height: {
      type: [ Number, String ],
      default: '100%'
    },

    border: {
      type: [ Number, String ],
      default: 0
    },

    radius: {
      type: [ Number, String ],
      default: 0
    },

    unit: {
      type: Number,
      default: 0.02
    },

    mode: {
      type: String,
      default: 'aspect-fill'    // aspect-fill, aspect-fit, auto-height, auto-width
    },

    isLazy: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    myWidth() {
      if (typeof this.width == 'number' || this.width.indexOf('%') < 0) {
        return this.width * this.unit + 'rem'
      }
      else {
        return this.width
      }
    },

    myHeight() {
      if (typeof this.height == 'number' || this.height.indexOf('%') < 0) {
        return this.height * this.unit + 'rem'
      }
      else {
        return this.height
      }
    },

    viewStyle() {
      return {
        'background-image': `url("${this.image}")`,
        'width': this.myWidth,
        'padding-top': this.myHeight,
        'border-width': this.border * this.unit + 'rem',
        'border-radius': this.radius * this.unit + 'rem'
      }
    }
  }
}
</script>
