import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateCustormersDto } from './dto/create-customer.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createCustomerDto: CreateCustormersDto): Promise<any> {
    const data: Prisma.CustomerCreateInput = {
      ...createCustomerDto,
    };

    const createdCustomer = await this.prisma.customer.create({ data });

    return createdCustomer;
  }

  async findAll(): Promise<Customer[]> {
    return await this.prisma.customer.findMany()
  }
}
