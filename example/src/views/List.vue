<template lang="pug">
  div.view-list
    h2.app-title List

    ci-list
      ci-list-header(title="List Title" extend="more")
      ci-list-body
        ci-list-cell(
          image="http://via.placeholder.com/48x48"
          title="Item Title" text="Some text here" extend="detail")

        ci-list-cell(title="Item Title" extend="detail")

        ci-list-cell(title="Item Title")
</template>

<script>
export default {
  name: 'view-list'
}
</script>
