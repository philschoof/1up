const axios = require('axios');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
readline.question('Access Token Please \n', token => {
    if(!token) {
        console.log('Try with a token')
        readline.close()
        return;
    }

    const headers = {
        'Authorization': `Bearer ${token}`
    }

    axios.get(`https://api.1up.health/fhir/dstu2/Patient/237153/$everything`, {headers})
        .then(({data}) => {
            const total = data.total;
            const entry = data.entry;

            console.log(`Total: ${total}`)
            console.log(`Entry: ${entry}`)
        })
        .catch(err => console.log(err))


    readline.close();
});
