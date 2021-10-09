<template>
  <section :class="heroStyle">
    <div class="hero-head"></div>
    <img
      class="hero-background is-transparent"
      :src="image"
      alt="Hero banner"
    />
    <div class="hero-body">
      <div
        class="container has-text-centered"
        :class="{ 'text-shadow': textShadow }"
      >
        <h1 class="title">{{ title }}</h1>
        <h2 class="subtitle">{{ subtitle }}</h2>
      </div>
    </div>
    <div class="hero-foot"></div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
      default: '',
    },
    /**
     * URL of the background image.
     */
    image: {
      type: String,
      required: false,
      default: '/images/fsobp-2018.jpg',
    },
    /**
    Height of the hero. Sizes are predefined classes in Bulma. Effectively this prop can be used to pass any class name to this component.
    */
    size: {
      type: String,
      required: false,
      default: 'is-medium',
    },
    textShadow: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    heroStyle() {
      return 'hero is-primary has-background ' + this.size
    },
  },
}
</script>

<style lang="scss" scoped>
.has-background {
  /* Background image opacity. 1 = fully visible, 0 = no background image */
  --bg-opacity: 0.3;
  /* Concentrate text to more narrow view area on wider screens */
  --max-text-width: 650px;
  /* Adjust title font and weight */
  --title-text-font: inherit;
  --title-text-weight: bold;
}

.hero.has-background {
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
}

.hero-background.is-transparent {
  opacity: var(--bg-opacity);
  /* Background image is converted to grayscale to properly apply primary color (forest green) hue */
  filter: grayscale(100%);
}

.container.has-text-centered {
  max-width: var(--max-text-width);
}

.title {
  font-family: var(--title-text-font);
  font-weight: var(--title-text-weight);
  margin-top: 24px;
}
</style>
