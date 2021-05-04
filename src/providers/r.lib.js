/** created by r
 *  04-05-21
 *  21:41
 */

export const request = ( url, method, data = null ) => new Promise( ( rslv, rjct ) => {
    const http = new XMLHttpRequest();
    http.open( method, url );
    
    http.onreadystatechange = function() {
        if( this.readyState === 4 ) {            
          if (http.status  < 400) {
            rslv( JSON.parse( this.responseText ) );            
          } else {
              rjct( this.statusText )
          }
        }
    }   

    if ( data )
        http.send( data );
    else
        http.send();
});
