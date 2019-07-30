import {Module} from "@nestjs/common";
import {RazorPayController} from "./razor-pay.controller";
import {RazorPayService} from "./razor-pay.service";

@Module({
    controllers: [RazorPayController],
    providers: [RazorPayService],
})

export class RazorPayModule {

}
