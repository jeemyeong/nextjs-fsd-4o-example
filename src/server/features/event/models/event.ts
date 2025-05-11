import { Event, Prisma } from '@prisma/client';
import { db } from '@/server/features/shared/db';

export async function getPerformerCount(event: Event) {
  return db.performer.count({
    where: { eventId: event.id },
  });
}

export async function getPerformers(event: Event) {
  return db.performer.findMany({
    where: { eventId: event.id },
    orderBy: { name: 'asc' },
  });
}

export async function addPerformer(
  tx: Prisma.TransactionClient,
  event: Event,
  performerId: string,
) {
  if (event.performerIds.includes(performerId)) {
    throw new Error('Performer already assigned');
  }

  return tx.event.update({
    where: { id: event.id },
    data: { performerIds: { push: performerId } },
  });
}

export async function hasPerformer(event: Event, performerId: string) {
  return event.performerIds.includes(performerId);
}

export async function formatEventDate(event: Event) {
  return `${event.date}`;
}
