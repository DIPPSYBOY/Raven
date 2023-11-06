import fetch from 'node-fetch';

const getLocals = async (term, location, sort_by) => {
    const baseUrl = 'https://api.yelp.com/v3/businesses/search';
    const query = `?location=${location}&term=${term}&sort_by=${sort_by}&limit=20`;
    const url_to_pass = baseUrl + query;

    const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer PkX_mTYBXa46hVBO-TVzNTRdxJvhB2z1O3cAAwV6ffV4e82RVpHDFU-cTFZyT2o8l78ldz1XoUcDApUKVNVdhlLBLdOjYk7za7BMefzuHGmw9D6tWilHslc-2wBJZXYx'
        }
    };

    try {
        const response = await fetch(url_to_pass, options);
        if (response.ok){
            const jsonResponse = await response.json();
            return jsonResponse.businesses
        }
    }catch(error){
        console.log(error);
    }
}

export default getLocals;