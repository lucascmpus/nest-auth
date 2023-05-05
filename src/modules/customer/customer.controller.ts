import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustormersDto } from './dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) { }

  @Post()
  create(@Body() createCustomerDto: CreateCustormersDto) {
    return this.customerService.create(createCustomerDto);
  }

  @Get()
  getAll() {
    return this.customerService.findAll()
  }
}


