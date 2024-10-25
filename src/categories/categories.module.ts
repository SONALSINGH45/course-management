// src/categories/categories.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryService } from './categories.service';
import { CategoryController } from './categories.controller';
import { Category, CategorySchema } from './schemas/category.schema';
import { SubCategory, SubCategorySchema } from 'src/subcategories/schemas/subcategory.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Category.name, schema: CategorySchema },
            { name: SubCategory.name, schema: SubCategorySchema },
        ]),
    ],
    controllers: [CategoryController],
    providers: [CategoryService],
})
export class CategoryModule { }
