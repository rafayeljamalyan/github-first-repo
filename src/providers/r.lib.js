/** created by r
 *  04-05-21
 *  21:41
 */

export const request = ( url, method, data = null ) => new Promise( async ( rslv, rjct ) => {
    try {
        const rsp = await fetch( url, { method, data });
        const rslt = await rsp.json();
        rslv( rslt );
    }
    catch( err ) {
        rjct( err );
    }
});
