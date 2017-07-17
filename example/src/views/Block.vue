<template lang="pug">
  div.view-block
    h1 Block
    ci-block
      ci-block-header(title="Block Title" extend="more")
      ci-block-body
        ci-media(
          modifier="image-top"
          title="Bryan Cranston"
          text="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing."
          image="http://via.placeholder.com/960x400")

    ci-block(modifier="border")
      ci-block-header(title="Block Title" extend="more")
      ci-block-body
        ci-media(
          title="Bryan Cranston"
          text="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing."
          image="http://via.placeholder.com/96x96")
      ci-block-footer.ci-text-right Add to Cart

    ci-block(modifier="radius")
      ci-block-header(title="Block Title" extend="more")
      ci-block-body
        ci-media(
          title="Bryan Cranston"
          text="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing."
          image="http://via.placeholder.com/96x96")

    ci-block(modifier="radius raised")
      ci-block-header(title="Block Title" extend="more")
      ci-block-body
        ci-media(
          title="Bryan Cranston"
          text="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing."
          image="http://via.placeholder.com/96x96")
</template>

<script>
export default {
  name: 'view-block'
}
</script>
