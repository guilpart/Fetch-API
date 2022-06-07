import { useEffect, useState} from "react";

export  function Recup (){
    const [dts, setDts] = useState();
    useEffect(() => {
        const req = new Request('https://api.coingecko.com/api/v3/exchange_rates');
        fetch(req)
            .then(resp => {
                if (resp.status === 200) {
                    return resp.json();
                } else {
                    throw Error(resp)
                }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////                
                /*  if (!resp.ok) {                                                         ///////////////////
                    const error =  Headers.Erreur;                                         ///////////////////
                    console.log(resp)                                                      ///////////////////
                    return Promise.reject(error);                                          ///////////////////
                } */                                                                       ///////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////                 
            })
            .then(resp => {
                setDts(resp)
            })
            .catch(function (error) {
                console.log('Il y a eu un problème avec l\'opération fetch: ' + error.response);
            })
    }, []);

    return [dts];
};