# pxt-matrix-font-capital

Capital letters A–Z plus punctuation (space, `!`, `.`, `:`, `-`, `?`) as a 5×7 bitmap font for [pxt-matrix-text](https://github.com/rolandbachkiss/pxt-matrix-text).

## Usage

Simply add this extension to your project. On load, it automatically registers the font with `matrixText` — no manual setup required.

```typescript
matrixText.drawText("HELLO", 2, 2, matrixCore.rgb(255, 255, 0))
```

## Supported Characters

`A B C D E F G H I J K L M N O P Q R S T U V W X Y Z` (space) `! . : - ?`

## Font Details

| Property | Value |
|----------|-------|
| Glyph size | 5×7 pixels |
| Layout | Column-major, 1 byte per column, bit 0 = top row |
| Data | Stored in flash (zero RAM cost) |
| Characters | 32 glyphs |

## API

| Block | Description |
|-------|-------------|
| `capital font (5×7)` | Returns the MatrixFont object |

## Dependencies

- [pxt-matrix-text](https://github.com/rolandbachkiss/pxt-matrix-text)
- [pxt-matrix-core](https://github.com/rolandbachkiss/pxt-matrix-core)

## License

MIT © Roland Bach Kiss
