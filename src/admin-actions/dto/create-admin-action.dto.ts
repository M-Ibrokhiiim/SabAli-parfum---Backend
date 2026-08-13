import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  username!: string;

  @IsNotEmpty()
  @IsString()
  password!: string;
}

export class CreateProductDto {

  image?: string | string[];

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
  capacity!: string | number;

  @IsNotEmpty()
  @IsString()
  category!: 'mens' | 'womens';

  @IsNotEmpty()
  @IsString()
  description!: string;
  
  starred?: boolean;
}
