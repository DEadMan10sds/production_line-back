import {
  IsArray,
  IsNumber,
  IsPositive,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { OperationStep } from '../entities/operation.entity';
import { Type } from 'class-transformer';

class OperationStepClass {
  @IsString()
  name: string;

  @IsNumber()
  @IsPositive()
  id: number;

  @IsString()
  elementKey: string;
}

export class CreateOperationDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OperationStepClass)
  features: OperationStep[];
}
