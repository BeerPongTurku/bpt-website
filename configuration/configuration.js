import configuration from './configuration.json'

export function navigationLinks() {
  return configuration.navigationLinks
}

export function calendarShareLink() {
  return configuration.calendar.shareLink
}

export function eventsRequestURI() {
  const { id, key } = configuration.calendar

  const params = new URLSearchParams({
    maxResults: configuration.calendar.maxNumberOfEvents,
    singleEvents: true,
    timeMin: new Date().toISOString(),
    orderBy: 'startTime',
    key,
  });

  const url = new URL('https://www.googleapis.com/calendar/v3/calendars/' + id + '/events')
  url.search = params

  return url.toString()
}

export function locationLinkRequestURI(location) {

  const params = new URLSearchParams({
    api: 1,
    query: location
  });

  const url = new URL('https://www.google.com/maps/search/')
  url.search = params

  return url.toString()
}