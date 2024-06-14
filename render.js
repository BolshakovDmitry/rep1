const fs = require('fs');
const handlebars = require('handlebars');
const path = require('path');

// Регистрация и загрузка частичных шаблонов
const loadAndRegisterPartials = () => {
  const modules = ['Registration', 'Login', 'Profile'];

  modules.forEach((module) => {
    const filePath = path.join(
      __dirname,
      module,
      `${module.toLowerCase()}.hbs`
    );
    const template = fs.readFileSync(filePath, 'utf-8');
    const compiledTemplate = handlebars.compile(template); // Компилируем шаблон
    handlebars.registerPartial(
      module.toLowerCase(),
      compiledTemplate
    ); // Регистрируем уже скомпилированный шаблон
  });
};

// Генерация HTML страниц
const generateHTMLPages = () => {
  loadAndRegisterPartials();

  const baseTemplatePath = path.join(__dirname, 'base', 'base.hbs');
  const baseTemplate = handlebars.compile(
    fs.readFileSync(baseTemplatePath, 'utf-8')
  );

  const modules = ['Registration', 'Login', 'Profile'];

  modules.forEach((module) => {
    const contextPath = path.join(__dirname, module, 'context.js');
    const context = require(contextPath);

    const partialTemplatePath = path.join(
      __dirname,
      module,
      `${module.toLowerCase()}.hbs`
    );
    const partialTemplate = handlebars.compile(
      fs.readFileSync(partialTemplatePath, 'utf-8')
    );

    const html = baseTemplate({
      title: context.title,
      body: partialTemplate(context),
    });

    // Сохраняем HTML файлы
    const outputFilePath = path.join(
      __dirname,
      module,
      `${module}Page.html`
    );
    fs.writeFileSync(outputFilePath, html, 'utf8'); // Путь, где будет сохранен сгенерированный HTML файл
  });

  console.log('HTML файлы успешно созданы');
};

generateHTMLPages();
