// import { Controller, Get, Param } from '@nestjs/common';
// import { UserService } from './user.service';

// @Controller('user') //  значение в скобках - по-сути адрес
// export class UserController {
//   constructor(private readonly userService: UserService) {}

//   @Get()
//   getAll() {
//     return this.userService.getAll();
//   }

//   @Get(':id')
//   getOne(@Param('id') userid: string) {
//     return this.userService.getOneById(userid);
//   }
// }
