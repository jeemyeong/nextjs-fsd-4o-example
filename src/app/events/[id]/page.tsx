'use server';
import { getEventAction } from '@/client/event/actions/get-event';
import { AssignPerformerForm } from '@/client/event/pages/assign-performer-form';

export default async function EventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const eventId = (await params).id;
  const event = await getEventAction(eventId);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div>
      <h1>{event.name}</h1>
      <AssignPerformerForm eventId={eventId} />
    </div>
  );
}
