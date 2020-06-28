basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(pins.map(
    pins.analogReadPin(AnalogPin.P2),
    0,
    1023,
    200,
    2000
    ))
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(pins.map(
    pins.analogReadPin(AnalogPin.P2),
    0,
    1023,
    200,
    2000
    ))
})
