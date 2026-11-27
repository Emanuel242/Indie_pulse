# Indie Pulse

**Tema do projeto:** Site de notícias sobre jogos e estúdios independentes (indie games).

## Fase 1: Wireframes mobile, tablet e desktop

**Objetivo:** Planejar a estrutura visual do site Indie Pulse antes do desenvolvimento da página.

**Vídeo explicativo:** https://drive.google.com/drive/folders/1_kFr7V6KpxyXYV1IJ8KwC3TprDdQ2wza?usp=drive_link

### O que foi feito nesta fase

- Criação dos wireframes nas versões mobile, tablet e desktop.
- Planejamento da organização dos elementos e das seções do site.
- Definição da estrutura do cabeçalho e do menu de navegação.
- Planejamento das áreas de notícias, lançamentos, atualizações e estúdios.
- Organização dos destaques e dos cards de conteúdo.
- Definição de uma estrutura visual que pudesse se adaptar a diferentes tamanhos de tela.

### Resultado

Foram criados três modelos de wireframe, representando como o Indie Pulse deverá ser apresentado em celulares, tablets e computadores. Essa etapa serviu como base para o desenvolvimento da página nas fases seguintes.


## Fase 2: Desenvolvimento da página

**Objetivo:** Transformar o planejamento dos wireframes em uma página web funcional visualmente e responsiva.

**Vídeo explicativo:** https://drive.google.com/drive/folders/1_kFr7V6KpxyXYV1IJ8KwC3TprDdQ2wza?usp=drive_link

### O que foi feito nesta fase

- Desenvolvimento da estrutura da página utilizando React e TypeScript.
- Criação do cabeçalho com a identidade visual do Indie Pulse e menu de navegação.
- Implementação da área de destaque principal.
- Criação da seção de notícias com cards de conteúdo.
- Desenvolvimento das áreas de lançamentos e eventos.
- Criação da seção dedicada aos estúdios independentes.
- Utilização de HTML semântico para organizar o conteúdo.
- Aplicação de CSS para estilização da página.
- Criação de layout responsivo para mobile, tablet e desktop.
- Utilização de variáveis CSS para organizar cores e espaçamentos.

### Resultado

A estrutura visual do Indie Pulse foi desenvolvida com base nos wireframes da primeira fase. A página apresenta suas principais seções e adapta sua organização de acordo com o tamanho da tela, preparando a base para as próximas etapas do projeto.

### Fase 3: Componentização e interatividade

Objetivo: Reorganizar o projeto utilizando componentes reutilizáveis, tipagem com TypeScript e funcionalidades interativas com React.

Vídeo explicativo: [Adicionar link do vídeo]

O que foi feito nesta fase

Divisão da página em componentes reutilizáveis, organizados em arquivos separados.

Criação de tipos e interfaces com TypeScript para estruturar os dados e as propriedades dos componentes.

Separação dos dados de notícias e eventos em um arquivo próprio.

Utilização do método map() para renderizar dinamicamente as listas de notícias e eventos.

Utilização da propriedade key para identificar os elementos das listas.

Implementação do hook useState para controlar os estados da aplicação.

Criação de filtros de navegação para exibir separadamente as seções de notícias, lançamentos, atualizações e estúdios.

Implementação da funcionalidade de favoritos, permitindo marcar notícias e visualizar posteriormente apenas os conteúdos selecionados.

Resultado

O Indie Pulse passou a contar com uma estrutura de código mais organizada e dividida em componentes reutilizáveis. Também foram implementadas funcionalidades interativas utilizando React, permitindo navegar entre as diferentes seções do site e gerenciar notícias favoritas. Essa etapa aprimorou a organização e a manutenção do projeto, aplicando conceitos de componentização, tipagem e gerenciamento de estado.

## Fase 4: Dados externos

**Objetivo:** Substituir os dados locais da listagem principal por dados provenientes de uma API externa, implementando o tratamento dos estados de carregamento e erro.

**Vídeo explicativo:** [Adicionar link do vídeo]

### O que foi feito nesta fase

- Criação de um schema de notícias utilizando o Mockaroo.
- Integração da listagem principal com uma API externa.
- Utilização de `fetch` dentro de `useEffect` para realizar requisições.
- Criação de um hook personalizado para gerenciar os dados externos.
- Organização do acesso aos dados em um arquivo de serviço.
- Utilização de estados tipados com TypeScript.
- Implementação de mensagens de carregamento, erro e ausência de conteúdo.
- Manutenção da listagem secundária utilizando dados locais.
- Preservação dos filtros de navegação e da funcionalidade de favoritos.
- Estilização dos novos estados utilizando CSS.
- Manutenção da responsividade para mobile, tablet e desktop.

### Fonte dos dados

As notícias são obtidas através de uma API criada no Mockaroo, utilizando dados fictícios gerados para fins acadêmicos.

**Fonte:** https://www.mockaroo.com/

**Endpoint:** [Adicionar endereço da API utilizada]

A listagem secundária de eventos e lançamentos permanece armazenada localmente no projeto.

### Como executar o projeto

Instale as dependências:

```bash
npm install
```

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse o endereço informado pelo terminal.

### Resultado

O Indie Pulse passou a consumir dados externos para apresentar suas notícias dinamicamente. A aplicação também informa ao usuário quando os dados estão sendo carregados, quando ocorre algum erro na requisição ou quando não existem conteúdos disponíveis. As funcionalidades desenvolvidas nas fases anteriores foram preservadas.