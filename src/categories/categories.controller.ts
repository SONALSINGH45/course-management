// src/categories/categories.controller.ts
import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { CategoryService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @Post()
    async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
        return this.categoryService.createCategory(createCategoryDto);
    }

    @Put(':id')
    async updateCategory(
        @Param('id') id: string,
        @Body() updateCategoryDto: UpdateCategoryDto,
    ) {
        return this.categoryService.updateCategory(id, updateCategoryDto);
    }

    @Get(':id')
    async findCategoryById(@Param('id') id: string) {
        return this.categoryService.findCategoryById(id);
    }

    @Get()
    async listCategories() {
        return this.categoryService.listCategories();
    }

    @Get('subcategory-count')
    async listCategoriesWithSubCategoryCount() {
        return this.categoryService.listCategoriesWithSubCategoryCount();
    }
}
