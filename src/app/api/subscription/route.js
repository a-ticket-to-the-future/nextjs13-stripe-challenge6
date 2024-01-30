// "use client"

import { NextResponse , NextRequest} from "next/server";
import Stripe from "stripe";



// import { NextResponse } from "next/server";
// import Stripe from "stripe";

// const [prices , setPrices] = useState([]);

export async function GET(request){
    const stripe = new Stripe('sk_test_51OJs18DeAQc450QQx1df7rQv298LhrEKKTiTXXL5pzC5Wx4HjTQvA7dt3BiD74S5GMBco6bmk0yxc3T1nu8fW47600DijjICiS');
    const prices = await stripe.prices.list({
        // lookup_keys:[request.body.lookup_keys],
        // expand:[data.product],
    });

    console.log(prices);

    // return NextResponse.json(prices.data.reverse());
}








export async function POST (request) {
    const stripe = new Stripe('sk_test_51OJs18DeAQc450QQx1df7rQv298LhrEKKTiTXXL5pzC5Wx4HjTQvA7dt3BiD74S5GMBco6bmk0yxc3T1nu8fW47600DijjICiS');
    let data = await request.json();
    // let priceId = data.priceId;
    const prices = await stripe.prices.list({
        lookup_keys:[request.body.lookup_keys],
        expand:[data.product],
    })
    const session = await stripe.checkout.sessions.create({
        billing_address_collection:'auto',
        line_items:[
            {
                price:prices.data[0].id,
                quantity:1
            }
        ],
        mode:"subscription",
        success_url:'http://localhost:3000/success',
        cancel_url:'http://localhost:3000/cancel'
    })

    console.log(prices)
    console.log(data);

    return NextResponse.json(session.url);

}