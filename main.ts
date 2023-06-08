input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(32 + input.temperature() * 1.8)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature() + 273)
})
