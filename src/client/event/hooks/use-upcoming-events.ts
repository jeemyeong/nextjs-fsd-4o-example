'use client';

import { useEffect, useState } from 'react';
import type { EventDto } from '@/server/features/event/dto/event-dto';
import { getEventsAction } from '@/client/event/actions/get-events';

export function useUpcomingEvents() {
  const [events, setEvents] = useState<EventDto[]>([]);

  useEffect(() => {
    getEventsAction().then(setEvents).catch(console.error);
  }, []);

  return events;
}
