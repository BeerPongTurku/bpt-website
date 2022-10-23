<template>
  <div v-if="show" class="event-item card">
    <!-- Event card header -->
    <header class="card-header month-bar">
      <div class="card-header-title has-text-white event-month">
        {{ month }}
      </div>
    </header>
    <!-- Event card content -->
    <div class="card-content">
      <div class="columns event-content">
        <div class="column weekday is-one-third has-text-centered">
          <b class="event-day">{{ day }}</b>
          <br />
          <b class="event-weekday">{{ week }}</b>
        </div>
        <div class="column">
          <div class="event-column">
            <div v-if="!event.description" class="event-title">{{ title }}</div>
            <b-collapse v-else :open="false" aria-id="contentIdForA11y1">
              <template #trigger="props">
                <a class="collapse-btn" aria-controls="contentIdForA11y1">
                  <div class="event-title">
                    {{ title }}
                     <b-icon :icon="!props.open ? 'chevron-down' : 'chevron-up'" custom-size="mdi-18px"></b-icon>
                  </div>
                </a>
              </template>
              <p class="event-description" v-html="event.description"></p>
            </b-collapse>
            <div class="event-details">
              <b-icon icon="clock" custom-size="mdi-16px" />
              {{ time }}
              <br />
              <b-icon icon="map-marker" custom-size="mdi-16px" />
              <a v-if="locationLink" class="bpt-link" :href="locationLink" target="_blank">{{ locationName }}</a>
              <span v-else>{{ locationName }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Event card footer -->
    <footer v-if="hasTickets" class="card-footer">
      <div class="card-footer-item event-footer">
        <b-icon :class="tickets.class + ' tickets-icon'" :icon="tickets.icon" custom-size="mdi-24px" />
        <a v-if="ticketHasLink" :class="tickets.class + ' tickets-link'" :href="tickets.link">{{tickets.label}}</a>
        <span v-else :class="tickets.class" else>{{tickets.label}}</span>
      </div>
    </footer>
  </div>
</template>

<script>
import { locationLinkRequestURI } from '../../configuration/configuration.js';
export default {
  props: {
    event: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  data() {
    return {
      date: this.initDate(),
    }
  },
  computed: {
    month() {
      const month = this.date.toLocaleString('en-gb', { month: 'long' })
      const year = this.date.getFullYear()
      return (month + ' ' + year).toUpperCase()
    },
    week() {
      const date = this.date?.toLocaleString('en-gb', { weekday: 'long' })
      return date
    },
    day() {
      return this.date.getDate()
    },
    time() {
      return this.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    },
    title() {
      return this.event?.summary;
    },
    locationName() {
      const location = this.event.location
      return location.substring(0, location.indexOf(','))
    },
    locationLink() {
      return locationLinkRequestURI(this.event.location)
    },
    show() {
      return true;
    },
    hasTickets() {
      return this.event?.tickets;
    },
    ticketsState() {
      return this.event?.tickets;    
    },
    tickets() {
      switch (this.event?.tickets) {
        case 'coming-soon':
          return {
            label: 'Tickets coming soon',
            icon: 'ticket-confirmation-outline',
            class: 'coming-soon'
          }
        case 'sold-out':
          return {
            label: 'Tickets sold out',
            icon: 'ticket-outline',
            class: 'sold-out'
          }
        default: {
          return {
            label: 'Buy tickets',
            icon: 'ticket',
            class: 'on-sale',
            link: this.event.tickets
          }
        }
      }
    },
    ticketHasLink() {
      return this.event?.tickets.includes("http");
    },
    ticketLink() {
      return this.event?.tickets;
    }
  },
  methods: {
    initDate() {
      return new Date(this.event.start.dateTime);
    },
  },
}
</script>

<style lang="scss" scoped>
.event-item {
  min-width: 315px;

  .card-content {
    padding: 0.8rem;
  }
  
  .column {
    padding: 0.4rem 0.8rem;
  }

  @media screen and (min-width: 770px) {
    .weekday {
      padding-right: 0;
    }
  }

  .event-column {
    padding-bottom: 0.4rem;
  }

  .event-month {
    justify-content: center;
    font-family: 'Oswald';
    font-weight: normal;
    padding: 0.3rem;
  }
}

.month-bar {
  background-color: #c55151;
  font-size: 18px;
}
.event-day {
  font-size: 30px;
}
.event-weekday {
  font-size: 16px;
}

.event-details {
  font-size: 16px;
}

.no-events-text {
  padding-top: 10px;
  font-size: 20px;
}

.event-title {
  font-size: 18px;
  margin-bottom: 2px;
  font-weight: bold;
}

.card-header-title {
  padding: 0.4rem;
}

.event-description {
  font-size: 15px;
  color: $text-secondary-color;
  margin-bottom: 5px;
}

.event-footer {
  font-size: 14px;
  padding: 0.4rem;
}

.event-content {
  min-height: 130px;
  background: white;
}

.tickets-icon {
  margin-right: 5px;
}

.sold-out {
  color: $sold-out-color;
}

.on-sale {
  color: $kide-color;
}

.tickets-link {
  &:hover,
  &:focus {
    @include bpt-link-focus-custom($kide-color-transparent);
  }
  @include bpt-link-custom($kide-color)
}

.collapse-btn {
  &:hover,
  &:focus {
    color: black;
  }
  color: inherit;
}


.coming-soon {
  color: $coming-soon-color;
}
</style>
