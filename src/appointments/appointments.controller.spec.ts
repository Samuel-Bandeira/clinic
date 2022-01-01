import { Test, TestingModule } from '@nestjs/testing';
import { ApointmentsController } from './appointments.controller';
import { ApointmentsService } from './appointments.service';

describe('ApointmentsController', () => {
  let controller: ApointmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApointmentsController],
      providers: [ApointmentsService],
    }).compile();

    controller = module.get<ApointmentsController>(ApointmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
