import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MealDto } from './meal.dto';
import { MealsService } from './meals.service';

@Controller('meals')
export class MealsController {
  constructor(private mealsService: MealsService) {}

  @Get()
  findAll() {
    return this.mealsService.findAll();
  }

  @Post('/')
  create(@Body() meal: MealDto) {
    return this.mealsService.createOne(meal);
  }

  @Get('/:id')
  findOne(@Param() id: string) {

    return this.mealsService.findOne(id);
  }

  @Patch('/:id')
  updateOne(@Param() id: string, @Body() dto: MealDto ) {
    return this.mealsService.updateOne(id, dto);
  }

  @Delete('/:id')
  deleteMeal(@Param() id: string) {
    return this.mealsService.remove(id);
  }
}
