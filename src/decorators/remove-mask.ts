import { Transform } from 'class-transformer';

export function RemoveMask() {
  return Transform(({ value }) => value.replace(/\D/g, ''));
}
