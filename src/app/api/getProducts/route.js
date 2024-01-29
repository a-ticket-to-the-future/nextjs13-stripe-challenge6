import { data } from "autoprefixer";
import Stripe from "stripe";



export async function GET(request){
    const stripe = new Stripe('sk_test_51OJs18DeAQc450QQx1df7rQv298LhrEKKTiTXXL5pzC5Wx4HjTQvA7dt3BiD74S5GMBco6bmk0yxc3T1nu8fW47600DijjICiS');
    const prices = await stripe.prices.list({
        // lookup_keys:[req.body.lookup_keys],
        // expand:[data.product],
    });

    console.log(prices);
}