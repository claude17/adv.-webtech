
import { Body, Controller, Get, Param, Post, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { DeliverymanService } from "./deliveryman.service";
import { DeliverymanDTO } from "./deliveryman.dto";



@Controller('/deliveryman')
export class DeliverymanController{
    constructor(private readonly deliverymanService: DeliverymanService){}
    @Get()
    getUsers(): object{
        return this.deliverymanService.getUsers();
    }
   
    @Post('adduserss')
    addUserss(@Body() data: string){
        return this.deliverymanService.addUserss(data);
    }
    @Get('getusers')
    getUserss() {
        return this.deliverymanService.getUserss();
    }
}