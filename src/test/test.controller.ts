import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';

@Controller('test') //  значение в скобках - по-сути адрес
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  getAll() {
    return this.testService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.testService.getById(id);
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProductDto: CreateTestDto) {
    return this.testService.create(createProductDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'Remove' + id;
  }
  @Put(':id')
  update(@Body() updateTestDto: UpdateTestDto, @Param('id') id: string) {
    return 'Update ' + id;
  }
}
