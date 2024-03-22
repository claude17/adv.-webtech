import { Body, Controller, Get, Param, Post, Query, UsePipes, ValidationPipe, HttpException, HttpStatus,Session, UseGuards, Put, Delete } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { CustomerDTO } from "./customer.dto";
import { SessionGuard } from './session.guard';
import session from "express-session";
import { CustomerEntity } from "./customer.entity";
import { ProductEntity } from "src/product/product.entity";



@Controller('/customer')
export class CustomerController{
    constructor(private readonly customerService: CustomerService){}
    // @Get()
    // getUsers(): object{
    //     return this.deliverymanService.getUsers();
    // }
    
    // @Post('deliverymanregister')
    // @UsePipes(new ValidationPipe)
    // async register(@Body() myobj: DeliverymanDTO): Promise<DeliverymanDTO>{
    //     return this.deliverymanService.register(myobj);
    // }


    @Get()
    getUsers(): object {
        return this.customerService.getUsers();
    }

    @Post('login')
    async login(@Body() customerdata:CustomerDTO, 
    @Session() session)
    {
        if(await this.customerService.login(customerdata))
        {
            session.email=customerdata.email;
            return "logged in successfully with session";
        }
        else
        {
            throw new HttpException('UnauthorizedException', 
            HttpStatus.UNAUTHORIZED); 

        }
    }

    @Get('profile')
    @UseGuards(SessionGuard)
    async getprofile(@Session() session):Promise<CustomerEntity> {
        return this.customerService.getprofile(session.email);
    }

    @Put('updateprofile')
    @UseGuards(SessionGuard)
    async updateprofile(@Session() session,@Body() customer:CustomerDTO):Promise<CustomerEntity> {
        return this.customerService.updateprofile(session.email,customer);
    }

    @Delete('deleteprofile')
    @UseGuards(SessionGuard)
    async deleteprofile(@Session() session){
        return this.customerService.deleteprofile(session.email);
    }

    @Get('product')
    async getallproduct():Promise<ProductEntity[]> {
        return this.customerService.getallproduct();
    }
    

}