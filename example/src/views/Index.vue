<template lang="pug">
  div.view-index
    h2.app-title Index

    ci-list
      ci-list-body
        ci-list-cell(title="Block" extend="detail" accessory="link"
          @click="toUrl('block')")
        ci-list-cell(title="Collection" @click="toUrl('collection')")
        ci-list-cell(title="List" @click="toUrl('list')")
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
