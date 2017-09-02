<template lang="pug">
div.view-index
  h2.app-title Index

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

  ci-list
    ci-list-body
      ci-list-cell(title="Figure" extend-icon="chevron_right"
        @click="toUrl('figure')")
      ci-list-cell(title="Image" extend-icon="chevron_right"
        @click="toUrl('image')")
      ci-list-cell(title="Media" extend-icon="chevron_right"
        @click="toUrl('media')")
</template>

<script>
export default {
  name: 'view-index',

  methods: {
    toUrl(url) {
      // console.log('toUrl', url)
      this.$router.push(url)
    }
  }
}
</script>
