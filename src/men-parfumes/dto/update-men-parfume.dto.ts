import { PartialType } from '@nestjs/mapped-types';
import { CreateMenParfumeDto } from './create-men-parfume.dto';

export class UpdateMenParfumeDto extends PartialType(CreateMenParfumeDto) {}
