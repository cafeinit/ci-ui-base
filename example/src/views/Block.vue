extend-text="<template lang="pug">
  div.view-block
    h2.app-title Block

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
          extend-text="Read More")


    ci-block(modifier="border")
      ci-block-header(title="Block Title" extend-text="more")
      ci-block-body
        ci-media(
          title="Bryan Cranston"
          text="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing."
          image="http://via.placeholder.com/96x96")
      ci-block-footer.ci-text-right Add to Cart

    ci-block(modifier="radius")
      ci-block-header(title="Block Title" extend-text="more")
      ci-block-body
        ci-media(
          title="Bryan Cranston"
          text="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing."
          image-width="96" image-height="96"
          image="http://via.placeholder.com/96x96")

    ci-block(modifier="radius raised")
      ci-block-header(title="Block Title" extend-text="more")
      ci-block-body
        ci-media(
          title="Bryan Cranston"
          text="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing."
          image-width="128" image-height="150%"
          image="http://via.placeholder.com/96x96")
</template>

<script>
export default {
  name: 'view-block',

  data() {
    return {
      page_width: document.body.clientWidth
    }
  }
}
</script>
