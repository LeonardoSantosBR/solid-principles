import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { sanitizeCnpj } from 'src/helpers/cnpj-helper';
import { sanitizeCpf } from 'src/helpers/cpf-helper';

@ValidatorConstraint({ name: 'DocumentValidator', async: false })
export class DocumentValidator implements ValidatorConstraintInterface {
  validate(value: any, args?: any): Promise<boolean> | boolean {
    if (value?.length === 14 && args.object.type === 'PJ') {
      return !!sanitizeCnpj(value);
    }
    if (value?.length === 11 && args.object.type === 'PF') {
      return !!sanitizeCpf(value);
    }
    return false;
  }

  defaultMessage() {
    return 'Documento inválido';
  }
}
