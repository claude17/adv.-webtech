import { Optional } from "@nestjs/common";
import { IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CustomerDTO{
   
    @Optional()
    customerId: string;

    email: string;
    password: string;
    phone: string;
    name: string;
    address:string
    filename: string;


    
    // @Optional()
    // managers: any;
}
export class loginDTO{
    @IsEmail() email: string;
    @IsNotEmpty() password: string;    
} 