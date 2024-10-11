import { HttpException, HttpStatus } from '@nestjs/common';

export const sanitizeCpf = (cpf: string) => {
  const sanitizedCpf = String(cpf).replace(/[.-]/g, '');

  if (sanitizedCpf.length !== 11) {
    throw new HttpException(
      'Cpf inválido: tamanho incorreto.',
      HttpStatus.FORBIDDEN,
    );
  }

  if (/^(\d)\1{10}$/.test(sanitizedCpf)) {
    throw new HttpException(
      'Cpf inválido: todos os dígitos são repetidos.',
      HttpStatus.FORBIDDEN,
    );
  }

  let soma = 0;
  let resto;

  for (let i = 1; i <= 9; i++) {
    soma += parseInt(sanitizedCpf.charAt(i - 1)) * (11 - i);
  }

  resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  if (resto !== parseInt(sanitizedCpf.charAt(9))) {
    throw new HttpException('Cpf inválido.', HttpStatus.FORBIDDEN);
  }

  soma = 0;

  for (let i = 1; i <= 10; i++) {
    soma += parseInt(sanitizedCpf.charAt(i - 1)) * (12 - i);
  }

  resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  if (resto !== parseInt(sanitizedCpf.charAt(10))) {
    throw new HttpException('Cpf inválido.', HttpStatus.FORBIDDEN);
  }

  return sanitizedCpf;
};
