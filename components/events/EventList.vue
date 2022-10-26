<template>
  <div class="event-list">
    <h3 class="bpt-title event-list-header">Events</h3>
    <div class="event-item-container">
      <event-item v-for="event in events" :key="event.id" :event="event" />
      <div v-if="!events.length">No events scheduled 😕</div>
    </div>
    <div class="event-list-footer">
      <a :href="shareLink" target="_blank">
        <b-button size="is-small" icon-left="calendar-plus">
          Add to Google calendar
        </b-button>
      </a>
    </div>
  </div>
</template>

<script>
import { eventsRequestURI, calendarShareLink } from '../../configuration/configuration.js';
export default {
  data() {
    return {
      events: [],
    }
  },
  mounted() {
    this.fetchEvents();
  },
  computed: {
    shareLink() {
      return calendarShareLink()
    }
  },
  methods: {
    async fetchEvents() {
      const events = (await this.$axios.$get(eventsRequestURI())).items
      // For now, filter out full day events
      this.events = events.filter(event => event.start?.dateTime);
    },
  }
}
</script>

<style lang="scss" scoped>
.event-item+.event-item {
  margin-top: 30px;
}

.event-list-header {
  margin-bottom: 1.2rem;
  border-bottom: 2px solid whitesmoke;
  padding-bottom: 0.4rem;
}

.event-list-footer {
  margin-top: 1.5rem;
  border-top: 2px solid whitesmoke;
  padding-top: 0.5rem;
  text-align: center;
}
</style>
