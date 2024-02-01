// import { request } from "http";
import { NextResponse } from "next/server";
import Stripe from "stripe";


export async function POST (request) {
    
    try{
    const stripe = new Stripe('sk_test_51OJs18DeAQc450QQx1df7rQv298LhrEKKTiTXXL5pzC5Wx4HjTQvA7dt3BiD74S5GMBco6bmk0yxc3T1nu8fW47600DijjICiS');

    // const {userId} = await request.json();

    // const subscription = await getSubscription({userId});
    //ここから
    // const {session_id} = request.json();
    // console.log(session_id);
    //ここまで
    

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
    console.log(portalSession.url)


    //こっちはportalSession.urlが出力される
    return new NextResponse(JSON.stringify({url:portalSession.url}),{
        status:200,
        headers:{
            "Content-Type":"application/json"
        }
    });
} catch (error) {
    console.log(error);

    return new NextResponse(JSON.stringify({error:error.message}),{
        status:500,
        headers:{
            "Content-Type":"application/json"
        }
    });

}
    // .redirect(303,portalSession.url); 
    // return NextResponse.redirect(portalSession.url);
    //こっちはリダイレクトされないしエラーになる
}