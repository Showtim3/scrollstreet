import { Test, TestingModule } from '@nestjs/testing';
import { RazorPayController } from './razor-pay.controller';

describe('RazorPay Controller', () => {
  let controller: RazorPayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RazorPayController],
    }).compile();

    controller = module.get<RazorPayController>(RazorPayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
