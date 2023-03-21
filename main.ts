let distancia = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("NOMBRE Y APELLIDOS")
})
input.onButtonPressed(Button.A, function () {
    basic.showString("TAREA 7 - SENSOR ULTRASONIDOS HC-SR04")
})
basic.forever(function () {
    distancia = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P0,
    PingUnit.Centimeters
    )
    basic.showNumber(distancia)
    if (distancia < 87) {
        music.playMelody("- F B D F A E - ", 120)
    }
})
