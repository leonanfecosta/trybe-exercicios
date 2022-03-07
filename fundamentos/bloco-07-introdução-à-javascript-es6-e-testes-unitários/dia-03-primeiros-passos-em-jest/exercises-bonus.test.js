const searchEmployee = require("./exercises-bonus");

describe("Testa a função searchEmployee", () => {
  it("é uma função", () => {
    expect(typeof searchEmployee).toBe("function");
  });

  it('testa se a searchEmployee(id, "firstName") retorna o primeiro nome do usuário da id consultada ', () => {
    const actual = searchEmployee("1256-4", "firstName");
    const expected = "Linda";

    expect(actual).toBe(expected);
  });

  it('testa se a searchEmployee(id, "lastname") retorna o segundo nome do usuário da id consultada ', () => {
    const actual = searchEmployee("1256-4", "lastName");
    const expected = "Bezos";

    expect(actual).toBe(expected);
  });

  it('testa se a searchEmployee(id, "specialities") retorna um array com todas as habilidades da id consultada ', () => {
    const actual = searchEmployee("1256-4", "specialities");
    const expected = ("Hooks", "Context API", "Tailwind CSS");

    expect(actual).toContain(expected);
  });

  it("testa a mensagem de erro para id inexistente", () => {
    expect(() => {
      searchEmployee("1256-8", "specialities");
    }).toThrow();
  });

  it("Testa se um erro com a mensagem 'ID não identificada' é retornado quando a ID não existir", () => {
    expect(() => {
      searchEmployee("1256-8", "specialities");
    }).toThrowError(new Error("ID não identificada"));
  });

  it("testa se lança um erro quando a informação e o ID são inexistentes", () => {
    expect(() => {
      searchEmployee();
    }).toThrow();
  });

  it("Testa se um erro com a mensagem 'Informação indisponível' é retornado quando a informações e o ID são inexistentes", () => {
    expect(() => {
      searchEmployee('4678-2', 'shift');
    }).toThrowError(new Error("Informação indisponível"));
  });
});
