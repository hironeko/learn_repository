import { IsNotEmpty, IsString, IsEmail, IsEmpty } from 'class-validator'

export class CreateItemDTO {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    body: string;

    @IsEmpty()
    @IsString()
    deletePassword: string;
}