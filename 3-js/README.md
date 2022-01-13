# Teste de Front-end Pleno Sapient AG2

## JS

Neste teste iremos avaliar o seu conhecimento em JS e organização de código.

No arquivo **index.html** temos a estrutura de uma página com um código não semântico, mas funcional. Ele já está com o CSS formatado para a exibição da página e de todos os comportamentos que precisam ser aplicados. No HTML você encontrará comentários sobre as classes que ativam as áreas que precisam de interação.

Configuração do NPM:
* Instalar as dependências necessárias para compilação do JS minificado via Webpack
* Criar os arquivos necessários de configuração
* Fazer o output dos arquivos da pasta **src/js/app** para a pasta **assets/js**
* Definir a função `npm run script` para rodar a sua compilação

O que precisa ser feito:
* Abrir e fechar o menu com o clique no botão Menu
* Play do vídeo ao clicar na imagem de capa
* Sistema de sanfona para a lista
* Carregamento de conteúdo ajax pela api da [Wikipedia](https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Alber%20Einstein) (O conteúdo a ser carregado está dentro de query.pages[736].extract)
* Abrir modal com a foto e fazer função no botão de fechar
* Criar a funcionalidade do carrossel

> Os componentes devem ser criados em arquivos separados na pasta **src/js/components** e importados no arquivo *main.js*. A utilização de bibliotecas externas é permitida mas não recomendada, queremos ver o seu conhecimento em Javascript. Caso escolha por utilizar alguma biblioteca ela deve estar no **package.json** e deve compilada com o Javascript, sem alterar o arquivo HTML.