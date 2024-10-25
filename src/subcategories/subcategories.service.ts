// src/subcategories/subcategories.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SubCategory } from './schemas/subcategory.schema';
import { CreateSubCategoryDto } from './dto/create-subcategory.dto';

@Injectable()
export class SubCategoryService {
    constructor(@InjectModel(SubCategory.name) private subCategoryModel: Model<SubCategory>) { }

    async createSubCategory(createSubCategoryDto: CreateSubCategoryDto): Promise<SubCategory> {
        const createdSubCategory = new this.subCategoryModel(createSubCategoryDto);
        return createdSubCategory.save();
    }

    async listSubCategories(): Promise<SubCategory[]> {
        return this.subCategoryModel.find().exec();
    }
}
