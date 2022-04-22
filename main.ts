radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 5) {
        oven = oven * -1
        if (oven > 0) {
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
        } else {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
        }
    }
    if (receivedNumber == 6) {
        door1 = door1 * -1
        if (door1 < 0) {
            pins.servoWritePin(AnalogPin.P7, 0)
        } else {
            pins.servoWritePin(AnalogPin.P7, 90)
        }
    }
    if (receivedNumber == 7) {
        door2 = door2 * -1
        if (door2 < 0) {
            pins.servoWritePin(AnalogPin.P8, 0)
        } else {
            pins.servoWritePin(AnalogPin.P8, 90)
        }
    }
    if (receivedNumber == 8) {
        door3 = door3 * -1
        if (door3 < 0) {
            pins.servoWritePin(AnalogPin.P9, 0)
        } else {
            pins.servoWritePin(AnalogPin.P9, 90)
        }
    }
})
let oven = 0
let door3 = 0
let door2 = 0
let door1 = 0
let strip: neopixel.Strip = null
radio.setGroup(1)
pins.servoWritePin(AnalogPin.P7, 0)
pins.servoWritePin(AnalogPin.P8, 0)
pins.servoWritePin(AnalogPin.P9, 0)
strip = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
door1 = -1
door2 = -1
door3 = -1
oven = 1
basic.forever(function () {
	
})
