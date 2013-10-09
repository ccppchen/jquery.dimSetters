jquery.dimSetters
=================

A jQuery plugin that extends innerWidth(), innerHeight(), outerWidth(), and outerHeight() to make them setters.

API
---

```JavaScript
$(element).innerWidth ()
	/* http://api.jquery.com/innerWidth/ */

$(element).innerWidth (number width)
	/* Set the current computed width of each element in
	   the set of matched elements, including padding but
	   not border. */

$(element).innerHeight ()
	/* http://api.jquery.com/innerHeight/ */

$(element).innerHeight (number height)
	/* Set the current computed height of each element in
	   the set of matched elements, including padding but
	   not border. */

$(element).outerWidth ()
$(element).outerWidth(boolean includeMargin);
	/* http://api.jquery.com/outerWidth/ */

$(element).outerWidth (number width)
	/* Set the current computed width of each element in
	   the set of matched elements, including padding and
	   border. */

$(element).outerWidth (boolean includeMargin, number width)
	/* Set the current computed width of each element in
	   the set of matched elements, including padding and
	   border. If includeMargin is true, margin is also
	   included in the calculation. */

$(element).outerHeight ()
$(element).outerHeight (boolean includeMargin)
	/* http://api.jquery.com/outerHeight/ */

$(element).outerHeight (number height)
	/* Set the current computed height of each element in
	   the set of matched elements, including padding and
	   border. */

$(element).outerHeight (boolean includeMargin, number height)
	/* Set the current computed height of each element in
	   the set of matched elements, including padding and
	   border. If includeMargin is true, margin is also
	   included in the calculation. */
```

Limitations
-----------
* Widths and heights must be pixel values. Values like `50%` or `6em` are interpreted as `50px` and 6px`, respectively.
* Margins, borders, and padding must be pixel values as well. Values like `border-width: 2%` or `margin: 1em` are interpreted as `2px` and `1px`, respectively.
* With outerWidth() and outerHeight(), if you intend to obtain the values including margin using the getters, you must explicitly pass a boolean rather than another type that evaluates to boolean. You can convert any variable or expression to boolean with `!!`, e.g.: `var margins = 1; $(element).outerWidth(!!margins)`.
