'use server';

import { getEvents } from '@/server/features/event/queries/get-events';

export async function getEventsAction() {
  return getEvents();
}
