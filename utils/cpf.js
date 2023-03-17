function generateCPF() {
    let cpf = '';
    for (let i = 0; i < 9; i++) {
      cpf += Math.floor(Math.random() * 10);
    }
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = 11 - (sum % 11);
    cpf += (remainder == 10 || remainder == 11) ? '0' : remainder.toString();
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = 11 - (sum % 11);
    cpf += (remainder == 10 || remainder == 11) ? '0' : remainder.toString();
    return cpf || undefined;
  }

module.exports = {
    generateCPF
}