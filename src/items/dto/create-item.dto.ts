import { Document } from 'mongoose';

export class CreateItemDto extends Document{
    name: string;
    description: string;
    qty: number;
}