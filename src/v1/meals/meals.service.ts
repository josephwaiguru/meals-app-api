import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../categories/category.entity';
import { MealDto } from './meal.dto';
import { Meal } from './meal.entity';

@Injectable()
export class MealsService {
    constructor(@InjectRepository(Meal) private mealRepository: Repository<Meal>) {}

    findAll(): Promise<Meal[]> {
        return this.mealRepository.find({
            relations: ['categories'],
        });
    }

    async findOne(id: string): Promise<Meal> {
        return await this.mealRepository.findOne(id, {
            relations: ['categories']
        });
    }

    createOne(meal: MealDto): Promise<MealDto> {
        meal.categories = meal.categories.map(id => <any>({id:  id}));

        return this.mealRepository.save(meal);
    }

    async updateOne(id: string, meal: MealDto) {
        let entity = await this.mealRepository.findOne(id, {
            relations: ['categories']
        });
        
        return await this.mealRepository.save({ 
            ...entity, 
            ...meal,
            categories: meal.categories.map(id => <any>({id:  id})),
            updated_at: new Date()
        });
    }
 
    async remove(id: string): Promise<void> {
        await this.mealRepository.delete(id);
    }
}
