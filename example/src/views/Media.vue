<template lang="pug">
  div.view-media
    h1 Media
    ci-media(
      title="Bryan Cranston"
      text="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing."
      :image="{ src: 'http://via.placeholder.com/96x96' }")
</template>

<<script>
export default {
  name: 'view-media',

  created() {
    console.log('Media View')
  }
}
</script>

