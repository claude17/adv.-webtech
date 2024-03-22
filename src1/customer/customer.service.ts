import { Injectable } from "@nestjs/common";
import { CustomerDTO,loginDTO } from "./customer.dto";
import { InjectRepository } from "@nestjs/typeorm";
import {  Repository } from "typeorm";
import { CustomerEntity } from "./customer.entity";
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { promises } from "dns";
import { ProductEntity } from "src/product/product.entity";




@Injectable()
export class CustomerService {

    constructor(
        @InjectRepository(CustomerEntity)
        private customerRepo: Repository<CustomerEntity>,
        @InjectRepository(ProductEntity)
        private readonly productRepo: Repository<ProductEntity>,
        //private jwtService:JwtService
    ) {}

    // getUsers(): object{
    //     return {message: "hellow Admin"}
    // }


    // async register(myobj:DeliverymanDTO):Promise<DeliverymanDTO>{
    //     return myobj;

    // }
    getUsers(): object {
        return { message: "hello Customer" }
    }

    async login(customerdata:CustomerDTO)
    {
        const customer = 
        await this.customerRepo.findOneBy({email:customerdata.email});
        const result = 
        await bcrypt.compare(customerdata.password, customer.password);
        if(result)
        {
            return true;
        }
        else{
            return false;
        }
    }

    async getprofile(email:string):Promise<CustomerEntity> {
        return this.customerRepo.findOneBy({email:email})
    }

    async updateprofile(email:string, customerdata:CustomerDTO):Promise<CustomerEntity>
    {
        await this.customerRepo.update({email:email},customerdata);
        return await this.customerRepo.findOneBy({email:email});
    
        
        
        
    }

    async deleteprofile(email:string) {
        let res = await this.customerRepo.delete({email:email});
        if(res)
        {
            return "profile deleted successfully";
        }
    }

    async getallproduct(): Promise<ProductEntity[]> {
        return this.productRepo.find();
      }

    async addCustomer(myobj: CustomerEntity): Promise<CustomerEntity>
    {
        return await this.customerRepo.save(myobj);
    }


    async findOne( logindata:loginDTO): Promise<any> {
        return await this.customerRepo.findOneBy({email:logindata.email});
    }


}