import { Document } from 'mongoose';

export class CreateItemDto extends Document{
    id?: string;
    name: string;
    description: string;
    qty: number;
}