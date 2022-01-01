import { Module } from '@nestjs/common';
import { ApointmentsService } from './appointments.service';
import { ApointmentsController } from './appointments.controller';

@Module({
  controllers: [ApointmentsController],
  providers: [ApointmentsService]
})
export class ApointmentsModule {}
