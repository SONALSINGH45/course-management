// src/subcategories/subcategories.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { SubCategoryService } from './subcategories.service';
import { CreateSubCategoryDto } from './dto/create-subcategory.dto';

@Controller('subcategories')
export class SubCategoryController {
    constructor(private readonly subCategoryService: SubCategoryService) { }

    @Post()
    async createSubCategory(@Body() createSubCategoryDto: CreateSubCategoryDto) {
        return this.subCategoryService.createSubCategory(createSubCategoryDto);
    }

    @Get()
    async listSubCategories() {
        return this.subCategoryService.listSubCategories();
    }
}
