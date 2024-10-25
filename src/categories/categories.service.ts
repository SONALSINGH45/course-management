// src/categories/categories.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from './schemas/category.schema';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { SubCategory } from 'src/subcategories/schemas/subcategory.schema';

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel(Category.name) private categoryModel: Model<Category>,
        @InjectModel(SubCategory.name) private subCategoryModel: Model<SubCategory>,
    ) { }

    async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
        const createdCategory = new this.categoryModel(createCategoryDto);
        return createdCategory.save();
    }

    async updateCategory(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
        return this.categoryModel.findByIdAndUpdate(id, updateCategoryDto, { new: true });
    }

    async findCategoryById(id: string): Promise<Category> {
        return this.categoryModel.findById(id).populate('subCategories').exec();
    }

    async listCategories(): Promise<Category[]> {
        return this.categoryModel.find().populate('subCategories').exec();
    }

    async listCategoriesWithSubCategoryCount(): Promise<any[]> {
        return this.categoryModel.aggregate([
            {
                $lookup: {
                    from: 'subcategories', // Refer to the subcategories collection
                    localField: 'subCategories',
                    foreignField: '_id',
                    as: 'subCategoryList',
                },
            },
            {
                $project: {
                    name: 1,
                    subCategoryCount: { $size: '$subCategoryList' },
                },
            },
        ]);
    }
}
