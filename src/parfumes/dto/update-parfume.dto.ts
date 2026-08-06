import { PartialType } from '@nestjs/mapped-types';
import { CreateParfumeDto } from './create-parfume.dto';

export class UpdateParfumeDto extends PartialType(CreateParfumeDto) {}
