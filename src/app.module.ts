import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';

@Module({
  imports: [AuthModule, ConfigModule.forRoot()],
  controllers: [AppController],
})
export class AppModule {}
