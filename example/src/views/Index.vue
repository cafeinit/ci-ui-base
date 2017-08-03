<template lang="pug">
  div.view-index
    h2.app-title Index

    ci-list
      ci-list-body
        ci-list-cell(title="Block"
          extend-text="detail" extend-icon="chevron_right"
          @click="toUrl('block')")
        ci-list-cell(title="Collection" extend-icon="chevron_right"
          @click="toUrl('collection')")
        ci-list-cell(title="List" extend-text="detail"
          @click="toUrl('list')")
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
