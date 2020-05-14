module.exports = {
	extends: 'stylelint-config-recommended',
	plugins: ['stylelint-order'],
	rules: {
		'at-rule-empty-line-before': ['always', {
			except: ['blockless-after-same-name-blockless', 'first-nested'],
			ignore: ['after-comment'],
		}],
		'at-rule-name-case': 'lower',
		'at-rule-name-space-after': 'always',
		'at-rule-no-unknown': [true, {
			ignoreAtRules: [
				'at-root',
				'debug',
				'each',
				'else',
				'elseif',
				'error',
				'extend',
				'for',
				'function',
				'if',
				'include',
				'mixin',
				'return',
				'warn',
				'while',
			],
		}],
		'at-rule-no-vendor-prefix': true,
		'at-rule-semicolon-newline-after': 'always',
		'at-rule-semicolon-space-before': 'never',
		'block-closing-brace-newline-after': 'always',
		'block-closing-brace-newline-before': 'always-multi-line',
		'block-closing-brace-space-before': 'always-single-line',
		'block-opening-brace-newline-after': 'always-multi-line',
		'block-opening-brace-space-after': 'always-single-line',
		'block-opening-brace-space-before': 'always',
		'color-hex-case': 'upper',
		'color-hex-length': 'long',
		'color-named': 'never',
		'comment-empty-line-before': ['always', {
			except: ['first-nested'],
			ignore: ['stylelint-commands'],
		}],
		'comment-whitespace-inside': 'always',
		'declaration-bang-space-after': 'never',
		'declaration-bang-space-before': 'always',
		'declaration-block-no-redundant-longhand-properties': true,
		'declaration-block-semicolon-newline-after': 'always',
		'declaration-block-semicolon-newline-before': 'never-multi-line',
		'declaration-block-semicolon-space-before': 'never',
		'declaration-block-single-line-max-declarations': 1,
		'declaration-block-trailing-semicolon': 'always',
		'declaration-colon-space-after': 'always',
		'declaration-colon-space-before': 'never',
		'declaration-empty-line-before': 'never',
		'font-family-name-quotes': 'always-where-recommended',
		'font-weight-notation': 'numeric',
		'function-comma-newline-after': 'always-multi-line',
		'function-comma-newline-before': 'never-multi-line',
		'function-comma-space-after': 'always-single-line',
		'function-comma-space-before': 'never',
		'function-max-empty-lines': 0,
		'function-name-case': 'lower',
		'function-parentheses-newline-inside': 'always-multi-line',
		'function-parentheses-space-inside': 'never-single-line',
		'function-url-quotes': ['always', {
			except: ['empty'],
		}],
		'function-whitespace-after': 'always',
		indentation: ['tab', {
			ignore: 'inside-parens',
		}],
		'length-zero-no-unit': true,
		'max-nesting-depth': [3, {
			ignore: ['blockless-at-rules', 'pseudo-classes'],
			ignoreAtRules: ['include', 'media'],
		}],
		'media-feature-colon-space-after': 'always',
		'media-feature-colon-space-before': 'never',
		'media-feature-name-case': 'lower',
		'media-feature-name-no-vendor-prefix': true,
		'media-feature-parentheses-space-inside': 'never',
		'media-feature-range-operator-space-after': 'always',
		'media-feature-range-operator-space-before': 'always',
		'media-query-list-comma-newline-after': 'always',
		'media-query-list-comma-newline-before': 'never-multi-line',
		'media-query-list-comma-space-before': 'never',
		'no-descending-specificity': null,
		'no-empty-first-line': true,
		'no-eol-whitespace': true,
		'no-missing-end-of-source-newline': true,
		'number-leading-zero': 'always',
		'number-max-precision': 3,
		'number-no-trailing-zeros': true,
		'property-case': 'lower',
		'property-no-vendor-prefix': true,
		'rule-empty-line-before': ['always-multi-line', {
			ignore: ['after-comment', 'first-nested'],
		}],
		'selector-attribute-brackets-space-inside': 'never',
		'selector-attribute-operator-space-after': 'never',
		'selector-attribute-operator-space-before': 'never',
		'selector-attribute-quotes': 'always',
		'selector-class-pattern': '^[a-z_]{1}[a-z0-9_]+$',
		'selector-combinator-space-after': 'always',
		'selector-combinator-space-before': 'always',
		'selector-descendant-combinator-no-non-space': true,
		'selector-list-comma-newline-after': 'always',
		'selector-list-comma-newline-before': 'never-multi-line',
		'selector-list-comma-space-before': 'never',
		'selector-no-vendor-prefix': true,
		'selector-pseudo-class-case': 'lower',
		'selector-pseudo-class-parentheses-space-inside': 'never',
		'selector-pseudo-element-case': 'lower',
		'selector-pseudo-element-colon-notation': 'double',
		'selector-type-case': 'lower',
		'string-quotes': 'single',
		'unit-case': 'lower',
		'value-keyword-case': 'lower',
		'value-list-comma-newline-after': 'always-multi-line',
		'value-list-comma-newline-before': 'never-multi-line',
		'value-list-max-empty-lines': 0,
		'value-no-vendor-prefix': true,
		'order/order': [
			'custom-properties',
			'dollar-variables',
			'at-variables',
			{ type: 'at-rule', hasBlock: false },
			'less-mixins',
			'declarations',
			'rules',
			{ type: 'at-rule', hasBlock: true },
		],
		'order/properties-order': [
			[
				{
					groupName: 'position',
					properties: [
						'position',
						'top',
						'right',
						'bottom',
						'left',
						'inset',
						'inset-block',
						'inset-block-start',
						'inset-block-end',
						'inset-inline',
						'inset-inline-start',
						'inset-inline-end',
						'z-index',
					],
				},
				{
					groupName: 'layout',
					properties: [
						'align-content',
						'align-items',
						'align-self',
						'page-break-after',
						'break-after',
						'page-break-before',
						'break-before',
						'page-break-inside',
						'break-inside',
						'clear',
						'grid-column-gap',
						'column-gap',
						'display',
						'flex',
						'flex-basis',
						'flex-direction',
						'flex-flow',
						'flex-grow',
						'flex-shrink',
						'flex-wrap',
						'float',
						'grid-gap',
						'gap',
						'grid',
						'grid-area',
						'grid-auto-columns',
						'grid-auto-flow',
						'grid-auto-rows',
						'grid-column-start',
						'grid-column-end',
						'grid-column',
						'grid-row-start',
						'grid-row-end',
						'grid-row',
						'grid-template',
						'grid-template-areas',
						'grid-template-columns',
						'grid-template-rows',
						'justify-content',
						'justify-items',
						'justify-self',
						'object-fit',
						'object-position',
						'order',
						'overflow',
						'overflow-x',
						'overflow-y',
						'place-content',
						'place-items',
						'place-self',
						'resize',
						'grid-row-gap',
						'row-gap',
						'shape-image-threshold',
						'shape-margin',
						'shape-outside',
						'table-layout',
						'vertical-align',
						'writing-mode',
					],
				},
				{
					groupName: 'box model',
					properties: [
						'box-sizing',
						'margin',
						'margin-top',
						'margin-right',
						'margin-bottom',
						'margin-left',
						'margin-block',
						'margin-block-start',
						'margin-block-end',
						'margin-inline',
						'margin-inline-start',
						'margin-inline-end',
						'border',
						'border-width',
						'border-style',
						'border-color',
						'border-top',
						'border-top-width',
						'border-top-style',
						'border-top-color',
						'border-right',
						'border-right-width',
						'border-right-style',
						'border-right-color',
						'border-bottom',
						'border-bottom-width',
						'border-bottom-style',
						'border-bottom-color',
						'border-left',
						'border-left-width',
						'border-left-style',
						'border-left-color',
						'border-block',
						'border-block-width',
						'border-block-style',
						'border-block-color',
						'border-block-start',
						'border-block-start-width',
						'border-block-start-style',
						'border-block-start-color',
						'border-block-end',
						'border-block-end-width',
						'border-block-end-style',
						'border-block-end-color',
						'border-inline',
						'border-inline-width',
						'border-inline-style',
						'border-inline-color',
						'border-inline-start',
						'border-inline-start-width',
						'border-inline-start-style',
						'border-inline-start-color',
						'border-inline-end',
						'border-inline-end-width',
						'border-inline-end-style',
						'border-inline-end-color',
						'border-collapse',
						'border-image',
						'border-image-source',
						'border-image-slice',
						'border-image-width',
						'border-image-outset',
						'border-image-repeat',
						'border-radius',
						'border-top-left-radius',
						'border-top-right-radius',
						'border-bottom-left-radius',
						'border-bottom-right-radius',
						'border-start-start-radius',
						'border-start-end-radius',
						'border-end-start-radius',
						'border-end-end-radius',
						'border-spacing',
						'padding',
						'padding-top',
						'padding-right',
						'padding-bottom',
						'padding-left',
						'padding-block',
						'padding-block-start',
						'padding-block-end',
						'padding-inline',
						'padding-inline-start',
						'padding-inline-end',
						'width',
						'min-width',
						'max-width',
						'height',
						'min-height',
						'max-height',
						'block-size',
						'min-block-size',
						'max-block-size',
						'inline-size',
						'min-inline-size',
						'max-inline-size',
					],
				},
				{
					groupName: 'typography',
					properties: [
						'direction',
						'font',
						'font-family',
						'font-feature-settings',
						'font-kerning',
						'font-language-override',
						'font-optical-sizing',
						'font-size',
						'font-size-adjust',
						'font-stretch',
						'font-style',
						'font-synthesis',
						'font-variant',
						'font-variant-alternates',
						'font-variant-caps',
						'font-variant-east-asian',
						'font-variant-ligatures',
						'font-variant-numeric',
						'font-variant-position',
						'font-weight',
						'hanging-punctuation',
						'hyphens',
						'letter-spacing',
						'line-break',
						'line-height',
						'orphans',
						'overflow-wrap',
						'quotes',
						'tab-size',
						'text-align-last',
						'text-align',
						'text-combine-upright',
						'text-decoration',
						'text-decoration-color',
						'text-decoration-line',
						'text-decoration-skip-ink',
						'text-decoration-skip',
						'text-decoration-style',
						'text-emphasis',
						'text-emphasis-color',
						'text-emphasis-position',
						'text-emphasis-style',
						'text-indent',
						'text-justify',
						'text-orientation',
						'text-overflow',
						'text-rendering',
						'text-shadow',
						'text-transform',
						'text-underline-position',
						'unicode-bidi',
						'white-space',
						'widows',
						'word-break',
						'word-spacing',
					],
				},
			],
			{ unspecified: 'bottomAlphabetical' },
		],
	},
};
