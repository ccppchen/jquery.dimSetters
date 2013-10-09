(function ($) {
	var originals = {
		'outer': {
			'Width': $.fn.outerWidth,
			'Height': $.fn.outerHeight
		},
		'inner': {
			'Width': $.fn.innerWidth,
			'Height': $.fn.innerHeight
		}
	};

	$.each(['outer', 'inner'], function (i, er) {
		$.each(['Width', 'Height'], function (i, Dim) {
			$.fn[er+Dim] = function () {
				if (
					(er == 'outer' && ((arguments.length == 0) || (arguments.length == 1 && typeof arguments[0] == 'boolean'))) ||
					(er == 'inner' && (arguments.length == 0))
				) {
					return originals[er][Dim].apply(this, arguments);
				}

				var value,
					properties = [],
					dirs = Dim == 'Width' ? ['left', 'right'] : ['top', 'bottom'];

				$.each(dirs, function (i, dir) {
					properties.push('padding-'+dir);
				});

				if (er == 'outer') {
					value = typeof arguments[0] == 'boolean' ? arguments[1] : arguments[0];
					if (typeof arguments[0] == 'boolean' && arguments[0]) {
						$.each(dirs, function (i, dir) {
							properties.push('margin-'+dir);
						});
					}
					$.each(dirs, function (i, dir) {
						properties.push('border-'+dir+'-width');
					});
				}
				else {
					value = arguments[0];
				}

				value = parseFloat(value);
				if (typeof value != 'number' || isNaN(value)) {
					value = 0;
				}

				this.each(function () {
					var $e = $(this);

					$.each(properties, function (i, property) {
						var x = parseFloat($e.css(property));
						x = typeof x == 'number' && !isNaN(x) ? x : 0;
						value -= parseFloat($e.css(property));
					});

					(Dim == 'Width' ? $.fn.width : $.fn.height).call($e, Math.max(value, 0));
				});

				return this;
			};
		});
	});
})(jQuery);