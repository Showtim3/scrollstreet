import {Injectable} from '@nestjs/common';
import * as Razorpay from "razorpay";


const instance = new Razorpay({
    key_id: 'rzp_test_dD7ZhZ5gTPeleN',
    key_secret: 'XYxgoD21kVxaUqYAOLVg7MI5'
})

@Injectable()
export class RazorPayService {

    getHello() {
        instance.payments.all({
            from: '2016-08-01',
            to: '2016-08-20'
        }).then((response) => {
            // handle success
            console.log(response)
        }).catch((err) => {
            console.log(err)
            // handle error
        })
        return "helloooo";
    }
}
