import { db } from '@/server/features/shared/db';
import { addPerformer } from '@/server/features/event/models/event';

export async function assignPerformer(eventId: string, performerId: string) {
  const [event, performer] = await Promise.all([
    db.event.findUniqueOrThrow({ where: { id: eventId } }),
    db.performer.findUniqueOrThrow({ where: { id: performerId } }),
  ]);

  if (performer.assigned) throw new Error('Performer already assigned');

  await addPerformer(event, performerId);

  await db.$transaction([
    db.performer.update({
      where: { id: performerId },
      data: { assigned: true },
    }),
    db.event.update({
      where: { id: eventId },
      data: {
        performerIds: {
          push: performerId,
        },
      },
    }),
  ]);
}
