<template lang="pug">
  div.view-grid
    h2.app-title Grid

    ci-grid
      ci-grid-cell(size="sm-12 md-8 bg-9")
        ci-block
          ci-block-header(title="Block Title" extend-text="more")
          ci-block-body
            ci-media(
              modifier="image-top"
              title="Bryan Cranston"
              text="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing."
              image="http://via.placeholder.com/960x400"
              image-height="50%")

        ci-block(modifier="radius")
          ci-block-body
            ci-media(
              modifier="image-top"
              title="Bryan Cranston played the role"
              text="Bryan Cranston played the role of Walter in Breaking Bad. \
                He is also known for playing.\
                Bryan Cranston played the role of..."
              image="http://via.placeholder.com/960x400"
              image-height="50%"
              extend-text="2017.08.05")

      ci-grid-cell(size="sm-12 md-4 bg-3")
        ci-list
          ci-list-body
            ci-list-cell(title="Block" extend-icon="chevron_right"
              @click="toUrl('block')")
            ci-list-cell(title="Collection" extend-icon="chevron_right"
              @click="toUrl('collection')")
            ci-list-cell(title="Grid" extend-icon="chevron_right"
              @click="toUrl('grid')")
            ci-list-cell(title="List" extend-icon="chevron_right"
              @click="toUrl('list')")

        ci-block(modifier="radius raised")
          ci-block-header(title="Block Title" extend-text="more")
          ci-block-body
            ci-media(
              modifier="image-top"
              title="Bryan Cranston"
              text="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing."
              image="http://via.placeholder.com/128x192")
</template>

<script>
export default {
  name: 'view-grid',

  methods: {
    toUrl(url) {
      // console.log('toUrl', url)
      this.$router.push(url)
    }
  }
}
</script>
