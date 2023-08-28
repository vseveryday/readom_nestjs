// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { User } from './entity/user.entity';

// @Injectable()
// export class UserService {
//   constructor(
//     @InjectRepository(User)
//     private usersRepository: Repository<User>,
//   ) {}

//   getAll(): Promise<User[]> {
//     return this.usersRepository.find();
//   }

//   getOneById(userid: string): Promise<User | null> {
//     return this.usersRepository.findOneBy({ userid });
//   }

//   async remove(id: number): Promise<void> {
//     await this.usersRepository.delete(id);
//   }
// }
