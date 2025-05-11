import { Performer } from '@prisma/client';

export function isAvailable(performer: Performer): boolean {
  return performer.assigned === false;
}
