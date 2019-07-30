import {Controller, Get, Post} from '@nestjs/common';
import {RazorPayService} from "./razor-pay.service";

@Controller('razor-pay')
export class RazorPayController {
    constructor(private readonly razorPayService: RazorPayService) {
    }

    @Get()
    getHello(): string {
        return this.razorPayService.getHello();
    }
}
