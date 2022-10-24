<template>
  <div class="event-list">
    <h3 class="bpt-title">Events</h3>
    <div class="event-item-container">
      <event-item v-for="event in events" :key="event.id" :event="event" />
      <div v-if="!events.length">No events scheduled 😕</div>
    </div>
  </div>
</template>

<script>
import { eventsRequestURI } from '../../configuration/configuration.js';
export default {
  data() {
    return {
      events: [],
    }
  },
  computed: {
    /*
    upcomingEvents() {
      return this.eventsObject.events?.filter(this.filterByDate)
    },
    */
   /*
    noEvents() {
      return !(this.upcomingEvents && this.upcomingEvents.length)
    },
    showTitle() {
      return true
    }
    */
  },
  mounted() {
    this.fetchEvents();
  },
  methods: {
    async fetchEvents() {
      console.log(eventsRequestURI());
      const events = (await this.$axios.$get(eventsRequestURI())).items
      // For now, filter out full day events
      this.events = events.filter(event => event.start?.dateTime);
    },
    filterByDate(item) {
      const date = new Date(item.date)
      if (date > Date.now()) {
        return true
      }
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.event-item + .event-item{
  margin-top: 30px;
}
</style>
