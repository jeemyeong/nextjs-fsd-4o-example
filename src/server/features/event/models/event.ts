import { Event } from '@prisma/client';

export async function addPerformer(event: Event, performerId: string) {
  if (event.performerIds.includes(performerId)) {
    throw new Error('Performer already assigned');
  }

  return event.performerIds.push(performerId);
}

export async function hasPerformer(event: Event, performerId: string) {
  return event.performerIds.includes(performerId);
}

export async function formatEventDate(event: Event) {
  return `${event.date}`;
}
