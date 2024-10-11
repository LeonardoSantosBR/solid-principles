import { HttpException, HttpStatus } from '@nestjs/common';

export const sanitizeCnpj = (cnpj: string) => {
  const sanitizedCnpj = String(cnpj).replace(/[./-]/g, '').padStart(14, '0');

  if (sanitizedCnpj.length !== 14) {
    throw new HttpException(
      'Cnpj inválido: tamanho incorreto.',
      HttpStatus.FORBIDDEN,
    );
  }

  if (/^(\d)\1{13}$/.test(sanitizedCnpj)) {
    throw new HttpException(
      'Cnpj inválido: todos os dígitos são repetidos.',
      HttpStatus.FORBIDDEN,
    );
  }

  let tamanho = sanitizedCnpj.length - 2;
  let numeros: any = sanitizedCnpj.substring(0, tamanho);
  const digitos = sanitizedCnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }

  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado !== parseInt(digitos.charAt(0))) {
    throw new HttpException('Cnpj inválido.', HttpStatus.FORBIDDEN);
  }

  tamanho += 1;
  numeros = sanitizedCnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }

  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado !== parseInt(digitos.charAt(1))) {
    throw new HttpException('Cnpj inválido.', HttpStatus.FORBIDDEN);
  }

  return sanitizedCnpj;
};
