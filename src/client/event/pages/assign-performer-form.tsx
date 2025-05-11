'use client';

import { useState, useTransition } from 'react';
import { assignPerformerAction } from '../actions/assign-performer';

type Props = {
  eventId: string;
};

export function AssignPerformerForm({ eventId }: Props) {
  const [performerId, setPerformerId] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(() => {
      assignPerformerAction(eventId, performerId);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={performerId}
        onChange={(e) => setPerformerId(e.target.value)}
        placeholder="Performer ID"
      />
      <button type="submit" disabled={isPending}>
        {isPending ? 'Assigning...' : 'Assign Performer'}
      </button>
    </form>
  );
}
