// test.ts — pxt-matrix-font-capital visual hardware test
//
// Tests that the capital letter font is properly registered and renders
// correctly on a 32×32 NeoPixel matrix.
//
// Checkpoint pattern (5×5 micro:bit LEDs, left→right top→bottom):
// CP 0 — init + font loaded
// CP 1 — glyphW/glyphH sanity check (5×7)
// CP 2 — draw single character 'A'
// CP 3 — draw all A-Z across two rows
// CP 4 — textWidth check
// CP 5 — scroll "HELLO" across the matrix
// CP 6 — DONE

function cp(n: number): void {
    const cx = n % 5
    const cy = Math.idiv(n, 5)
    led.plot(cx, cy)
}

// ─── CP 0 — init ────────────────────────────────────────────────────────────
cp(0)
matrixCore.initNeoPixel(DigitalPin.P0, MatrixLayout.Grid2x2)
matrixCore.setBrightness(80)
matrixCore.clear()
matrixCore.updateDisplay()

// Font auto-registers on load. Verify the font object is accessible.
const f = matrixFontCapital.font()

// ─── CP 1 — glyphW / glyphH sanity ─────────────────────────────────────────
cp(1)
// Blink the micro:bit display if dimensions are wrong
if (f.glyphW !== 5 || f.glyphH !== 7) {
    for (let i = 0; i < 6; i++) {
        basic.showIcon(IconNames.No)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    }
}

// ─── CP 2 — draw single character 'A' ───────────────────────────────────────
cp(2)
matrixCore.clear()
// Draw 'A' in red at top-left corner (x=1, y=1 to leave a border)
matrixText.drawChar("A", 1, 1, matrixCore.rgb(200, 0, 0))
matrixCore.updateDisplay()
basic.pause(1000)
matrixCore.clear()
matrixCore.updateDisplay()

// ─── CP 3 — draw all A-Z across two rows ────────────────────────────────────
cp(3)
matrixCore.clear()
// Row 0: A-M (13 chars × 6 pixels each = 78, but matrix is only 32 wide)
// Draw 5 chars per row (each char is 5px wide + 1px gap = 6px → 5 chars = 30px)
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// Row 0: first 5 letters in red
for (let i = 0; i < 5 && i < alphabet.length; i++) {
    matrixText.drawChar(alphabet.charAt(i), i * 6, 0, matrixCore.rgb(255, 0, 0))
}
// Row 1: next 5 letters in green
for (let i = 5; i < 10 && i < alphabet.length; i++) {
    matrixText.drawChar(alphabet.charAt(i), (i - 5) * 6, 8, matrixCore.rgb(0, 255, 0))
}
// Row 2: next 5 letters in blue
for (let i = 10; i < 15 && i < alphabet.length; i++) {
    matrixText.drawChar(alphabet.charAt(i), (i - 10) * 6, 16, matrixCore.rgb(0, 0, 255))
}
// Row 3: next 5 in yellow
for (let i = 15; i < 20 && i < alphabet.length; i++) {
    matrixText.drawChar(alphabet.charAt(i), (i - 15) * 6, 24, matrixCore.rgb(255, 255, 0))
}
matrixCore.updateDisplay()
basic.pause(2000)
matrixCore.clear()
matrixCore.updateDisplay()

// ─── CP 4 — textWidth check ─────────────────────────────────────────────────
cp(4)
// "HELLO" = 5 chars, each 5px wide + 1px gap between = 5*5 + 4*1 = 29
const tw = matrixText.textWidth("HELLO")
// Light up a bar matching the text width (visual width indicator)
matrixCore.clear()
for (let i = 0; i < tw && i < 32; i++) {
    matrixCore.setPixelXY(i, 0, 200, 200, 0)
}
matrixCore.updateDisplay()
basic.pause(800)
matrixCore.clear()
matrixCore.updateDisplay()

// ─── CP 5 — scroll "HELLO" across the matrix ────────────────────────────────
cp(5)
matrixText.startScroll("HELLO", 12, matrixCore.rgb(255, 165, 0), 2)
// Run scroll for ~80 frames (text fully crosses the 32px matrix and wraps)
for (let i = 0; i < 80; i++) {
    matrixCore.clear()
    matrixText.updateScroll()
    matrixCore.updateDisplay()
    basic.pause(40)
}
matrixText.stopScroll()
matrixCore.clear()
matrixCore.updateDisplay()

// ─── CP 6 — DONE ─────────────────────────────────────────────────────────────
cp(6)
// Three full-screen flashes
for (let i = 0; i < 3; i++) {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
    `)
    basic.pause(300)
    basic.clearScreen()
    basic.pause(200)
}
