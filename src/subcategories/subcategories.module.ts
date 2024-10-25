// src/subcategories/subcategories.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubCategoryService } from './subcategories.service';
import { SubCategoryController } from './subcategories.controller';
import { SubCategory, SubCategorySchema } from './schemas/subcategory.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: SubCategory.name, schema: SubCategorySchema }]),
    ],
    controllers: [SubCategoryController],
    providers: [SubCategoryService],
})
export class SubCategoryModule { }
