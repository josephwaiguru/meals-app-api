import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Category } from './category.entity';
import { createCategoryDto } from './create-category.dto';

@Injectable()
export class CategoriesService {
    constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>, private connection: Connection) {}

    findAll(): Promise<Category[]> {
        return this.categoryRepository.find();
    }

    async createOne(category: createCategoryDto): Promise<createCategoryDto> {
       return this.categoryRepository.save(category);
    }
}
