input.onButtonPressed(Button.A, function () {
    radio.sendString("Hello")
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showArrow(ArrowNames.North)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        # # # . .
        # # # # .
        # # . # .
        # # . # .
        . # # # .
        `)
})
input.onGesture(Gesture.ScreenDown, function () {
    control.reset()
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString(":)")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Bye")
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showIcon(IconNames.Happy)
})
radio.setGroup(1)
basic.showLeds(`
    # # # . .
    # # # # .
    # # . # .
    # # . # .
    . # # # .
    `)
basic.showString("Pixel OS Watch")
basic.showLeds(`
    # # # . .
    # # # # .
    # # . # .
    # # . # .
    . # # # .
    `)
loops.everyInterval(6000, function () {
    basic.clearScreen()
})
