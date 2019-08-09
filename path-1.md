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
