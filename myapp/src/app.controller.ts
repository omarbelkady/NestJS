import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//used to target requests and nested request in regards to yourdomain.com/
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //fired whenever a get request is performed to slash nothing aka /
  @Get()
  //@Header('Content-Type': 'text/html')
  getHello(): {name: string} {
    return { name: '227243 56837'};
  }
}

/*
A controller set for @Controller('/products') and a Get decorator set for @Get('/users) means only a 
products/users would fire that Get method

There is also all the crud decorators: @POST @PUT @DELETE etc.

contructor(private readonly appService: AppService) is actually dependency injection
*/