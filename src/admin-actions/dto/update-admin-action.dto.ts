import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-admin-action.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {}
