import {Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { Category } from "../categories/category.entity";
import { Meal } from "../meals/meal.entity";

@Entity({
  name: 'schedule'
})
export class Scheduler {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    schedule_date: string;

    @ManyToOne(() => Category)
    @JoinColumn({
      name: 'category'
    })
    category: Category;

    @ManyToMany(() => Meal)
    @JoinTable({ 
      name: 'schedule_meals_meal',
      joinColumn: {
        name: 'schedule_id',
        referencedColumnName: 'id'
      },
      inverseJoinColumn: {
        name: 'meal_id'
      }
    })
    meals: Meal[];
}
