### O que aprendi

- Substituir objetos em um programa por instâncias de seus subtipos, sem alterar a funcionalidade do programa

- Compreender que muitas interfaces específicas são melhores do que uma para todos os propósitos;

- Aplicar todos os princípios SOLID.

---

# Exercícios - agora, a prática

> O código a seguir será usado nos exercícios 1, 2 e 3.

O programa retorna informações relacionadas ao cep de uma pessoa e tem duas funcionalidades:

- Consultar um `endereço` a partir de um `cep` e um `número` de um logradouro
- Consultar um `cep` a partir de um `endereço` e um `número` de um logradouro

Copiar

```ts
1// ./FooCepAPI.ts
2class FooCepAPI {
3  async getAddressByCEP(cep: string, number: number): Promise<string> {
4    return `O endereço para o "CEP:${cep}, n°:${number}" é "endereço foo"`;
5  }
6
7  async getCepByAddress(address: string, number: number): Promise<string> {
8    return `O CEP para: "${address}, n°: ${number}" é "CEP baz"`;
9  }
10}
11
12export default FooCepAPI;
```

Copiar

```ts
1// ./CepService.ts
2import FooCepAPI from './FooCepAPI';
3
4class CepService {
5  private readonly cepApi: FooCepAPI;
6
7  constructor() {
8    this.cepApi = new FooCepAPI();
9  }
10
11  addressByCep(cep: string, num: number) {
12    return this.cepApi.getAddressByCEP(cep, num);
13  }
14
15  cepByAddress(address: string, num: number) {
16    return this.cepApi.getCepByAddress(address, num);
17  }
18}
19
20export default CepService;
```

Copiar

```ts
1// ./index.ts
2import CepService from './CepService';
3
4async function main() {
5  const cepSvc = new CepService();
6
7  console.log(
8    'get address by cep', 
9    '->', 
10    await cepSvc.addressByCep('xx.xxx-xx', 10),
11  );
12  console.log(
13    'get cep by address', 
14    '->', 
15    await cepSvc.cepByAddress('street foo, between bar and baz', 10),
16  );
17}
18
19main();
```

Copiar

```sh
1npx ts-node index.ts
```

**Exercício 1**: - Aplique a técnica de injeção de dependência para que a classe `CepService` diminua seu nível de acoplamento com a dependência `FooCepAPI`.

> Dica: [Um Guia sobre Injeção e Inversão de Dependências em Node.js e TypeScript](https://dev.to/oieduardorabelo/um-guia-sobre-injecao-e-inversao-de-dependencias-em-node-js-e-typescript-1bod)

**Exercício 2**: - A classe `CepService` ainda depende de uma implemenção concreta para as chamadas da Api e CEP. Aplique o princípio da `Inversão de dependência` para fazer com que a classe `CepService` fique completamente desacoplada.

**Exercício 3**: - Implemente uma classe `MockCepApi` usada para realização de testes unitários. *Obs: Você não precisa realizar os testes.*

> o código a seguir será usado nos exercícios 4, 5 e 6

Copiar

```ts
1// ./interfaces.ts
2export interface IVehicle {
3  drive(): void;
4  fly(): void;
5}
```

Copiar

```ts
1// ./FuturisticCar.ts
2import { IVehicle } from './interfaces';
3
4export default class FuturisticCar implements IVehicle {
5  drive(): void { console.log('Drive a futuristic car'); }
6
7  fly(): void { console.log('Flying a futuristic car'); }
8}
9
```

O objetivo do programa é modelar o comportamento de veículos. Inicialmente, supõe-se que há apenas um tipo de veículo que **voa**(fly) e *move*(drive) definido por `IVehicle` e implementado em `FuturisticCar`.

**Exercício 4**: - Implemente um novo tipo de veículo com a classe `Car` a partir da interface existente. Esse veículo deve somente ser capaz se mover.

**Exercício 5**: - Implemente um novo tipo de veículo com a classe `AirPlane` a partir da interface existente. Esse veículo deve somente ser capaz de voar.

**Exercício 6**: - Aplique o `Princípio da Segregação de Interfaces` com o objetivo de separar a implementação de cada tipo de veículo.
