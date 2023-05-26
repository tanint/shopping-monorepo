import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(params?: { name: string }): { message: string } {
    const { name = 'John' } = params ?? {}

    return { message: `Hello API ${name}` };
  }
}
