import { Category } from "../categories/category.entity";
import { Meal } from "../meals/meal.entity";

export class SchedulerDto {
    category: Category;

    meals: Meal[];

    schedule_date: string;
}
