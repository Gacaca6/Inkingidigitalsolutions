# Device frame

`pixel-10-pro.webp` is taken unchanged from
[Goldie](https://github.com/software-mansion-labs/goldie) (MIT), commit `699578c`.

Goldie's own attribution for this file: it is the Pixel 10 Pro emulator skin's
`back.webp` from the Android SDK (`$ANDROID_HOME/skins/pixel_10_pro/`), part of
the Android Open Source Project and licensed under the
[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0), with the
display rect stated in the skin's `layout` file punched transparent.

Geometry, from Goldie's `src/frame.ts` (in the image's own pixels):

| | |
|---|---|
| Image | 1410 × 2968 |
| Screen cutout | x 59, y 60, 1280 × 2856 |
| Screen corner radius | 178 |

Used for the phone previews in `src/assets/work/`, built by `previews/compose.mjs`.
