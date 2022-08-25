import Cookies from 'js-cookie';
import config from "../config";

async function getResponse(to,data={}){
    const token = Cookies.get('token')
    //console.log( window.location.origin);
    // if(!token){
    //
    // }
    data.token = token
    const response = await fetch(config.URL_API+to,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            // 'Access-Control-Allow-Origin':  'http://localhost:3000',
            //  'Access-Control-Allow-Methods': 'POST',
            //  'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        },
        body: JSON.stringify(data)
    })
    const result = await response.json()
    console.log(result)
    if(result.badToken){
        // Cookies.remove('token')
        window.location.replace( window.location.origin)
    }
    if(result.badPage){
        window.location.replace( window.location.origin)
    }
    return result
}
export default getResponse