<template lang="pug">
  div.view-collection
    h2.app-title Collection

    ci-collection
      ci-collection-header(title="Collection Title" extend-text="more")
      ci-collection-body
        ci-collection-cell(v-for="i in list" :key="i")
          ci-media.article(
            modifier="image-top"
            title="Bryan Cranston played the role of Walter in Breaking Bad"
            text="He is also known for playing."
            image="http://via.placeholder.com/240x160"
            image-height="66.666667%")
</template>

<script>
export default {
  name: 'view-collection',

  data() {
    return {
      list: [0, 1, 2, 3, 4, 5],
    }
  },

  computed: {
    image_width() {
      let container_width = document.body.clientWidth
      let gap = 8
      let width = container_width - gap * 2
      if (container_width < 640) {
        width = (container_width - gap * 3) / 2
      }
      else if (container_width < 960) {
        width = (container_width - gap * 4) / 3
      }
      else {
        width = (container_width - gap * 5) / 4
      }
      return width
    }
  }
}
</script>

<style lang="less">
.article {
  background-color: #fff;

  .ci-media__content {
    padding: 8 * 0.02rem
  }
}
</style>
