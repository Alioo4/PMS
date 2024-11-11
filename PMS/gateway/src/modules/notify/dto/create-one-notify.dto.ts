import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateForOneNotifyDto {
    @ApiProperty({example: 'Xatolar to`g`rlandi ⚙️'})
    @IsString()
    @IsNotEmpty()
    message: string;

    @ApiProperty({example: 'uuid'})
    @IsUUID()
    @IsNotEmpty()
    userId: string;
}
