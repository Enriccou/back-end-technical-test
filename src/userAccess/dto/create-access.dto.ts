import { IsDate, IsDateString, IsMilitaryTime, IsNotEmpty } from "class-validator";

export class CreateAccessDto {

    @IsNotEmpty()
    userID: string;

    @IsNotEmpty()
    @IsDateString()
    dateAccess: string;

}
