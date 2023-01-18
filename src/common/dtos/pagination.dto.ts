
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {

    @IsOptional()
    @IsPositive()
    @Type( () => Number ) // seria igual que el enableImolicitConversions: true
    limit?: number;

    @IsOptional()
    @Min(0)
    @Type( () => Number )
    offset?: number;
}