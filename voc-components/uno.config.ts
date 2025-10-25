import {
  defineConfig,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
  presetWind4,
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind4(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
