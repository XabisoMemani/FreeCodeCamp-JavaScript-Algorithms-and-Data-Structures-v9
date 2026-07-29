# Drum Machine

A 9-pad drum machine. Click the pads or press Q W E A S D Z X C on your keyboard to trigger sounds.

## Pads

| Key | Sound |
|-----|-------|
| Q | Heater 1 |
| W | Heater 2 |
| E | Heater 3 |
| A | Heater 4 |
| S | Clap |
| D | Open HH |
| Z | Kick-n-Hat |
| X | Kick |
| C | Closed HH |

## Key concepts

- HTML5 Audio API
- `currentTime = 0` rewinds before playing so rapid hits work correctly
- `keydown` event listener maps keyboard keys to pads
- Active class flash gives visual feedback on trigger
