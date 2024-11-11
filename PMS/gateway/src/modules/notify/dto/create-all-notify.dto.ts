import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateForAllNotifyDto {
    @ApiProperty({example: 'Xatolar to`g`rlandi ⚙️'})
    @IsString()
    @IsNotEmpty()
    message: string;
}
