import { Category } from "../categories/category.entity";

export class MealDto {
    name: string;

    description?: string;

    categories: Category[];
}