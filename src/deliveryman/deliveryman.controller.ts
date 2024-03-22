
import { Body, Controller, Get, Param, Put, Post, Delete, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { DeliverymanService } from "./deliveryman.service";
import { DeliverymanDTO } from "./deliveryman.dto";
import { DeliverymanEntity } from './deliveryman.entity';



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
    @Post('createuser')
    async createUser(@Body() user: DeliverymanEntity): Promise<DeliverymanEntity> {
    return this.deliverymanService.createUser(user);
  }
  @Put('updateUser/:id')
  async updateUser(@Param('id') id: number, @Body() updatedUser: DeliverymanEntity): Promise<DeliverymanEntity> {
    return this.deliverymanService.updateUser(id, updatedUser);
  }
  @Get('usersWithNullFullName')
  async getUsersWithNullFullName(): Promise<DeliverymanEntity[]> {
    return this.deliverymanService.getUsersWithNullFullName();
  }
  @Delete('deleteUser/:id')
  async deleteUser(@Param('id') id: number): Promise<string> {
    return this.deliverymanService.deleteUser(id);
  }
}
