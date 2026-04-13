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
