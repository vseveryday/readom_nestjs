import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userid: string;
  // @Column()
  // recordDateCreate: string;
  // @Column()
  // RecordUserNameCreate: string;
  // @Column()
  // RecordDateUpdate: Date;
  @Column()
  surname: string;
  @Column()
  name: string;
  @Column()
  middlename: string;
  // @Column()
  // email: string;
  // @Column()
  // password: string;
  // @Column()
  // salt: string;
  // @Column()
  // accountStatus: number;
  // @Column()
  // currencyId: string;
  // @Column()
  // isRequestPassword: boolean;
  // @Column()
  // isRequestEmail: string;
  // @Column()
  // photo: Blob;
  // @Column()
  // isRequestRemindPassword: boolean;
  // @Column()
  // isDebug: boolean;
}
