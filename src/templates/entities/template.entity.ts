import { Tag } from 'src/tag/entities/tag.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Template' })
export class Template {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  template: string;

  @OneToMany(() => Tag, (tag) => tag.template)
  tag: Tag;
}
