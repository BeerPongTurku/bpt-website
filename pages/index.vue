<template>
  <div>
    <hero-image
      title="Up for a game of Beer Pong?"
      subtitle="We are an academic Beer Pong association within University of Turku and Turku University of Applied Sciences."
      image="/images/fsobp-2018.jpg"
      :size="heroSize()"
      :text-shadow="true"
    >
    </hero-image>
    <section class="main-content">
      <div class="container">
        <div class="columns has-margin has-full-height">
          <div class="column">
            <div class="box content summary">
              <nuxt-content :document="column" />
            </div>
          </div>
          <div class="column content">
            Placeholder
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  layout: 'home',
  async asyncData({ $content }) {
    const column = await $content('index').fetch()
    return { column }
  },
  methods: {
    heroSize() {
      return window.innerWidth > 1024 ? 'is-large' : 'is-fullheight-with-navbar'
    },
  },
}
</script>

<style lang="scss" scoped>
.has-margin {
  margin: 2%;
}

.has-full-height {
  min-height: 290px;
}

.summary {
  height: 100%;
}
</style>
