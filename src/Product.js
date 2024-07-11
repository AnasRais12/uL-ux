import { loadStripe } from "@stripe/stripe-js";
export async function Product({lineItems}){

    let stripepromise = null
    let getstripe=()=>{
        if(!stripepromise){
            stripepromise =loadStripe(process.env.NEXT_PUBLIC_API_KEY)
        }
        return stripepromise
    }
    const stripe = await getstripe()
    await stripe.redirectToProduct({
        mode:"payment",
        lineItems,
        successUrl:`${window.location.origin}?session_id={PRODUCT_SESSION_ID}`,
        cancelUrl: window.location.origin
    })


}