
import { IsEmail, IsNotEmpty, IsString } from "class-validator"


export class RegisterDTO {
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    password: string

    @IsNotEmpty()
    @IsString()
    repeatPassword: string
}
