import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SchedulerDto } from './scheduler.dto';
import { SchedulerService } from './scheduler.service';

@Controller('scheduler')
export class SchedulerController {

    constructor(private schedulerService: SchedulerService) {}

    @Get()
    getAll() {
        return this.schedulerService.findAll();
    }

    @Post('/')
    createOne(@Body() dto: SchedulerDto) {
        return this.schedulerService.create(dto);
    }

    @Patch('/:id')
    removeMeal(@Param() id: string, @Body() dto: SchedulerDto) {
        return this.schedulerService.removeMeal(id, dto);
    }
}
