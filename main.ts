radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(radio.receivedPacket(RadioPacketProperty.SignalStrength))
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < -70) {
        basic.showString("Far")
    } else {
        basic.showString("Near")
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . . .
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        `)
    radio.sendNumber(42)
    basic.clearScreen()
})
