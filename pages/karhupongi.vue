<template>
  <section class="section">
    <div class="content">
      <h1>{{ page.title }}</h1>
      <nuxt-content :document="page" />
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('karhupongi').fetch()

    return { page }
  },
  head: {
    title: 'Karhupongi - BPT',
  },
}
</script>
