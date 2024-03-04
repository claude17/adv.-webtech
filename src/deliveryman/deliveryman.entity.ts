import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, CreateDateColumn } from 'typeorm';

@Entity("deliveryman")
export class DeliverymanEntity {
  
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  fullName: string | null;

  @Column({ type: 'bigint', unsigned: true })
  phone: number;

  @BeforeInsert()
  generateId() {
    // timestramp and custom data
    this.Id = Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 1000);
  }
   
  }

