import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly app: AppService) {}

  @Get()
  hello(): string {
    return this.app.getHello();
  }
}
