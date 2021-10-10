<template>
  <div>
    <hero-image
      :title="frontPage.headline"
      :subtitle="frontPage.summary"
      image="/images/fsobp-2018.jpg"
      :size="heroSize()"
      :text-shadow="true"
    >
    </hero-image>
    <section class="main-content">
      <div class="container">
        <div class="columns has-margin has-full-height">
          <div class="column">
            <div class="box content">
              <nuxt-content :document="frontPage" />
            </div>
          </div>
          <div class="column content">
            <event-list />
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
    const frontPage = await $content('index').fetch()
    return { frontPage }
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
</style>
