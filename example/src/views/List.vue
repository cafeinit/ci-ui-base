<template lang="pug">
  div.view-list
    h2.app-title List

    ci-list
      ci-list-header(title="List Title" extend-text="more")
      ci-list-body
        ci-list-cell(
          image="http://via.placeholder.com/48x48"
          title="Item Title" text="Some text here"
            extend_text="detail" extend-icon="chevron_right")

        ci-list-cell(
          title="Bryan Cranston"
          text="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing."
          extend_text="important" extend-icon="error_outline")

        ci-list-cell(title="Item Title" extend-icon="ic_play_circle_outline")
</template>

<script>
export default {
  name: 'view-list'
}
</script>
