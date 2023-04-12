import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { CoffeesModule } from 'src/coffees/coffees.module';
import { DatabaseModule } from 'src/database/database.module';
import { CoffeeRatingService } from './coffee-rating.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule.register({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
    }),
    CoffeesModule,
  ],

  providers: [CoffeeRatingService],
})
export class CoffeeRatingModule {}
