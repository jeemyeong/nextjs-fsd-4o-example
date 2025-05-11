import { db } from '@/server/features/shared/db';
import { type EventDto } from '../dto/event-dto';

export async function getEvents(): Promise<EventDto[]> {
  const events = await db.event.findMany({
    include: {
      venue: {
        select: { name: true },
      },
      performers: {
        select: { name: true },
      },
    },
  });

  return events.map((event) => ({
    id: event.id,
    name: event.name,
    date: event.date.toISOString(),
    venueName: event.venue?.name ?? 'TBD',
    performerNames: event.performers.map((p) => p.name),
  }));
}
