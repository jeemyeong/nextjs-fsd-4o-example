import { db } from '@/server/features/shared/db';

export async function getPerformerCount(eventId: string): Promise<number> {
  return db.performer.count({ where: { eventId } });
}
