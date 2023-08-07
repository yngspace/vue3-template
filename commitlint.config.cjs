module.exports = {
  plugins: [
    {
      rules: {
        'includes-ticket-link': ({ raw }) => {
          const isValid = raw.includes('http')
          if (isValid) {
            return [true, '']
          }

          return [
            false,
            `
            Коммит должен включать в название ссылку на карточку.
            Пример - "Настроил правила имени коммитов, https://git.apptimizm.pro/templates/vue3-template/-/issues/12"
            `,
          ]
        },
      },
    }
  ],
  rules: {
    'includes-ticket-link': [2, 'always'],
  },
}
