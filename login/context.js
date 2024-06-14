module.exports = {
  title: 'Вход',
  fields: [
    {
      label: 'Логин',
      type: 'text',
      value: 'd_bolshakov',
    },
    {
      label: 'Пароль',
      type: 'password',
      value: '',
    },
  ],
  buttons: [
    {
      class: 'AuthButton',
      text: 'Авторизоваться',
    },
    {
      class: 'NoAccButton',
      text: 'Нет аккаунта?',
    },
  ],
};
