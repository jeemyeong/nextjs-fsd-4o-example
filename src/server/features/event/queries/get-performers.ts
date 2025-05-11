import { Event } from '@prisma/client';
import { db } from '@/server/features/shared/db';

export async function getPerformers(event: Event) {
  return db.performer.findMany({
    where: { eventId: event.id },
    orderBy: { name: 'asc' },
  });
}
