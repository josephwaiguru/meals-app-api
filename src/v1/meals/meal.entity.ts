import { Category } from '../categories/category.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'meals' })
export class Meal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToMany(() => Category)
  @JoinTable({ 
    name: 'meal_categories_category',
    joinColumn: {
      name: 'meal_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'category_id'
    }
  })
  categories: Category[];

  @UpdateDateColumn()
  updated_at: Date;

}
