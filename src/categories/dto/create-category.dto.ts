// src/categories/dto/create-category.dto.ts
export class CreateCategoryDto {
    readonly name: string;
    readonly subCategories: string[]; // Array of SubCategory IDs
}
