Front-end Job Interview Questions - HTML Questions

Я думаю эта ситуация знакома многим Frontend-разработчикам, после того, как вам назначают дату интервью, возникает вопрос "Что меня ждет?". Это происходит потому, что мир Frontend разработки очень обширен и включает в себя как базовые области (такие как HTML, CSS, JavaScript), так и множество специфичных тем (JavaScript фрейморки, работа с графикой и анимацией, методологии разработки и много чего еще). В ходе подготовки к собственному интервью я посмотрел множество ресурсов, какие то были лучше, какие то вызывали у меня только больше вопросов, но самым полезным для меня оказался список вопросов Front-end-Developer-Interview-Questions[https://github.com/h5bp/Front-end-Developer-Interview-Questions] и я решил поработать над ним.

!Я пишу эту заметку чтобы зафиксировать свои собственные ответы (как советовала Emma Wedekind[https://dev.to/emmawedekind/decoding-the-front-end-interview-process-14dl], подумать над вопросами вслух:)) и, возможно, начать интересную дисскусию в комментариях. Но не относитесь к моим ответам как к чистой истине, я обычный разработчик который тоже может ошибаться:)

!С полным списком вопросов вы можете ознакомится на GitHub[https://github.com/h5bp/Front-end-Developer-Interview-Questions], проект активно развивается и вы можете стать его частью.

## What does a doctype do?

`DOCTYPE` (or a Document Type Declaration) is an instruction to a browser about version of murkup language in witch a page is written. According to the HTML specification, each HTML document requires a `DOCTYPE` declaration indicating which version or standard of HTML is being used.

### HTML5 Doctype

The `DOCTYPE` for HTML5 is case-insensitive and should be located at the beginning of the document.

```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <title><!-- Title of your page --></title>
    </head>
    <body>
        <!-- Body of your page -->
    </body>
</html>
```

Use of others `DOCTYPE`

There is currently no reason to use the old declaration when creating new pages. However, you can still meet them in older projects.

### References

1. https://www.w3.org/QA/2002/04/valid-dtd-list.html
1. https://html.spec.whatwg.org/multipage/syntax.html#the-doctype
1. https://developer.mozilla.org/en-US/docs/Glossary/Doctype
1. https://html.com/tags/doctype/

## How do you serve a page with content in multiple languages?

Always use a language attribute on the HTML tag to declare the default language of the text in the page. Note that you should use the `html` element rather than the `body` to define the language, because the `body` element dosen't cover the text inside the document's `head` element.

```html
<html lang="en">
  <head>
    <title><!-- Title of your page --></title>
  </head>
  <body>
    <!-- Body of your page -->
  </body>
</html>
```

When the page contains content in another language adds a language attribute to an element surrounding that content.

```html
<html lang="en">
  <head>
    <title><!-- Title of your page --></title>
  </head>
  <body>
    <p lang="fr">Texte français</p>
  </body>
</html>
```

To be sure that all user agents recognize which language you mean, you need to follow a standard approach when providing language attribute values. You can find a complete list of codes for various languages in this registry[https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry].

### References

1. https://www.w3.org/International/questions/qa-html-language-declarations
1. https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang
1. https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry

## What kind of things must you be wary of when design or developing for multilingual sites?

This is an extensive question and it can be approached from different angles. My opinion is that the best answer would be a few specific examples of what you personally cane across. For example:

1. Always use the `lang` attribute for the `html` tag and when using a separate language for individual page elements, use `lang` attribute for these elements. For example:

```html
<html lang="en">
  <head>
    <title><!-- Title of your page --></title>
  </head>
</html>
```

1. Use this register[https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry] to write the correct language code for the `lang` attribute.

```html
<html lang="en">
  <head>
    <title><!-- Title of your page --></title>
  </head>
  <body>
    <p lang="fr">Texte français</p>
    <p lang="de">Deutscher text</p>
  </body>
</html>
```

1. Always declare the encoding of your document using a `meta` element with a `charset` attribute, or using the `http-equiv` and `content` attributes. The declaration should fit completely within the first 1024 bytes at the start of the file, so it's best to put it immediately after the opening `head` tag. For example:

```html
<html lang="en">
  <head>
    <title><!-- Title of your page --></title>
  </head>
  <meta charset="utf-8" />
</html>
```

or

```html
<html lang="en">
  <head>
    <title><!-- Title of your page --></title>
  </head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</html>
```

1. Make sure that the links on your site work correctly when you select different languages. If the content on your site isn't fully translated and some link leads to a page that is written in another language , it will be good practice to warn the user about it.

1. Make sure that the images on your site are displayed correctly. If your site contains images containing text, don't forget to make a separate copy of the images for all languages. However, this creates a number of difficult points that you will need to solve. First, you need to come up with a process in which images with all languages will be changed, minified and uploaded to the server. Secondly, you need to make sure that the user loads only those pictures that he needs. Don't allow a situation when the user uploads several identical pictures with translations of the text (until he switches the language on site).

TODO: Adde examples

Therefore, if possible, replace the images with text on clean images and overlay the text separately using HTML and CSS. It will be better for you and your users:)

1. Перенаправляйте пользователей на версию сайта на их языке, для этого используйте настройки системы пользователя. Также важным элементом для мультиязычнях сайтов является переключатель языков. Он должен доступен на всех страницах и максимально понятным пользователю. Хорошей практикой будет сделать его отдельным выпадающим списком с лейблом "Other languages". Мое мнение, что использование логотипа для смены языка плохое решений, потому что новый пользователь не знаком с вашим интерфейсом и если он хочет быстро сменить язык и продолжить использование вашего сайта, ему будет проще воспользоваться поиском по сайту и сразу преключить язык на котором ему будет комфортнее.

1. Даже если вы сделали автоматически выбор языка и он отлично работает не забудьте сделать переключатель для смены языка и он должен быть легкодоступным и понятным пользователю. Да, я считюа это тоже работа фронтенд разработчика заботится об удобстве пользователя. Мы же с вами разрабатываем интерфесы для людей и нам важен их комфорт:)

1. Не забывайте, что не все языки читаются одинаково. Например языки на котором говорят на Ближнем Востоке читаются справа на лево и вам нужно это учитывать, если вас сайт поддерживает эти языки. Вы можете приминять специальные классы и стилизовать с помощью CSS выравнивание текста и блоков по правой стороне, но это будет не лучшее решений. Хорошей практикой для установки направления текста будет использование атрибут `dir` со значением `rtl` (справа налево). Because text direction is semantically tied to content and not to presentation.

```html
<body>
  <p>
    This paragraph is in English and correctly goes left to right.
  </p>
  <p>هذه الفقرة باللغة العربية ولكن بشكل خاطئ من اليسار إلى اليمين.</p>
</body>
```

Поробнее на эту темы пишет Robert Dodis for Smashing Magazine[https://www.smashingmagazine.com/2017/11/right-to-left-mobile-design/]

1. Будьте уверены что пользователь понимает, что вы от него хотите. Проверьте, чтобы все сообщения об ошибках или капчи (если вы используете собственные решения основанные на тексте) используют язык, который выбрал пользователь.

1. При использовании масок для телефона (либо любых других) будьте уверены, что они корректно работают для всех типов номеров (но все же лучше не использовать решения, которые будут ограничивать пользователя), будет очень плохо если клиент уйдет так и не оставив свои данные.

1. Помните, что не в каждой стране используется один и тот же формат даты. For example, in the UK and Europe it’s common to format the date as date-month-year, whereas in the U.S. it’s formatted month-date-year. You may also need to translated units of measure, depending on your target audience. While 90% of the world uses the metric system, the U.S., Liberia and Myanmar still use the Imperial system of weights and measures.

1. Using icons also has a number of limitations. For example, icons indicating the direction will need to be expanded for languages that are readable from right to left. Some icons may seem offensive to people of some nationalities. And some icons may simple be incomprehensible to users because the development wasn't taken into account cultural characteristics. So think carefully about the choice of icons for your interface.

1. Don't forget to inform the search engines about the alternative versions of your site. To do this, you need to use `hreflang` and `rel` attributes for the `link` element. The `hreflang` attribute descibes the language of the linked resource. And the `rel` attribute specifies the relationship of the target object to the link object.

```html
<link rel="alternate" href="http://example.com.de/" hreflang="de" />
<link rel="alternate" href="http://example.com.de/it/" hreflang="it" />
<link rel="alternate" href="http://example.com.de/es/" hreflang="es" />
<link rel="alternate" href="http://example.com.de/en/" hreflang="en" />
```

1. Use culturally appropriate colors. Color plays a major role in the design, but you must also remember that the symbolism of color can vary from culture to culture. When you choosing a color for your multilingual sites, you should study the article from the Shutterstock blog[https://www.shutterstock.com/blog/color-symbolism-and-meanings-around-the-world]. This article will also answer the question: "Why are Twitter, Facebook and LinkedIn so blue?":D

1. Check how all interface elements and content in different languages behave. A line of text written in one language can be much larger than in another. It's not so scary in blocks with a lot of text (any multiline text will quietly surviev a few new lines), but it can greatly affect on title, links, labels, or buttons. Check that the overflow doesn't break these elements, and gently transferred to a new line.

1. Check the readability of the text for all languages, perhaps for some of the languages should slightly increase or decrease the forn size (especially be careful of Middle Eastern languages).

I gave just a part of the tips and things that you should pay attention to when developing multilingual sites. If tou have intresting articles on this subject, let me know and I'll leave a link to them:)

### References

1. https://www.w3.org/International/questions/qa-html-language-declarations
1. https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang
1. https://www.w3.org/International/questions/qa-html-encoding-declarations
1. https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir
1. https://www.ionos.com/digitalguide/online-marketing/search-engine-marketing/hreflang-basics-examples-and-common-errors/
1. https://www.shutterstock.com/blog/color-symbolism-and-meanings-around-the-world
1. https://www.smashingmagazine.com/2017/11/right-to-left-mobile-design/
