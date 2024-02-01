// import { request } from "http";
import { NextResponse } from "next/server";
import Stripe from "stripe";


export async function POST (request) {
    

    const stripe = new Stripe('sk_test_51OJs18DeAQc450QQx1df7rQv298LhrEKKTiTXXL5pzC5Wx4HjTQvA7dt3BiD74S5GMBco6bmk0yxc3T1nu8fW47600DijjICiS');

    // const {userId} = await request.json();

    // const subscription = await getSubscription({userId});
    //ここから
    // const {session_id} = request.json();
    // console.log(session_id);
    //ここまで
    alert("hello")
    console.log("request is here");

    const {session_id} = await request.json();
    // const {session_id} = data.session_id;
    console.log(session_id);

    const checkoutSession = await stripe.checkout.sessions.retrieve(session_id);

    const returnUrl = "http://localhost:3000";

    const portalSession = await stripe.billingPortal.sessions.create({
        customer : checkoutSession.customer,
        return_url: returnUrl
    });

    console.log(portalSession);

    return new NextResponse(JSON.stringify(portalSession.url))
    // .redirect(303,portalSession.url); 

}