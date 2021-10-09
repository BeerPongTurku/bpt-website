<template>
  <div>
    <a class="ig-hover-color" :href="instagram" aria-label="Instagram">
      <b-icon icon="instagram" size="is-large" />
    </a>
    <a class="fb-hover-color" :href="facebook" aria-label="Facebook">
      <b-icon icon="facebook" size="is-large" />
    </a>
  </div>
</template>
<script>
export default {
  props: {
    /* Not implemented */
    showTextLabels: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      medias: {},
    }
  },
  async fetch() {
    this.medias = await this.$content('social-media').fetch()
  },
  computed: {
    instagram() {
      return this.generateHref('instagram')
    },
    facebook() {
      return this.generateHref('facebook')
    },
    kideApp() {
      return this.generateHref('kideApp')
    },
  },
  methods: {
    generateHref(key) {
      const BASE_URLS = {
        facebook: 'https://www.facebook.com/',
        instagram: 'https://www.instagram.com/',
        kideApp: 'https://kide.app/community/',
      }
      const socialMedia = this.medias[key] ?? ''
      if (socialMedia.includes('https://')) {
        return socialMedia
      }
      return BASE_URLS[key] + socialMedia
    },
  },
}
</script>
<style lang="scss" scoped>
.fb-hover-color {
  &:hover,
  &:focus {
    color: $facebook-color;
    background-color: transparent;
  }
}

.ig-hover-color {
  &:hover,
  &:focus {
    color: $instagram-color;
    background-color: transparent;
  }
}

/* Add spacing between social media links */
a + a {
  margin-left: 10px;
}
</style>
