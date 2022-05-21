import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { createCategoryDto } from './create-category.dto';

@Controller('categories')
export class CategoriesController {

    constructor(private categoryService: CategoriesService) {}

    @Get()
    findAll() {
        return this.categoryService.findAll();
    }

    @Post()
    createCategory(@Body() createCatDto: createCategoryDto) {
        return this.categoryService.createOne(createCatDto);
    }
}
