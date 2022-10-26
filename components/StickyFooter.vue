<template>
  <div class="footer">
    <img src="~/assets/images/logo.png" width="150px" />
    <ContactInfo :show-business-id="false" :show-storage-address="false" />
    <SocialMediaBar />
  </div>
</template>

<script>

export default {
  name: 'StickyFooter',
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: $footer-bg-color;
  margin-top: 1.5rem;

  .contact-info {
    margin: 20px;
  }
}
</style>
