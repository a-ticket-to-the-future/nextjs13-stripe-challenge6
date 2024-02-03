const { default: Stripe } = require("stripe");


const stripe = new Stripe("sk_test_51OJs18DeAQc450QQx1df7rQv298LhrEKKTiTXXL5pzC5Wx4HjTQvA7dt3BiD74S5GMBco6bmk0yxc3T1nu8fW47600DijjICiS");
const endpointSecret=('whsec_2eddd5c14c95da096c3071ce3145f58d74e9d7e7870a583ababd3f662788aa04');

export default async function handler(req,res){
    if(req.method === "POST"){
        const sessionId = req.body.sessionId;
        const customer = await stripe.customers.retrieve(sessionId);
        const subscription = await stripe.subscriptions.create({
            customer: customer.id,
            items: [{ price:"price_1OaZkIDeAQc450QQAPovVkBA"}],
        });

        await stripe.webhooks.create({
            url: "http://localhost4242",
            events:["checkout.session.completed"],
        });
        
        res.status(200).json({subscription});
    } else {
        res.setHeader("Allow","POST");
        res.status(405).end("Method Not Allowed");
    }

}