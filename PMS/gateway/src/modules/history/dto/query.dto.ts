import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNumberString, IsOptional } from "class-validator";

export enum Action{
    increment = 'increment',
    decrement = 'decrement'
}

export class QueryDto{
    @ApiProperty()
    @IsNumberString()
    page: string;

    @ApiProperty()
    @IsNumberString()
    limit: string;

    @ApiProperty({enum: Action, required: false})
    @IsOptional()
    @IsEnum(Action)
    action?: Action;
}