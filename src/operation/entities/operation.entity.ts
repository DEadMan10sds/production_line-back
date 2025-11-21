import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export type OperationStep = {
  id: number;
  name: string;
  elementKey: string;
};

@Entity({ name: 'Operation' })
export class Operation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column({ type: 'jsonb' })
  features: OperationStep[];
}
