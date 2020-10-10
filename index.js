require('dotenv').config()
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

    axios.get(`https://api.1up.health/fhir/dstu2/Patient/1/$everything`, {headers})
        .then(response => {
            console.log(response.data)
        })
        .catch(err => console.log(err))

    
    readline.close();
  });
