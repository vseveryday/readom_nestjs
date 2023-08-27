import {
  Body,
  Controller,
  Header,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';

@Controller('test-controller')
export class TestController {
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create() {
    return 'test worked';
  }
}
