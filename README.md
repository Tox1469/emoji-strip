[![CI](https://img.shields.io/github/actions/workflow/status/Tox1469/emoji-strip/ci.yml?style=flat-square&label=ci)](https://github.com/Tox1469/emoji-strip/actions)
[![License](https://img.shields.io/github/license/Tox1469/emoji-strip?style=flat-square)](LICENSE)
[![Release](https://img.shields.io/github/v/release/Tox1469/emoji-strip?style=flat-square)](https://github.com/Tox1469/emoji-strip/releases)
[![Stars](https://img.shields.io/github/stars/Tox1469/emoji-strip?style=flat-square)](https://github.com/Tox1469/emoji-strip/stargazers)

---

# emoji-strip

Detecta, remove e conta emojis em strings usando propriedade Unicode `Extended_Pictographic`.

## Instalação

```bash
npm install emoji-strip
```

## Uso

```ts
import { stripEmoji, countEmoji, hasEmoji } from "emoji-strip";

stripEmoji("Olá 👋 mundo 🌍"); // "Olá  mundo "
countEmoji("👋🌍");             // 2
hasEmoji("sem emoji");           // false
```

## API

- `stripEmoji(s: string): string`
- `countEmoji(s: string): number`
- `hasEmoji(s: string): boolean`

## Licença

MIT