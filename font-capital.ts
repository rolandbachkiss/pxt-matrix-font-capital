/**
 * Capital letters A-Z + punctuation (!.:-?) 5×7 bitmap font.
 * Auto-registers into matrixText on load.
 */
//% color=45 icon="\uf031"
//% blockNamespace=matrixText
namespace matrixFontCapital {
    // Font data in flash — zero RAM cost
    // 32 glyphs × 5 columns = 160 bytes
    // charMap: "ABCDEFGHIJKLMNOPQRSTUVWXYZ !.:-?"
    const _data = hex`7E1111117E7F494949363E414141227F4141221C7F494949417F090909013E4149497A7F0808087F00417F41002040413F017F081422417F404040407F020C027F7F0408107F3E4141413E7F090909063E4151215E7F09192946464949493101017F01013F4040403F1F2040201F3F4038403F631408146307087008076151494543000000000000005F00000060600000003636000008080808080201510906`
    const _charMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ !.:-?"

    // Auto-register on extension load
    const _font = new MatrixFont(5, 7, _charMap, _data)
    matrixText.registerFont(_font)

    /**
     * The capital letters font object (5×7)
     */
    //% blockId=matrix_font_capital_get
    //% block="capital font (5×7)"
    //% group="Fonts"
    export function font(): MatrixFont {
        return _font
    }
}
