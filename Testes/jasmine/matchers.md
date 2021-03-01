# Entendendo os matchers

## Matchers

de um modo resumido, implementa uma **comparação booleana** entre o valor atual e o valor esperado. É responsável em passar para o Jasmine se o que esperamos através do nosso teste é verdadeiro ou falso. Com base nisso, o Jasmine vai passar ou falhar a spec.

## toEqual

Simplesmente **verifica se duas coisas são iguais** (e não necessariamente o mesmo objeto). Por exemplo, as seguintes expects iriam passar:

```jsx
expect(true).toEqual(true);
expect([1, 2, 3]).toEqual([1, 2, 3]);
```

Da mesma forma, as seguintes iriam falhar:

```jsx
expect(5).toEqual(12);
expect([1, 2, 3]).toEqual([11, 12, 13])
```

## toBe

O matcher `toBe,` a princípio, parece ser igual ao *toEqual*. A diferença é que `toBe` **verifica não só se os dois valores são iguais, mas também se eles são do mesmo objeto.**

Pra podermos ver a diferença entre os dois:

```jsx
let bob = { model: "Camaro" };
let john = { model: "Camaro" };

expect(bob).toEqual(john); // passa => são equivalentes
expect(bob).toBe(john); // falha => não é o mesmo objeto
```

Apesar de bob e john serem similares, eles não são o mesmo objeto, o que faz a spec passar se for usado o matcher toEqual, mas falha se for usado o matcher toBe. O mesmo acontece para arrays:

```jsx
let group = [100, 101, 102];

expect(group).toEqual([100, 101, 102]); // passa => são equivalentes
expect(group).toBe([100, 101, 102]); // falha => não é o mesmo array
```

## toBeTruthy e toBeFalsy

Para testar se algum valor é avaliado como **true** ou **false**, podemos usar respectivamente os matchers **toBeTruthy** e **toBeFalsy**:

```jsx
expect(true).toBeTruthy();
expect(1000).toBeTruthy();
expect({}).toBeTruthy();

expect("").toBeFalsy();
expect(null).toBeFalsy();
expect(false).toBeFalsy();
```

Se pararmos pra olhar com calma o exemplo anterior, podemos notar que a avaliação dos matchers toBeTruthy e toBeFalsy é idêntica ao JavaScript. Então, **temos alguns valores específicos que são considerados falsy e todo o restante é avaliado como truthy**. 

### Lista dos valores que são avaliados como falsy pelo Jasmine:

- `false`
- `0`
- `""`
- `undefined`
- `null`
- `NaN`

## not

Muitas vezes podemos inverter um matcher para termos certeza de que ele não é um valor true. Podemos fazer isso facilmente adicionando o prefixo .not:

```jsx
expect('Fabeni').not.toEqual('Finelli');
```

## toContain

Conseguimos também verificar se um elemento está contido em um array ou string por exemplo, como o matcher toContain.

```jsx
expect([10, 11, 12, 13, 14, 15]).toContain(13);
expect('Raphael Fabeni').toContain('Fabeni');
```

# toBeDefined e toBeUndefined

Da mesma maneira que vimos os matchers `toBeTruthy` e `toBeFalsy`, Jasmine também nos oferece os `toBeDefined` e `toBeUndefined` que verificam se um valor é `defined` ou `undefined`.

```jsx
var iAmUndefined;
expect(null).toBeDefined(); // passa
expect('Fabeni').toBeDefined(); // passa
expect(iAmUndefined).toBeDefined(); // falha

expect(iAmUndefined).toBeUndefined(); // passa
expect(12).toBeUndefined(); // falha
expect(null).toBeUndefined(); // falha
```

## toBeNull

Direto ao ponto, esse matcher simplesmente avalia se um valor é `null`:

```jsx
expect(null).toBeNull(); // passa
expect(false).toBeNull(); // falha
expect(1).toBeNull(); // falha
```

## toBeNaN

Sem muitas delongas, esse matcher verifica se um valor é `NaN`:

```
expect(0).toBeNaN(); // falha
expect(10).not.toBeNaN(); // passa
```

## toBeGreatherThan e ToBeLessThan

Esses dois matchers verificam se um valor é maior ou menor que um outro valor passado.

```jsx
expect(10).toBeGreatherThan(1); // passa
expect(10).toBeLessThan(20); // passa
```

# toBeCloseTo

Esse matcher permite que possamos verificar se um certo número está próximo de um outro número, dado uma certa precisão decimal como segundo argumento. Poderíamos por exemplo, verificar se um número é próximo de `25.23` com um ponto decimal. Poderíamos fazer algo assim:

```jsx
expect(25.23).toBeCloseTo(25.2, 1); // passa
```

## toMatch

Esse cara verifica se algum valor está de acordo com base em uma expressão regular.

```jsx
expect('Yes, we can!').toMatch(/we/); // passa
```

## toThrow

Esse matcher permite que verifiquemos se uma função lançou um erro. Como exemplo, vamos imaginar que temos uma função `onlyNumbers` que deve lançar uma exceção caso o argumento passado seja uma *string* e não um número. Podemos usar aqui uma função anônima para nos facilitar a vida:

```jsx
expect(function() {
    onlyNumbers('argumento errado')
}).toThrow();
```

Referência:

[Jasmine: entendendo os matchers - iMasters - We are Developers](https://imasters.com.br/front-end/jasmine-entendendo-os-matchers)

[Documentação jasmine](https://jasmine.github.io/api/edge/matchers)