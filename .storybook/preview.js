import '../src/lib/styles/global-colors.css'
import '../src/lib/styles/global.css'
import '../src/lib/styles/global-typo.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}