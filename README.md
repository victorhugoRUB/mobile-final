# mobile-final

Projeto mobile desenvolvido em React Native.

## Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/lang/en/) ou [npm](https://www.npmjs.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (se o projeto usar Expo)
- Android Studio ou Xcode (para emulador) ou um dispositivo físico

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/victorhugoRUB/mobile-final
   cd mobile-final
   ```

2. Instale as dependências:
   ```bash
   yarn install
   # ou
   npm install
   ```

## Executando o projeto

### Usando Expo

```bash
npx expo start
```

### Usando React Native CLI

Para Android:
```bash
npx react-native run-android
```

Para iOS:
```bash
npx react-native run-ios
```

## Estrutura do Projeto

- `src/components` — Componentes reutilizáveis
- `src/screens` — Telas do aplicativo
- `src/services` — Serviços e integrações com API
- `src/navigation` — Navegação do app

## Observações

- Configure um emulador Android/iOS ou use um dispositivo físico para testar.
- Certifique-se de que as variáveis de ambiente e URLs de API estejam corretas em `src/services`.

## Documentação da API

A documentação da API utilizada neste projeto está disponível em:  
[https://back-end-quhb.onrender.com/api](https://back-end-quhb.onrender.com/api)

---

Feito com 💙 para a disciplina de Mobile.