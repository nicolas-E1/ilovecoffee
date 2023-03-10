import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Flavour } from 'src/coffees/entities/flavour.entity';
import { CoffeeRefactor1678329259196 } from 'src/migrations/1678329259196-CoffeeRefactor';
import { SchemaSync1678329829820 } from 'src/migrations/1678329829820-SchemaSync';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavour],
  migrations: [CoffeeRefactor1678329259196, SchemaSync1678329829820],
});
