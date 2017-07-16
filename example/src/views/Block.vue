<template lang="pug">
  div.view-block
    h1 Block
    ci-block
      ci-block-header(title="Block Title" extend="more")
      ci-block-body
        ci-media(
          title="Bryan Cranston"
          text="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing."
          :image="{ src: 'http://via.placeholder.com/96x96' }")

    ci-block(border="border")
      ci-block-header(title="Block Title" extend="more")
      ci-block-body
        ci-media(
          title="Bryan Cranston"
          text="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing."
          :image="{ src: 'http://via.placeholder.com/96x96' }")
          
    ci-block(radius="radius")
      ci-block-header(title="Block Title" extend="more")
      ci-block-body
        ci-media(
          title="Bryan Cranston"
          text="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing."
          :image="{ src: 'http://via.placeholder.com/96x96' }")
          
    ci-block(radius="radius" raised="raised")
      ci-block-header(title="Block Title" extend="more")
      ci-block-body
        ci-media(
          title="Bryan Cranston"
          text="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing."
          :image="{ src: 'http://via.placeholder.com/96x96' }")
</template>

<script>
export default {
  name: 'view-block'
}
</script>

