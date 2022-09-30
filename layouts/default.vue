<!-- Default layout with a container that limits the page width -->
<template>
  <div class="page-container">
    <div class="main">
      <NavBar />
      <section class="main-content">
        <div class="container is-max-widescreen">
          <Nuxt />
        </div>
      </section>
    </div>
    <StickyFooter />
  </div>
</template>

<style lang="css" scoped>
.container {
  margin-top: 30px;
}
</style>
