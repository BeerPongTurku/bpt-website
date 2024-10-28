<template>
  <div class="card" style="max-width: 400px; min-width: 300px;">
    <div v-if="false" class="card-image">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-5">{{ name }}</p>
          <p class="subtitle is-6">{{ role }}</p>
        </div>
      </div>
      <div class="content member-contact-info">
        <div>{{ email }}</div>
        <div>{{ '[ät]' + telegram }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
      default: '',
    },
    telegram: {
      type: String,
      required: false,
      default: '',
    },
    img: {
      type: String,
      required: false,
      default: 'https://bulma.io/images/placeholders/96x96.png',
    },
  },
}
</script>
