const https = require('https');
url = `https://api.qrserver.com/v1/create-qr-code/?format=eps?size=150x150&data=Example`;

https.get(url, (response) => {
    let data = ''

    response.on('data', (chunk) =>{
        data = data + chunk;
    });

    response.on('end', () =>{
        //console.log(data);
        console.log("seviselim mi ada?");
    });
}).on('error', (err) =>{
    console.log(`Error: ${err.message}`);
});