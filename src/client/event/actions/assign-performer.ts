'use server';

import { assignPerformer } from '@/server/features/event/usecases/assign-performer';

export async function assignPerformerAction(
  eventId: string,
  performerId: string,
) {
  return assignPerformer(eventId, performerId);
}
