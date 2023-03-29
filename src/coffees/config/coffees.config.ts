import { registerAs } from '@nestjs/config';

export default registerAs('coffees', () => ({
  singleOrigin: true,
}));
