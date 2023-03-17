const axios = require('axios');
const { generateCPF } = require('./utils/cpf')

async function main() {
  const results = [];
  
  // Informar quantas requisições quer fazer
  for(let i=0; i < 20; i++) {
    const cpf = generateCPF();

    // Inserir os dados do body da sua API para a requisição, embaixo é apenas um exemplo
    const data = {
        "user": {
        "cpf": generateCPF().toString(),
        "name": "SEU NOME",
        "email": `SEU.EMAIL${i+1}@email.com.br`,
        "password": "SUA SENHA",
        "passwordConfirm": "SUA SENHA",
        },
    };
    
    const config = {
        method: 'post',
        url: 'https://URLdaAPI',
        headers: { 
        'Content-Type': 'application/json'
        },
        data
    };

    if (cpf) {
      data.user.cpf = cpf.toString().trim();
    } else {
      console.error('Erro ao gerar CPF');
      return;
    }
    
    const response = await axios(config);
    results.push(response.data);
  }

  console.log(results);
}

main();
