import { db } from '@/server/features/shared/db';
import { type EventDto } from '../dto/event-dto';

export async function getEvent(id: string): Promise<EventDto | null> {
  const event = await db.event.findUnique({
    where: { id },
    include: {
      venue: {
        select: { name: true },
      },
      performers: {
        select: { name: true },
      },
    },
  });

  if (!event) return null;

  return {
    id: event.id,
    name: event.name,
    date: event.date.toISOString(),
    venueName: event.venue?.name ?? 'TBD',
    performerNames: event.performers.map((p) => p.name),
  };
}
