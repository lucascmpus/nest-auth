import { IsString } from 'class-validator';
import { Customer } from '../entities/customer.entity';

export class CreateCustormersDto extends Customer {
  @IsString()
  name: string;

  @IsString()
  gender: string;

  @IsString()
  address: string;
}
