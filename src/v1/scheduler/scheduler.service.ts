import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SchedulerDto } from './scheduler.dto';
import { Scheduler } from './scheduler.entity';

@Injectable()
export class SchedulerService {
    constructor(@InjectRepository(Scheduler) private schedulerRepository: Repository<Scheduler>) {}

    findAll(): Promise<Scheduler[]> {
        return this.schedulerRepository.find({
            relations: ['meals', 'category']
        });
    }

    async create(schedule: SchedulerDto): Promise<Scheduler> {

        const scheduleRecord = await this.schedulerRepository.findOne({
            where: {
                schedule_date: schedule.schedule_date,
                category: schedule.category
            },
            relations: ['meals']
        });

        if(scheduleRecord) {
            const meals = [...schedule.meals.map(id => <any>({id:  id})), ...scheduleRecord.meals];

            return this.schedulerRepository.save({
                ...scheduleRecord,
                meals: meals
            });
        } else {
            schedule.meals = schedule.meals.map(id => <any>({id:  id}));

            return this.schedulerRepository.save(schedule);
        }
    }

    update(id: string, schedule: SchedulerDto): Promise<any> {
        schedule.meals = schedule.meals.map(id => <any>({id:  id}));

        return this.schedulerRepository.update(id, schedule);
    }
    
    async removeMeal(id: string, data: SchedulerDto): Promise<void> {
        const entity = await this.schedulerRepository.findOne(id, {
            relations: ['meals']
        });

        const meals = entity.meals.filter(meal => data.meals[0].id !== meal.id);

        await this.schedulerRepository.save({
            ...entity,
            meals
        });
    }
}
