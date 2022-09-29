<template>
  <b-navbar-dropdown :label="navItem.label" :hoverable="openOnHover" :collapsible="collapseOnMobile">
    <b-navbar-item v-for="(page, index) in navItem.pages" :key="index" :href="page.route">
      {{ page.label }}
    </b-navbar-item>
  </b-navbar-dropdown>
</template>

<script>

export default {
  props: {
    navItem: {
      type: Object,
      required: true,
    },
    /* Open dropmenus on hover */
    openOnHover: {
      type: Boolean,
      required: false,
      default: false,
    },
    /* Collapse dropmenus on mobile */
    collapseOnMobile: {
      type: Boolean,
      required: false,
      default: true
    },
  }
}
</script>