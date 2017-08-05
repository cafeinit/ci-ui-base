<template lang="pug">
  div.view-figure
    h2.app-title Figure

    ci-figure(:image="image"
      width="300" radius="20" mode="auto-height"
      @click="imageOnClick")

    ci-figure(:is-lazy="true" :image="image"
      width="300" height="300" radius='25'
      @click="imageOnClick")

    ci-figure(:image="image" width="300" height="200" radius="20")

    ci-figure(:image="image" width="200" height="300" radius="10")

    ci-figure(:image="image" width="300" height="300" mode="aspect-fit")

    ci-figure(:image="image" width="300" height="200" mode="aspect-fit")

    ci-figure(:is-lazy="true" :image="image"
      width="200" height="300" mode="aspect-fit")

    ci-figure(:is-lazy="true" image="https://vuejs.org/images/logo.png"
      width="200" height="300" radius="10" mode="aspect-fit")

    ci-figure(:is-lazy="true"
      image="http://img12.360buyimg.com/cms/jfs/t4087/29/78270449/95294/2bf5e226/583b86e5N5886c370.jpg"
      width="200" height="300" mode="aspect-fit")

    ci-figure(:is-lazy="true"
      image="http://img12.360buyimg.com/cms/jfs/t4087/29/78270449/95294/2bf5e226/583b86e5N5886c370.jpg"
      width="200" height="300" radius="10")
</template>

<script>
export default {
  name: 'view-figure',

  data() {
    return {
      image: 'https://img30.360buyimg.com/popWaterMark/jfs/t3034/278/2345638110/141275/166e9a8f/57d67b45N2991179b.jpg',
      product: {}
    }
  },

  created() {
    this.getProduct((data) => {
      this.product = data
    })
  },

  methods: {
    imageOnClick: function (evt) {
      console.log('imageOnClick', evt, this)
    },

    getProduct(callback) {
      setTimeout(() => {
        const product = {
          thumb: this.image,
          name: 'Product Name',
          price: '1,000.99'
        }
        callback(product)
      }, 1000)
    }
  }
}
</script>

<style scoped>
.ci-figure {
  margin: 30px auto;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
}
</style>
