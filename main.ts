basic.showString("hogyan eszek")
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        . # . # .
        . . # . .
        `)
    basic.pause(200)
    for (let index = 0; index < 6; index++) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    basic.pause(200)
})
