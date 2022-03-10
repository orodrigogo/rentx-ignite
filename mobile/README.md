### Iniciando a aplicação
Lembre-se de atualizar a baseURL em services/api.ts com o endereço do back-end.

### Solução do erro "WatermelonDB depends upon React-jsi"

1. Lembre-se de executar as etapas 1 e 2 de configuração no iOS conforme a documentação:

- Link: https://nozbe.github.io/WatermelonDB/Installation.html

2. De acordo com a versão que estamos utilizando, na etapa 3 precisar adicionar uma única linha no arquivo __PodFile__ dentro da pasta iOS:

```swift
pod 'simdjson', path: '../node_modules/@nozbe/simdjson'
```

3. Por fim, acesse a pasta iOS pelo terminar e execute o comando pod install.

```bash
  cd ios/ && pod install
```


### Solução do conflito com o Lottie no iOS:
1.Remova a versão atual do seu lottie (caso tenha):

```bash
yarn add lottie-react-native
```

2. Agora, instale o seguinte:
```bash
yarn add lottie-react-native@4.0.2
yarn add lottie-ios@3.1.8
```