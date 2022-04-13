const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};
// 1. Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson; // Ana Silveira
  const customerName = order["name"]; // Rafael Andrade
  const customerPhone = order["phoneNumber"]; // numero de celular
  const street = order.address.street; // Rua do endereço
  const number = order.address.number; // número do endereço
  const apartment = order.address.apartment;// numero do apartamento

  console.log(
    `Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`
  );
};

customerInfo(order);

// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
const orderModifier = (order) => {
  const newPerson = (order.name = "Luiz Silva"); // modifica o nome para Luiz Silva
  const pizzas = Object.keys(order.order.pizza); // retorna todos os valores da chave pizza
  const drinks = order.order.drinks.coke.type; // retorna o valor da chave type dentro de coke e drinks 
  const newTotal = order.payment.total = '50'; // altera o valor total para 50

  console.log(`Olá ${newPerson}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]}, e ${drinks} é R$ ${newTotal},00.`);
};

orderModifier(order);
