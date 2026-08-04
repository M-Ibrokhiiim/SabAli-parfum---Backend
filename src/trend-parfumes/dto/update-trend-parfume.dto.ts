import { PartialType } from '@nestjs/mapped-types';
import { CreateTrendParfumeDto } from './create-trend-parfume.dto';

export class UpdateTrendParfumeDto extends PartialType(CreateTrendParfumeDto) {}
