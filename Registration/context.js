module.exports = {
  title: 'Регистрация',
  fields: [
    { label: 'Почта', type: 'text', value: 'pochta@mail.ru' },
    { label: 'Логин', type: 'text', value: 'd_bolshakov' },
    { label: 'Имя', type: 'text', value: 'Дмитрий' },
    { label: 'Фамилия', type: 'text', value: 'Большаков' },
    { label: 'Телефон', type: 'tel', value: '+7 (960) 137 40 42' },
    { label: 'Пароль', type: 'password', value: '' },
    { label: 'Пароль (ещё раз)', type: 'password', value: '' },
  ],
  buttons: [
    { class: 'AuthButton', text: 'Зарегистрироваться' },
    { class: 'NoAccButton', text: 'Войти' },
  ],
};
