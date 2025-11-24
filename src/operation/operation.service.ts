import { Injectable } from '@nestjs/common';
import { CreateOperationDto } from './dto/create-operation.dto';
import { UpdateOperationDto } from './dto/update-operation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Operation } from './entities/operation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OperationService {
  constructor(
    @InjectRepository(Operation)
    private readonly operationRepository: Repository<Operation>,
  ) {}

  async create(createOperationDto: CreateOperationDto) {
    console.log(createOperationDto);
    const savedOperation = await this.operationRepository.save(
      this.operationRepository.create(createOperationDto),
    );
    console.log(savedOperation);

    return savedOperation;
  }

  async findAll() {
    const allOperations = await this.operationRepository.find();

    return allOperations;
  }

  findOne(id: number) {
    return `This action returns a #${id} operation`;
  }

  update(id: number, updateOperationDto: UpdateOperationDto) {
    return `This action updates a #${id} operation`;
  }

  remove(id: number) {
    return `This action removes a #${id} operation`;
  }
}
