<template>
  <div class="contact-info">
    <h5 class="title is-5">{{ info.organization }}</h5>
    <p>
      {{ businessCode }}
      <br v-if="showBusinessId" />
      {{ info.address }}
      <br />
      {{ info.postalCode + ' ' + info.city }}
      <br />
      <br v-if="showBusinessId" />
      {{ info.email }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    showBusinessId: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      info: {},
    }
  },
  async fetch() {
    this.info = await this.$content('contact-info').fetch()
  },
  computed: {
    businessCode() {
      return this.showBusinessId ? this.info.businessId : ''
    },
  },
}
</script>
