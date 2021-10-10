<template>
  <div class="content has-text-centered">
    <h1>{{error.statusCode === 404 ? 'Oops, looks like you missed the cups...' : 'An unknown error occurred...'}}</h1>
    {{error.statusCode === 404 ? 'Nothing to see here. ' : 'If this keeps happening, contact beerpongturku@gmail.com'}}
    <NuxtLink class="bpt-link" to="/">{{error.statusCode === 404 ? 'Go back to the front page?' : 'Try going back to the front page?'}}</NuxtLink>
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
  }
}
</script>

<style scoped>
.content {
  padding: 5rem;
}
</style>