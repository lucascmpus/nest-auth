import { Module } from '@nestjs/common';
import { CustomerModule } from './modules/customer/customer.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PrismaModule, UserModule, CustomerModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
