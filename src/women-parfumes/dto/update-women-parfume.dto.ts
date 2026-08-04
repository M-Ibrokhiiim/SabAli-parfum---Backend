import { PartialType } from '@nestjs/mapped-types';
import { CreateWomenParfumeDto } from './create-women-parfume.dto';

export class UpdateWomenParfumeDto extends PartialType(CreateWomenParfumeDto) {}
