# pxt-matrix-font-capital

A MakeCode micro:bit extension providing capital letters A–Z plus punctuation characters (space, `!`, `.`, `:`, `-`, `?`) as a 5×7 bitmap font for use with [pxt-matrix-text](https://github.com/rolandbachkiss/pxt-matrix-text).

## Usage

Simply add this extension to your project. On load, it automatically registers the font with `matrixText`, making all supported characters available in `matrixText.drawText()` — no manual setup required.

You can also retrieve the font object directly:

```typescript
const cap = matrixFontCapital.font()
// cap.glyphW === 5, cap.glyphH === 7
```

## Supported characters

`A B C D E F G H I J K L M N O P Q R S T U V W X Y Z` (space) `! . : - ?`

## Font format

- Glyph size: 5×7 pixels
- Layout: column-major, 1 byte per column, bit 0 = top row
- Data stored in flash (zero RAM cost)

## Dependencies

- [pxt-matrix-core](https://github.com/rolandbachkiss/pxt-matrix-core)
- [pxt-matrix-text](https://github.com/rolandbachkiss/pxt-matrix-text)
- [pxt-neopixel](https://github.com/microsoft/pxt-neopixel) v0.7.6
