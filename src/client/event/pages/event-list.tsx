'use client';

import { useUpcomingEvents } from '../hooks/use-upcoming-events';

export function EventList() {
  const events = useUpcomingEvents();

  return (
    <ul>
      {events.map((event) => (
        <li key={event.id}>
          <strong>{event.name}</strong> on {event.date}
        </li>
      ))}
    </ul>
  );
}
