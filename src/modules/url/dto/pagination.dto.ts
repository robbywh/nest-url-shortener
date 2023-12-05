import { Transform } from 'class-transformer';
import { IsInt, IsOptional, Min } from 'class-validator';

export class PaginationDto {
  @IsInt()
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @Min(1)
  page?: number;

  @IsInt()
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @Min(1)
  limit?: number;
}
