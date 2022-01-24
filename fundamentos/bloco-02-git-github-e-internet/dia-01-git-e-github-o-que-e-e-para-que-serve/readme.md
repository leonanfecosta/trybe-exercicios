## O que aprendi?

Conceitos do controle de versão e os diferentes tipos de sistemas de controle de versão disponíveis.

Depois de ter uma visão geral, foquei no **Git** , um sistema de controle de versão distribuído (DVCS) que permite que um time trabalhe em um mesmo projeto ou em um mesmo arquivo e provê ferramentas para contornar a maioria dos problemas que podemos ter nesse tipo de situação.

Os principais pontos abordados serão:

- O que é o **Git** ?
- Qual a principal diferença para os outros `VCS's` ?
- Como configurar o **Git** na sua máquina?
- Como iniciar um repositório local?
- O que é o **GitHub** ?
- Como subir seu repositório local para o **GitHub** ?
- O que é *Branch* , *Merge* , *Commit* ?

------

#### Criando um repositório local

Antes de se criar um repositório é preciso criar uma pasta para ele. Para isso você deve utilizar o comando `mkdir` , como vimos anteriormente, e então navegar para a pasta criada com o comando `cd` .

Para criar um repositório você deve digitar o comando `git init` . É muito importante que esteja dentro da pasta criada para o repositório.

Após usar o `git init` a resposta do seu terminal será algo parecido com a imagem a seguir:

![img](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/git/images/git-init-9ebbfdfa9b0b14d495f0498bf2e7b18d.png)

Iniciando repositório local

Como seu nome bem diz, esse comando é responsável por iniciar um repositório `Git` dentro da pasta em que foi executado.

Para verificar se um repositório `Git` foi de fato iniciado, você pode executar o comando `git status` , que retorna o status do repositório. No contexto de um repositório recém criado onde nenhuma modificação foi feita você receberia a seguinte resposta:

Copiar

```shell
No ramo master

No commits yet

nada para enviar (crie/copie arquivos e use "git add" para registrar)
```

> Atenção, contas e repositórios mais recentes no github não possuem mais o termo "master" pela pejoratividade da palavra, esse termo foi substituído por "main" então talvez seja necessária a alteração dessa palavra em alguns códigos.

#### Adicionando e comitando arquivos

Vamos adicionar um arquivo a esta pasta para então podermos versionar as alterações feitas no novo repositório.

Primeiro crie um arquivo `.txt` com o nome `meu_arquivo` e inclua a ele o texto:

Copiar

```shell
Meu primeiro repositório Git.
```

Feita a criação do arquivo, ao executar o comando `git status` , você irá receber uma resposta parecida com essa:

![img](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/git/images/git-status-answer-737da3a31bd20ad17e05b8dfbf626682.png)

Resposta do git status com alterações

Para que possamos versionar alterações feitas no código é preciso sempre seguir a seguinte sequência:

- Adicionar ( `add` )
- Comitar ( `commit -m "mensagem"` )

Os comandos ficam da seguinte forma:

Copiar

```shell
# Adicionar todos os arquivos modificados
git add .

# Ou você também pode adicionar arquivos específicos
git add meu_arquivo.txt

# Então você comita a alteração
# Ao comitar você deve adicionar também uma mensagem que descreve o que aquela alteração faz

git commit -m "Mensagem sobre a alteração feita"
```

Após adicionar e fazer um commit de suas alterações, você receberá no terminal algo parecido com a próxima imagem:

![img](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/git/images/git-commit-answer-ed4540bbfe5427bf3b9e97ba06c73295.png)

Resposta do git commit após alterações

Feito isso, agora queremos conectar nosso repositório local com um repositório remoto para enviar as novas alterações, mas antes, vamos ver como criar um repositório remoto no ***GitHub\***

#### Sincronizando os repositórios

Os repositórios já estão criados e também já estão conectados, agora é a hora de enviar as alterações feitas no repositório local para o repositório remoto.

Para isso, certifique-se que as alterações já foram adicionadas e comitadas utilizando o comando `git status` , caso esteja tudo certo, você receberá uma mensagem no terminal parecida com a imagem a seguir:

![img](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/git/images/git-status-clean-534370a6d9343496469ea5b0a6cbff08.png)

Resposta do git status sem alterações pendentes de commit

Caso tenha alguma alteração que não foi comitada, faça o commit para depois enviar as alterações.

Com tudo comitado é hora de enviar essas alterações para o respositório remoto utilizando o seguinte comando:

Copiar

```shell
git push origin master
```

Com isso, você está enviando as alterações feitas localmente para a branch principal, `main` ou `master` , do seu repositório remoto, `origin` .

Se tudo ocorreu conforme o esperado, acesse novamente, ou atualize, a página do seu repositório no ***GitHub\*** , você então verá que os arquivos e alterações que comitou agora se encontram lá!

### Resumo

Em suma, todo esse processo acontece nessa ordem:

- Uma pasta é criada para armazenar um repositório local ( `mkdir <nome da pasta>` );
- Nos movemos para a pasta criada ( `cd <nome da pasta criada>` );
- Um repositório local é criado nessa pasta, e aqui já será possível ter controle de versionamento ( `git init` );
- Modificamos os arquivos que queremos modificar;
- Verificamos quais arquivos foram alterados ( `git status` );
- Arquivos selecionados pelo usuário são adicionados ao que será modificado na próxima versão ( `git add` );
- Uma nova versão desse repositório local é criada com uma descrição do que essa versão muda em relação à antiga ( `git commit -m "<mensagem desejada>"` );
- Empurra as alterações do repositório local para o repositório remoto ( `git push` ).

------
