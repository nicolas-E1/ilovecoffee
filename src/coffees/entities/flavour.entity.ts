import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Coffee } from './coffee.entity';

@Entity()
export class Flavour {
  @PrimaryGeneratedColumn()
  id: NumberConstructor;

  @Column()
  name: string;

  @ManyToMany((type) => Coffee, (coffee) => coffee.flavours)
  coffees: Coffee[];
}
