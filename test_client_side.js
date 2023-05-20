const axios = require('axios');
const https = require('https');

async function main() {
    // axios post request
    try {
        const res = await axios.post('https://sjf:20001/event', {
            email: '7707cfab-2385-4f37-a81f-270bfd6e283d',
            event: 'test',
            'event-data': {
                'client-id': 'test'
            }
        }, {
            httpsAgent: new https.Agent({
                rejectUnauthorized: false
            })
        });

        console.log(res.data);
    } catch (error) {
        console.error(error);
    }
}

main();