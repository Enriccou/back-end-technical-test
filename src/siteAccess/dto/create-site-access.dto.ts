import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSiteAccessDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  dateSiteAccess: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  countSiteAccess: number;
}
