# Front-end Job Interview Questions - HTML Questions

After that you have scheduled the date of the interview, many Frontend developers ask themselves "What awaits me?". This is happening because the world of Frontend development is very vast and includes both basic areas (such as HTML, CSS, JavaScript) and many specific topics (JavaScript frameworks and libraries, writing tests, working with graphics and animation and much more). In preparation for my own interview I looked at a lot of resources, some of which were better, some that caused me only more questions, but the most userful for me was a list of questions Front-end-Developer-Interview-Questions[https://github.com/h5bp/Front-end-Developer-Interview-Questions] and I decided to work on it.

I wrote this note to capture my own answers and maybe start an interesting discussion in the comments. But don't treat my answers as pure truth, I'm a regular developer who can be wrong too:)

You can found the full list of question on GitHub[https://github.com/h5bp/Front-end-Developer-Interview-Questions], the project is actively developing and you can become part of it.

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

1. Redirect users to the version of the site in their language, for this, use the user's system setting. But you can not limit yourself to autmatic language switching, always give the user opportunity to change the language.

1. Based on the previous point, it is important to make a convenient language switch. It's good practice to make it a separate drop-down list with the label "Other langauges". In my opinion using a logo/flag/other graphical elements to change the language is bad practice, because a new user isn't familiar with your interface and if he wants to quickly change the language and continue using your site.

1. Remember that not all languages are read the same way. For example, the languages spoken in the Middle East are read from right to left and you need to take this into account if your site supports these languages. You can add special classes and write styles to align text and blocks on the right side, but this isn't the best solution. It is good practice to set the direction of the text use the `dir` attribute with the value `rtl` (right to left). Because text direction is semantically tied to content and not to a presentation.

```html
<body>
  <p>
    This paragraph is in English and correctly goes left to right.
  </p>
  <p>هذه الفقرة باللغة العربية ولكن بشكل خاطئ من اليسار إلى اليمين.</p>
</body>
```

Read more on this topic by Robert Dodis for Smashing Magazine[https://www.smashingmagazine.com/2017/11/right-to-left-mobile-design/]

1. Be sure that the user understands what you want from him. Make sure that all errors, warnings, tips or captcha (if uou using your own text-based solutions) use the language that the user selected .

1. When you using masks for the phone (or any other) be sure that they work correctly for all types of numbers (but it's better don't use solutions that will limit the user), it will be very bad if the client leaves without leaving his data.

1. Remebmer the differences in the date format. For example, in the UK and Europe it’s common to format the date as date-month-year, whereas in the U.S. it’s formatted month-date-year. You may also need to translated units of measure, depending on your target audience. While 90% of the world uses the metric system, the U.S., Liberia and Myanmar still use the Imperial system of weights and measures.

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

## What are data- attributes good for?

`data-` this attribute was invented to standardize the storage of user data in HTML. You should use the data attribute only be used when there are no other appropriate HTML elements or attributes. Each HTML element can have any number of data attributes.

The most popular case for using the data attribute for me is using them to write tests (e.g. via Jest).

### HTML syntax

The syntax is simple. Any data attribute consists of two elements:

1. the name of the attribute that comes after `data-` (must contain at least one character and may consist of several words that will be separated by a dash)
1. The value of the attribute (string)

This describes an element with three data attributes.

```html
<section
  class="blog"
  data-id="200"
  data-test="blog"
  data-test-value="attribute"
>
  ...
</section>
```

When using data attribute, you need to consider a number of features:

1. All data stored in the data attribute will be ignored by search engines
1. The data isn't completely hidden and the user still has access to it through the code inspector in the browser

### JavaScript access

It is very easy to get data from data attribute via JavaScript. To do this you need to find the element using `querySelector`, then use the property `dataset` and read any data from the data attribute.

```js
const section = document.querySelector(".blog");

section.dataset.id; // 200
section.dataset.test; // blog
section.dataset.testValue; // attribute
```

Note if you use a name for the data attribute consisting of two words, the dashes are converted to camelCase.

### References

1. https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
1. https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*

## Consider HTML5 as an open web platform. What are the building blocks of HTML5?

### References

1. https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5
