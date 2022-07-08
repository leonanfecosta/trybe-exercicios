### O que aprendi

- Instalar e utilizar a ferramenta **docker-compose**;
- Entender a relação entre a ferramenta **docker-compose** e o **Docker** e porque usamos ambos;
- Gerenciar **redes virtuais**, utilizando-as para a comunicação e isolamento entre os *containers*;
- Persistir dados dos *containers* utilizando *volumes*;
- Criar arquivos **compose** para gerenciar todo seu ambiente com *containers*;
- Entender e gerenciar *Services*, *Network* e *Volumes*, que são novos conceitos trazidos pelo *Docker Compose*.

---

**Exercício 1**:

Vamos aprimorar nossos conhecimentos sobre `images` e `volumes`, para isso:

1. Crie um arquivo HTML chamado `missao_trybe.html` que tenha a seguinte estrutura:
   
   - Tag `<title>` com o seguinte texto "Trybe";
   
   - Tag `<H1>` com o seguinte texto "Missão da Trybe";
   
   - Tag `<p>` com o seguinte texto "Gerar oportunidade para pessoas";
   
   - Salve o arquivo em qualquer lugar da sua máquina com a extensão `html`

2. Crie um container para manter um servidor `httpd:2.4` **Apache** e vincule sua porta interna com a porta 4545 da sua máquina local.

3. Após criar o container, acesse a página HTML que está rodando no servidor em seu browser.

4. Acesse o arquivo `missao_trybe.html` e acrescente a tag `<p>` com o seguinte texto: "Nosso negócio é GENTE! #VQV";

5. Obtenha o id do container `httpd:2.4`;

6. Obtenha o `Mounts` através da propriedade `Source`, que deve mostrar o volume desse container no *Docker Host*;

7. Agora pare o container `httpd:2.4`;

8. Exclua o seu container;

9. Verifique se a pasta onde você salvou o arquivo html permanece no mesmo lugar;

10. Obtenha o `IMAGE ID` do servidor;

11. Depois de obter o `IMAGE ID`, exclua a imagem.

🚀 **Exercício 2**:

Crie o arquivo Compose para subir um [ghost blog](https://ghost.org/). Essa plataforma é similar ao Wordpress e é utilizada para criar sites de conteúdo. Você pode ler no site oficial como criar conteúdos nele e utilizá-lo. Para esse exercício, utilizaremos apenas sua página de exemplo:

1. Utilize a versão "3" no arquivo;
2. Crie um `service` para subir a plataforma. Para isso, utilize a imagem `ghost:1-alpine`;
3. Publique a porta `2368`, fazendo *bind* também para a `2368`;
4. Suba a aplicação utilizando o `docker-compose` e então acesse a porta publicada para validar se deu tudo certo.

🚀 **Exercício 3**:

Por padrão, o `ghost` utiliza um `sqlite` interno para salvar as informações, porém vamos alterar esse comportamento para exercitar nossos conhecimentos:

1. Crie um novo serviço para o nosso banco de dados. Nesse caso, podemos utilizar um mysql, portanto use a imagem `mysql:5.7`;
2. Precisamos definir uma senha `root` para o nosso *bd*. Para isso, utilize a variável `MYSQL_ROOT_PASSWORD` e lembre-se que é possível utilizar a sintaxe `${}` para passar uma `env` do *host* para a `env` do *container*;
3. Agora precisamos configurar nosso service com o *ghost* para utilizar o MySQL. Para isso, defina a variável `database__client` para `mysql`;
4. Defina o nome `ghost` para o nome do *database* utilizando a variável `database__connection__database`;
5. Então, indique a conexão para o nosso MySQL na *env* `database__connection__host`;
6. Para definir a pessoa usuária (**root**) e senha (a mesma que definimos no nosso MySQL), utilize respectivamente as *envs* `database__connection__user` e `database__connection__password`.
7. Utilize a opção `depends_on` para criar relações de dependências entre os serviços.
8. Suba o ambiente com o novo arquivo usando o `docker-compose` e então acesse a porta.
