<template>
  <div class="content has-text-centered">
    <h1>{{notFound ? 'Oops, looks like you missed the cups...' : 'An unknown error occurred...'}}</h1>
    {{notFound ? 'Nothing to see here. ' : 'If this keeps happening, contact beerpongturku@gmail.com'}}
    <NuxtLink class="bpt-link" to="/">{{notFound ? 'Go back to the front page?' : 'Try going back to the front page?'}}</NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: () => {},
    }
  },
  computed: {
    notFound() {
      return this.error.statusCode === 404
    }
  }
}
</script>

<style scoped>
.content {
  padding: 5rem;
}
</style>