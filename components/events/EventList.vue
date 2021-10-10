<template>
  <div class="event-list">
    <h2 class="bpt-title" v-if="showTitle">Upcoming events</h2>
    <event-item v-for="event in upcomingEvents" :key="event.name" :event="event" />
    <div v-if="noEvents">No events scheduled.</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventsObject: {},
    }
  },
  async fetch() {
    this.eventsObject = await this.$content('upcoming-events').fetch()
  },
  computed: {
    upcomingEvents() {
      return this.eventsObject.events?.filter(this.filterByDate)
    },
    noEvents() {
      return !(this.upcomingEvents && this.upcomingEvents.length)
    },
    showTitle() {
      return true
    }
  },
  methods: {
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
.event-list {
  padding: 0 1rem;
}
.event-item + .event-item{
  margin-top: 30px;
}
</style>
