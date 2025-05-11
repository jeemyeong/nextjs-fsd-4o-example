import { db } from '@/server/features/shared/db';
import { addPerformer } from '@/server/features/event/models/event';

export async function assignPerformer(eventId: string, performerId: string) {
  const [event, performer] = await Promise.all([
    db.event.findUniqueOrThrow({ where: { id: eventId } }),
    db.performer.findUniqueOrThrow({ where: { id: performerId } }),
  ]);

  if (performer.assigned) throw new Error('Performer already assigned');

  await db.$transaction(async (tx) => {
    await tx.performer.update({
      where: { id: performerId },
      data: { assigned: true },
    });
    await addPerformer(tx, event, performerId);
  });
}
