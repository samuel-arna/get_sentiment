# Get Sentiment!

Descubra os sentimentos contidos em uma frase ou em um texto.


# Como instalar

Após clonar o repositório e ter seu ambiente React Native devidamente configurado, instale as dependências executando o seguinte comando:
> $ npm i


### Executar em um dispositivo iOS

Para executar o app em um dispositivo iOS execute o seguinte comando:

> $ cd ios && Pod install && cd .. && npm run ios 

### Executar em um dispositivo Android

> $ npm run android

## Dependências utilizadas

 - Sentiment ([https://www.npmjs.com/package/sentiment](https://www.npmjs.com/package/sentiment))

## Desenvolvido por

[Samuel Arná](https://github.com/samuel-arna)


# Resumo de escolhas

Devido a demora para a liberação do App na API do Twitter, optei por uma simples verificação de sentimentos contidos em uma frase ou texto, também por não ter um cartão de crédito disponível para a configuração de pagamento na API Natural Language do Google, optei por utilizar a biblioteca [Sentiment](https://www.npmjs.com/package/sentiment) que trabalha de forma equivalente a do Google com poucas diferenças, como a lingua padrão ser o inglês mas também dando a opção de adicionar novas línguas por traduzindo manualmente as labels de conferência, que também por serem muitas optei por deixar na lingua padrão, o inglês.