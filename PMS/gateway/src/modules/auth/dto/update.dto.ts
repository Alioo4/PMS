import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsPhoneNumber, IsString, IsUUID } from "class-validator"

export class updateAuthDto {
    @ApiProperty({example: 'uuid'})
    userId: string
    
    @ApiProperty({example: '+998990099090'})
    @IsString()
    @IsPhoneNumber('UZ')
    @IsNotEmpty()
    phone: string;

    @ApiProperty({example: 'jony007'})
    @IsNotEmpty()
    @IsString()
    password: string;
}