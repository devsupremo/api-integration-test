import axios from 'axios';
import consola from 'consola';

const api = 'https://api.pipedrive.com/api/v1/deals/';

const getOrders = async () => {
  try {
    const deals = await axios.get(api, {
      params: {
        api_token: process.env.PIPEDRIVE_API_KEY,
        status: 'won',
      },
    });

    return deals.data.data;
  } catch (error) {
    consola.error(error.message);
    return error.message;
  }
};

export default getOrders;
