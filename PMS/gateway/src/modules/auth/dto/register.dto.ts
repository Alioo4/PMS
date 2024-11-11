import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsPhoneNumber, IsString } from "class-validator"

export class signupAuthDto {
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
