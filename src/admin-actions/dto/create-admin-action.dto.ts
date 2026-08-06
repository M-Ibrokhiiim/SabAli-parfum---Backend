import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  username!: string;

  @IsNotEmpty()
  @IsString()
  password!: string;
}

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name!: string;
  
  @IsNotEmpty()
  @IsString()
  brand!: string;

  @IsString()
  @IsNotEmpty()
  price!: number;

  @IsNotEmpty()
  @IsString()
  description!: string;

  @IsNotEmpty()
  @IsString()
  image!: string;

  @IsNotEmpty()
  @IsString()
  category!: 'mens' | 'womens';
}
