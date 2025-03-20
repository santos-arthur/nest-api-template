import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  token: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  userId: number;

  @Column('timestampz')
  @CreateDateColumn({ name: 'create_at' })
  createdAt: Date;

  @Column({ name: 'expirated_at', nullable: true })
  expiratedAt: Date | null;

  @Column({ name: 'revoked_at', nullable: true })
  revokedAt: Date | null;

  constructor(token: string, userId: number, expiratedAt: Date) {
    this.token = token;
    this.userId = userId;
    this.expiratedAt = expiratedAt;
  }
}
