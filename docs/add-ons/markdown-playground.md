---
layout: default
title: Markdown playground
nav_order: 999999
description: "Markdown playground"
parent: Add-ons
---

[Link button](http://example.com/){: .btn }

[Link button](http://example.com/){: .btn .btn-purple }
[Link button](http://example.com/){: .btn .btn-blue }
[Link button](http://example.com/){: .btn .btn-green }

[Link button](http://example.com/){: .btn .btn-outline }

[Button with space](http://example.com/){: .btn .btn-purple .mr-2 }
[Button](http://example.com/){: .btn .btn-blue }

[Button with more space](http://example.com/){: .btn .btn-green .mr-4 }
[Button](http://example.com/){: .btn .btn-blue }

| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

- [ ] hello, this is a todo item
- [ ] hello, this is another todo item
- [x] goodbye, this item is done

{: .highlight }
A paragraph

{: .note }

A paragraph

In Markdown, use the `{: }` wrapper to apply custom classes:

Font size 1
{: .fs-1 }
Font size 2
{: .fs-2 }
Font size 3
{: .fs-3 }
Font size 4
{: .fs-4 }
Font size 5
{: .fs-5 }
Font size 6

```
if (a)
   b=4;
```

#### Thank you to the contributors of Just the Docs!

<ul class="list-style-none">
{% for contributor in site.github.contributors %}
  <li class="d-inline-block mr-1">
     <a href="{{ contributor.html_url }}"><img src="{{ contributor.avatar_url }}" width="32" height="32" alt="{{ contributor.login }}"></a>
  </li>
{% endfor %}
</ul>