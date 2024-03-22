import { Module } from "@nestjs/common";
import { CustomerController } from "./customer.controller";
import { CustomerService } from "./customer.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerEntity } from "./customer.entity";
import { AuthService } from "./auth/auth.service";
import { ProductEntity } from "src/product/product.entity";




@Module({
    imports: [TypeOrmModule.forFeature([CustomerEntity,ProductEntity]),],
    controllers: [CustomerController],
    providers: [CustomerService],
    exports: [CustomerService],
  })
  export class CustomerModule {}