import { Module } from "@nestjs/common";
import {DeliverymanController } from "./deliveryman.controller";
import { DeliverymanService } from "./deliveryman.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DeliverymanEntity } from "./deliveryman.entity";



@Module({
    imports: [TypeOrmModule.forFeature([DeliverymanEntity]),],
    controllers: [DeliverymanController],
    providers: [DeliverymanService],
  })
  export class DeliverymanModule {}