import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Validate,
} from 'class-validator';

import { ClientType } from '@prisma/client';
import { DocumentValidator } from 'src/decorators/document.validator';
import { RemoveMask } from 'src/decorators/remove-mask';

export class CreateClientDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @RemoveMask()
  @Validate(DocumentValidator)
  document: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  phone: string;

  @ApiProperty()
  @IsEnum(ClientType)
  @IsNotEmpty()
  client_type: ClientType;
}
