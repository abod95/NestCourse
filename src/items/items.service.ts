import { Injectable } from '@nestjs/common';
import {Item} from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {

constructor(@InjectModel('Item') private itemModel: Model<Item>){}
// private readonly items: Item[]= [
//     {
//         id: "321321",
//         name: "item one",
//         description: "this is item one",
//         qty: 100
//     },
//     {
//         id: "4234234",
//         name: "item two",
//         description: "this is item two",
//         qty: 543
//     },
// ];

async findAll(): Promise<Item[]>{
    return await this.itemModel.find();
}

async findOne(id: string): Promise<Item>{
    return await this.itemModel.findOne({_id : id});
}

async create(item: Item) : Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
}

async delete(id: string) : Promise<Item>{
    return await  this.itemModel.findByIdAndRemove(id);
}

async update(item: Item, id: string): Promise<Item>{
    return await this.itemModel.findByIdAndUpdate(id, item, {new : true});
}
}
