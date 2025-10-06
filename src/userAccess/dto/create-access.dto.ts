import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty } from 'class-validator';

export class CreateAccessDto {
  @ApiProperty()
  @IsNotEmpty()
  userID: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  dateAccess: string;
}
