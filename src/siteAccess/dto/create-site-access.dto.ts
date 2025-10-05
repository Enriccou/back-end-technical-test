import { IsDateString, IsEnum, IsNotEmpty, IsNumber } from "class-validator";

export class CreateSiteAccessDto {

    @IsNotEmpty()
    @IsDateString()
    dateSiteAccess: string;

    @IsNotEmpty()
    @IsNumber()
    countSiteAccess: number;

}
