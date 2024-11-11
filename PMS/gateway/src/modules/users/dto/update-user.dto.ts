import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends(CreateUserDto) {
    @ApiProperty({example: '998909009090'})
    phone: string;

    @ApiProperty({example: '12345'})
    password: string;
}
