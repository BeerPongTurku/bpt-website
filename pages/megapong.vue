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
    const page = await $content('megapong').fetch()

    return { page }
  },
  head: {
    title: 'Mega Pong - BPT',
  },
}
</script>
