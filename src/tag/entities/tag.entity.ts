import { Template } from 'src/templates/entities/template.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Tag' })
export class Tag {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  type: string;

  @Column('text')
  serial: string;

  @ManyToOne(() => Template, (template) => template.tag)
  template: Template;
}
