import { Column } from 'typeorm';
import { BaseEntity } from './base.entity';

export abstract class DescriptedEntity extends BaseEntity {
  @Column({ nullable: true })
  description: string | null;

  constructor(name: string, description: string | null) {
    super(name);
    this.description = description;
  }
}
