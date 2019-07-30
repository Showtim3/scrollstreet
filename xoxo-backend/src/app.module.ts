import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {RazorPayModule} from "./razor-pay/razor-pay.module";

@Module({
  imports: [RazorPayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
