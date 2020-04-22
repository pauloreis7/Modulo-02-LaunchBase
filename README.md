# Modulo02-LaunchBase
 Projetos e desafios do módulo 2

## Todos os conceitos

Usando shorthand em css: com somente 1 propriedade será aplicado aos 4 lados. Ex: paddin: 10px.
Com 2 propriedades temos o primeiro nas verticais e o segundo nas horizontais. Ex: padding: 10px(vertical) 20px(horizontal).

Com 3 propriedades temos a primeira sendo vertical (top) a segunda horizontais e a terceira a vertical (botton). Ex: padding: 10px(top) 20px(horizontais) 30px(botton).

Com 4 propriedades temos cada uma indicando cada parte do quadrado no sentido horário, assim a primeira indica o top, a segunda o right, a terceira o botton e a quarta o left. 

Ex: 10px(top) 20px(right) 30px(botton) 40px(left) sempre a primeira indica o top e assim por diante no sentido horário.

Seletor * significa que está pegando tudo que tem dentro do html.

O CSS trabalha por meio de cascata que diz respeito a conbinação de seletores, quanto maior a profundidade mais forte será o seletor. Ex: header div a , isso é profundidade e conbinação de seletores nesse exemplo eu estou dizendo que dentro das divs do header em todos os "a" tal estilo será aplicado.

Unidades de medida em CSS:

Pixels(px): Desnsidade de pixels em tela;

Dica: Na formatação do line height, caso não saiba oque colocar, use 10px a mais que o font-size.

## Variáveis em CSS

Para criar variáveis no css basta usar o comando ":root {nome da variável: conteúdo de formatação;}", para usar essa variáveis basta que dentro do seletro, na propriedade desejada inserir "var(nome da variável);" .Variáveis em css são úteis para facilitar a programar agilzando o processo.

## País e filhos no CSS

O filho sempre respeitará as dimenções do pai mais próximo, casa esse não esteja definido respeitará o do segundo mais p´roximo e assim por diante. EX: caso tenhamos um imagem e colocamos 100% de width ela terá 100% do tamanho máximo do seu pai

### Uma formatação para dois seletores sem o uso de classes

Para fazer com que um formatação sirva para dois seletores basta escrever o primeiro adicionar uma virgula e o segundo, assim a formatação pegará para os dois. Ex: body, header { color: white; }

## Alinhamento com o display grid

O grid trabalha com a ideia de colunas, tabelas para o alinhamento.

Para criar colunas basta adicionar o comando "grid-template-columns: 1fr 1fr;" o "1fr" representa uma coluna e cada filho será impresso em somente uma coluna. 

O "fr" significa fração e que os tamanhos das colunas sejam flexíveis, com quebra quando o espaço máximo do pai for atinjido.

O número 1 que acompanha o fr diz respeito ao tamanho da coluna, caso use 2fr 1fr a primeira coluna "2fr" terá o dobro do tamnho da segunda "1fr".

* Gap: Diz respeito ao espaçamento, de acordo com o espaçamento pedido, ele aplica um espaço entre os elementos do grid, tanto nas verticais quanto nas horizontais

### Filter em CSS

Muito util em css, serve para formatação de cores, o filter basicamente possui muitas ideias de filtro para as cores de imagem,texto,botão,etc como brilho, escala, blur, sombra, contraste, etc. Possui a capacidade de um editor e imagem.

#### Lembrar:
Quando estamos tratando de arquivos que estão na raiz, não é necessário colocar o "/" antes da página quando usar os links em html (href da tag a), pois o live server funcionará normal por estar na raiz do projeto e caso o arquivo seja aberto diretamente sem server ele também funcionará.

O contrário acontce adicionando o "/" porque ao abrir o arquivo sem um server ele não achará nenhum arquivo com um / na frente, então a página não será carregada, pois o nome está incorreto.

#### Posições em CSS

Fixed: Diz que o conteúdo ficará fixado em tela.

Absolute: Refere-se a uma posição absoluta em quaquer lugar da tela somente passando os valores de top, botton, right, left, sem depender de nenhum pai, é muito mais fácil de alinhar com ele, porém compromete a responsividade, logo usar somente estratégicamente em que não comprometerá a responsividade da página

Relativa: Significa uma posição relativa ao seu pai, dependendo, relativa do container pai, sempre ficará dentro do conteiner pai