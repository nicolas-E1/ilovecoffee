import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    /**
     * To specify another path for this file,
     * let’s pass in an options object into the forRoot() method
     * and set the envFilePath property like so:
     * In this example, we’re looking instead for a .environment file.
     */
    ConfigModule.forRoot({
      envFilePath: '.environment',
      /**
       * Have ConfigModule *ignore* .env files
       * Useful when using Provider UI's such as Heroku, etc (and they handle all ENV variables)
       */
      ignoreEnvFile: true,
    }),
    CoffeesModule,
    CoffeeRatingModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
