import { Controller, Get, PreconditionFailedException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    throw new PreconditionFailedException();
    return this.appService.getHello();
  }
}
