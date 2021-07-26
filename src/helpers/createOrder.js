import Parser from 'fast-xml-parser';

const parser = new Parser.j2xParser();

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

  return parser.parse('pedido', orderObj);
}

module.exports = createOrder;
