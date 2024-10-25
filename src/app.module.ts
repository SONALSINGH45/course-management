// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './categories/categories.module';
import { SubCategoryModule } from './subcategories/subcategories.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjs-demo'), // MongoDB connection
    CategoryModule,
    SubCategoryModule,
  ],
})
export class AppModule { }
