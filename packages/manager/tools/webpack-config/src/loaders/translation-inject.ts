import { get, merge, pick } from 'lodash';
import { getOptions } from 'loader-utils';
import { Parser } from 'acorn';
import componentConfig from '@ovh-ux/component-rollup-config';
import dynamicImport from 'acorn-dynamic-import';

export = function injectTranslationsLoader(source) {
  const options = merge({ filtering: false }, getOptions(this));
  const translationInject = get(componentConfig, 'plugins.translationInject');
  const parser = Parser.extend(dynamicImport);

  return get(translationInject(pick(options, ['subdirectory', 'filtering'])).transform.bind({
    parse: (code, opts = {}) => parser.parse(code, merge({
      ecmaVersion: 9,
      sourceType: 'module',
    }, opts)),
  })(source, this.resourcePath), 'code', source);
};
