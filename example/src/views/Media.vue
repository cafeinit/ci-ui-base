<template lang="pug">
  div.view-media
    h2.app-title Media

    ci-media(
      image="http://via.placeholder.com/96x96"
      title="Bryan Cranston"
      image-width="96" image-height="96"
      text="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing.")


    ci-media.product(
      image="http://img12.360buyimg.com/cms/jfs/t4087/29/78270449/95294/2bf5e226/583b86e5N5886c370.jpg"
      image-width="96" image-height="144"
      title="Bryan Cranston"
      text="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing.")
      p.price $100.00
      a See Details
</template>

<script>
export default {
  name: 'view-media'
}
</script>
