<template>
  <b-navbar class="navbar header is-fixed-top" type="is-primary" :class="fadeBackground" wrapper-class="container"
    :mobile-burger="true">
    <template #brand>
      <b-navbar-item class="brand text-shadow" tag="router-link" :to="{ path: '/' }">
        <span>
          <img class="brand-logo drop-shadow" src="~/assets/images/icon.png" alt="Beer Pong Turku" />BPT</span>
      </b-navbar-item>
    </template>

    <template #end>
      <NavItem v-for="(navItem, index) in navItems" :key="index" :nav-item="navItem" />
      <!-- Coming soon ;)
      <b-navbar-dropdown label="Association" :hoverable="openOnHover" :collapsible="collapseOnMobile">
        <b-navbar-item href="/about">About</b-navbar-item>
        <b-navbar-item href="/board">Board</b-navbar-item>
        <b-navbar-item href="/contact">Contact</b-navbar-item>
        <b-navbar-item href="/documents">Documents</b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-dropdown label="Beer Pong" :hoverable="openOnHover" :collapsible="collapseOnMobile">
        <b-navbar-item href="/events">Events</b-navbar-item>
        <b-navbar-item href="/rules">Rules</b-navbar-item>
        <b-navbar-item href="/megapong">Mega Pong</b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-item href="/services">Services</b-navbar-item>
      <b-navbar-item href="/join">Join</b-navbar-item>
      -->
    </template>
  </b-navbar>
</template>

<script>
import { navigationLinks } from '../configuration/configuration.js';
import NavItem from './NavItem.vue';
export default {
  components: { NavItem },
  props: {
    /* Fade background on page scroll */
    fadeOnScroll: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      scrollPosition: null,
      navItems: navigationLinks(),
    };
  },
  computed: {
    fadeBackground() {
      if (this.fadeOnScroll) {
        return this.scrollPosition > 40 ? "has-solid-bg" : "has-transparent-bg";
      }
      return "has-solid-bg";
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar-item {
  text-transform: uppercase;
  font-family: $nav-item-font;
  font-size: $nav-item-parent-font-size;
}

.navbar-dropdown .navbar-item {
  font-size: $nav-item-child-font-size;
}

@media screen and (max-width: $mobile-breakpoint) {
  .navbar-dropdown .navbar-item {
    color: $nav-item-child-mobile-color;
  }
}

.has-solid-bg {
  background-color: $nav-bg-color;
  transition: background-color 250ms linear;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}

.has-transparent-bg {
  background-color: transparent;
  transition: background-color 250ms linear;
}

.navbar-item.brand {
  font-family: $nav-brand-font;
  font-size: 36px;
  line-height: 0;
  padding: 0 0.75rem;
}

.brand-logo {
  max-height: 2.1rem;
  margin-right: 5px;
}
</style>
