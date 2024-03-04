import { Injectable } from "@nestjs/common";
import { DeliverymanDTO } from "./deliveryman.dto";
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { DeliverymanEntity } from "./deliveryman.entity"; 


@Injectable()
export class DeliverymanService {

getUsers(): object{
    return {message: "hellow Admin"}
}
getUsersById(id: string): object{
return {message: "You id is " + id};
}
getUsersByNameAndId(name: string, id: string): object{
    return {message: "You id is " + name +
     " and your id is " + id};

}
async addUser(myobj:DeliverymanDTO):Promise<DeliverymanDTO>{
    console.log(myobj.name);
    return myobj;

}


  
    private users: string[] = [];

addUserss(data: string): string {
    
    this.users.push(data);
    return `User created: ${data}`;
}

getUserss(): string[] {
    return this.users;
}

constructor(@InjectRepository(DeliverymanEntity) private userRepository: Repository<DeliverymanEntity>) {}
async createUser(user: DeliverymanEntity): Promise<DeliverymanEntity> {
return this.userRepository.save(user);
}

async updatePhone(phone: number, updatedPhone: DeliverymanEntity): Promise<DeliverymanEntity> {
await this.userRepository.update(phone, updatedPhone);
return this.userRepository.findOneBy({phone:phone}); }
async deleteUser(id: number): Promise<void> {
await this.userRepository.delete(id);
}
}