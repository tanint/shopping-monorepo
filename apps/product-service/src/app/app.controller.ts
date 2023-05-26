import { Controller, Get, Put, Param, Query } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getData(@Query() query: { name: string } ) {
    return this.appService.getData({ name: query.name });
  }

  @Get('/hello/:name')
  getHelloData(@Param() param: { name: string } ) {
    return this.appService.getData({ name: param.name });
  }

  @Put('/hello/:name')
  updateName(@Param() param: { name: string } ) {
    return this.appService.getData({ name: param.name });
  }
}
