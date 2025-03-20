import { Column, Entity, Unique } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { BaseEntity } from '../../../entities/base.entity';

@Entity()
export class User extends BaseEntity {
  @Column()
  @Unique('email', ['email'])
  email: string;

  @Column({ select: false })
  password: string;

  constructor(name: string, email: string, password: string) {
    super(name);
    this.email = email;
    this.password = password;
  }

  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async checkPassword(password: string) {
    return await bcrypt.compare(password, this.password);
  }
}
