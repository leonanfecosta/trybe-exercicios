const service = require("./services");

describe("testando implementações de mock", () => {
  test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
    service.randomNumber = jest.fn().mockReturnValue(10);

    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada e com quais parametros", () => {
    service.randomNumber = jest.fn().mockImplementation((a, b) => a / b);

    expect(service.randomNumber(10, 2)).toBe(5);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledWith(10, 2);
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  test("mokando função randomNumber para receber 3 parametros e retornar sua soma", () => {
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => a + b + c);

    expect(service.randomNumber(1, 2, 3)).toBe(6);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledWith(1, 2, 3);
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  test("mokando a função randomNumber para receber um valor e retornar o valor multiplicado por 2", () => {
    service.randomNumber.mockReset();
    expect(service.randomNumber).toHaveBeenCalledTimes(0);

    service.randomNumber = jest.fn().mockImplementation((a) => a * 2);

    expect(service.randomNumber(10)).toBe(20);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledWith(10);
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  test("mockando funcção para receber uma string e retorna-la em caixa baixa", () => {
    const mockFirstFunction = jest
      .spyOn(service, "firstFunction")
      .mockImplementation((str) => str.toLowerCase());

    expect(mockFirstFunction("TESTE")).toBe("teste");
    expect(service.firstFunction).toHaveBeenCalled();
    expect(service.firstFunction).toHaveBeenCalledWith("TESTE");
    expect(service.firstFunction).toHaveBeenCalledTimes(1);
  });

  test("mockando a função que recebe uma string e retorna a ultima letra da string", () => {
    //service.secondFunction = jest.fn().mockImplementation((str) => str.charAt(str.length - 1));
    const mockSecondFunction = jest
      .spyOn(service, "secondFunction")
      .mockImplementation((str) => str.charAt(str.length - 1)); // método com spyOn

    expect(mockSecondFunction("TESTE")).toBe("E");
    expect(service.secondFunction).toHaveBeenCalled();
    expect(service.secondFunction).toHaveBeenCalledWith("TESTE");
    expect(service.secondFunction).toHaveBeenCalledTimes(1);
  });

  test("mockando a função que recebe duas strings e retorna a concatenação das três strings", () => {
    service.thirdFunction = jest
      .fn()
      .mockImplementation((str1, str2, str3) => str1.concat(str2, str3));

    expect(service.thirdFunction("tr", "y", "be")).toBe("trybe");
    expect(service.thirdFunction).toHaveBeenCalled();
    expect(service.thirdFunction).toHaveBeenCalledWith("tr", "y", "be");
    expect(service.thirdFunction).toHaveBeenCalledTimes(1);
  });

  test("retornando valor de uma função mockada", () => {
    service.firstFunction.mockRestore();

    expect(service.firstFunction("teste")).toBe("TESTE");
  });
});

describe("testando implementações de mock com fetch", () => {
  service.fetchDog = jest.fn();
  afterEach(service.fetchDog.mockReset);

  test("testando requisição caso a promise resolva", async () => {
    service.fetchDog.mockResolvedValue("request sucess");

    service.fetchDog(); 
    expect(service.fetchDog).toHaveBeenCalled();
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
    await expect(service.fetchDog()).resolves.toBe("request sucess");
    expect(service.fetchDog).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promise rejeite", async () => {
    service.fetchDog.mockRejectedValue("request failed");
    
    expect(service.fetchDog).toHaveBeenCalledTimes(0);
    await expect(service.fetchDog()).rejects.toBe("request failed");
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
  });
});
