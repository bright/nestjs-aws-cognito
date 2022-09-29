import { IsString } from 'class-validator';

export class AuthenticateRequestDto {
  @IsString()
  name: string;

  @IsString()
  password: string;
}
