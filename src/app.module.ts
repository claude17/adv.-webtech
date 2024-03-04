import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeliverymanModule } from './deliveryman/deliveryman.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [DeliverymanModule, TypeOrmModule.forRoot(
    { type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'admin',
    database: 'test',
    autoLoadEntities: true,
    synchronize: true,
    } ),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}