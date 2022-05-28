# DevinHouse - Módulo 1 - Projeto 2 - Audaces Manager

## Requisitos da Aplicação

A aplicação contempla os seguintes requisitos:

1. Uma Tela de Login contendo um formulário com campos de email e senha. Os campos de email e senha são obrigatórios. Ao clicar no botão de Entrar e passar pela validação, verificar se é email e se a senha possui 6 caracteres, redirecionar para tela de Dashboard, a tela contém ainda um redirecionamento para “Esqueci minha senha”.

2. Uma tela de Esqueci a senha contendo um formulário com o campo de e-mail, adicionar validator na construção do formulário, esta tela possui um botão de voltar que redireciona o usuário para tela de login.

3. Um menu lateral, contendo as opções Dashboard, Coleções, Modelos, Obter Ajuda, Enviar Comentários e Logout. Os botões de “Obter Ajuda” e “Enviar Comentários” não possuem ação, o botão de Logout redireciona o usuário para tela de login.

4. Uma tela de Dashboard contendo 3 cards: Total de coleções, Total de modelos e Média de orçamento por coleção. A tela  de Dashboard possui uma tabela contendo os 5 maiores orçamentos dentre as coleções.

5. Uma tela de Listagem de Coleções contendo uma tabela, além do botão Criar Coleção que redireciona o usuário para tela de cadastro de coleção. As linhas da tabela são clicáveis e o clique na linha redireciona o usuário para Editar Coleção.

6. Uma tela de Cadastro de Coleção, contendo um formulário com os campos nome, responsável, estação, marca, orçamento e ano de lançamento. Ao clicar no botão salvar, chamar evento de onSubmit e cadastrar unidade via POST na rota /colecoes do json-server, o botão “Cancelar” fará com o que o usuário seja enviado para Listagem de Coleções. Todos os campos do formulário são obrigatórios.

7. Uma tela de Edição de Coleção, contendo um formulário com os campos nome, responsável, estação, marca, orçamento e ano de lançamento. Ao clicar no botão salvar, chamar evento de onSubmit e atualizar a unidade via PUT na rota /colecoes/:id do json-server, o botão “Cancelar” fará com o que o usuário seja enviado para Listagem de Coleções. Todos os campos do formulário são obrigatórios.

8. Uma tela de Listagem de Modelos, além do botão Criar Modelo que redireciona o usuário para tela de cadastro de modelo. Além disso, as linhas da tabela deverão são clicáveis e o clique na linha deve redirecionar o usuário para Editar Modelo.

9. Uma tela de Cadastro de Modelos, contendo um formulário com os campos nome, responsável, tipo, coleção relacionada e dois “radio group” para verificar se o modelo possui bordado e se possui estampa. Ao clicar no botão salvar, chamar evento de onSubmit e cadastrar unidade via POST na rota /modelos do json-server, o botão “Cancelar” fará com o que o usuário seja enviado para Listagem de Modelos. Todos os campos do formulário são obrigatórios.

10. Uma tela de Edição de Modelos, contendo um formulário com os mesmos campos presentes no Cadastro de Modelos. Essa tela precisa receber um parâmetro na rota para identificar que modelo o usuário deseja editar, mostrar no formulário os dados do modelo ao carregar as informações sobre ele. Ao clicar no botão salvar, chamar evento de onSubmit e atualizar a unidade via PUT na rota /modelos/:id do json-server, o botão “Cancelar” fará com o que o usuário seja enviado para Listagem de Modelos, além disso um botão Excluir deverá aparecer na tela e o clique será chamado o método DELETE na rota /modelos/:id para remover o modelo, ao fim da exclusão retornar o usuário para “Listagem de Modelos”.
 
## CAPTURA DE TELA DO PROJETO

 ![captura de tela do projeto](https://github.com/JoaoCoelhoSoares/projeto2-devinhouse/blob/master/projeto2-aud-manager/src/assets/print.png)

## 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
