<template lang="pug">
  div.view-collection
    h1 Collection
    ci-collection
      ci-collection-header(title="Collection Title" extend="more")
      ci-collection-body
        ci-collection-cell(v-for="i in list" :key="i")
          ci-media.article(
            modifier="image-top"
            title="Bryan Cranston played the role of Walter in Breaking Bad"
            text="He is also known for playing."
            image="http://via.placeholder.com/240x120")
</template>

<script>
export default {
  name: 'view-collection',

  data() {
    return {
      list: [0, 1, 2, 3, 4, 5]
    }
  }
}
</script>

<style>
.article {
  background-color: #fff;
}
</style>
