import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';

@Injectable()
export class TestService {
  private test = [];
  getAll() {
    return this.test;
  }

  getById(id: string) {
    return this.test.find((item) => item.id === id);
  }

  create(testDto: CreateTestDto) {
    this.test.push({
      ...testDto,
      id: Date.now().toString(),
    });
  }
}
