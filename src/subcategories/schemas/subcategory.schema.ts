// src/subcategories/schemas/subcategory.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class SubCategory extends Document {
    @Prop({ required: true })
    name: string;
}

export const SubCategorySchema = SchemaFactory.createForClass(SubCategory);
