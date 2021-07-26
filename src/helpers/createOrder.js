const jsonToXml = require('js2xmlparser').parse;

async function createOrder(pipedriveObj) {
  const orderObj = {
    pedido: [
      {
        cliente: {
          nome: pipedriveObj.creator_user_id.name,
          email: pipedriveObj.creator_user_id.email,
        },
        items: {
          item: {
            codigo: 1,
            descricao: 'Item',
            vlr_unit: pipedriveObj.value,
          },
        },
      },
    ],
  };

  return jsonToXml('pedido', orderObj);
}

module.exports = createOrder;
