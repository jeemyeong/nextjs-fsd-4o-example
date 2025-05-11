'use server';

import { getEvent } from '@/server/features/event/queries/get-event';

export async function getEventAction(id: string) {
  return getEvent(id);
}
