import { Controller, Get, Post, Put, Body, Param, Delete } from '@nestjs/common';
import {CreateItemDto} from './dto/create-item.dto';
import {ItemsService} from './items.service';
import {Item} from './interfaces/item.interface'


@Controller('items')
export class ItemsController {

    constructor(private itemsService: ItemsService){}

    @Get()
    findAll(): Promise<Item[]> {
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Item> {
        return this.itemsService.findOne(id);
    }

    @Post()
    create(@Body() createitemdto: CreateItemDto): Promise<Item> {
        return this.itemsService.create(createitemdto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Item> {
        return this.itemsService.delete(id);        
    }

    @Put(':id')
    update(@Body() updateitemdto: CreateItemDto, @Param('id') id): Promise<Item>{
        return this.itemsService.update(updateitemdto, id);
    }
}
