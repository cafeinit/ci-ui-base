<template lang="pug">
  div.view-image
    h2.app-title Image

    ci-image(:src="image_src"
      width="300" radius="20" mode="auto-height"
      @click="imageOnClick")

    ci-image(:is-lazy="true" :src="image_src"
      width="300" height="300" radius='25'
      @click="imageOnClick")

    ci-image(:src="image_src" width="300" height="200" radius="20")

    ci-image(:src="image_src" width="200" height="300" radius="10")

    ci-image(:src="image_src" width="300" height="300" mode="aspect-fit")

    ci-image(:src="image_src" width="300" height="200" mode="aspect-fit")

    ci-image(:is-lazy="true" :src="image_src"
      width="200" height="300" mode="aspect-fit")

    ci-image(:is-lazy="true" src="https://vuejs.org/images/logo.png"
      width="200" height="300" radius="10" mode="aspect-fit")

    ci-image(:is-lazy="true"
      src="http://img12.360buyimg.com/cms/jfs/t4087/29/78270449/95294/2bf5e226/583b86e5N5886c370.jpg"
      width="200" height="300" mode="aspect-fit")

    ci-image(:is-lazy="true"
      src="http://img12.360buyimg.com/cms/jfs/t4087/29/78270449/95294/2bf5e226/583b86e5N5886c370.jpg"
      width="200" height="300" radius="10")
</template>

<script>
export default {
  name: 'view-image',

  data() {
    return {
      image_src: 'https://img30.360buyimg.com/popWaterMark/jfs/t3034/278/2345638110/141275/166e9a8f/57d67b45N2991179b.jpg',
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
          thumb: this.image_src,
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
.ci-image {
  margin: 30px auto;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
}
</style>
