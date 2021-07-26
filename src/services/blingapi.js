import axios from 'axios';
import consola from 'consola';

const api = 'https://bling.com.br/Api/v2/pedido/json/';

const saveOrder = async (orderXml) => {
  try {
    const order = await axios.post(
      api,
      {},
      {
        params: {
          apikey: process.env.BLING_API_KEY,
          xml: orderXml,
        },
      }
    );

    return order;
  } catch (error) {
    consola.error(error.message);
    return error.message;
  }
};

export default saveOrder;
