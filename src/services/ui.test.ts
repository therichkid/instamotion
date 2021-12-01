import { camelCaseToLabel } from './ui';

describe('ui', () => {
  it('label-cases from a camel-cased string', () => {
    expect(camelCaseToLabel('fooBarBaz')).toBe('Foo Bar Baz');
  });
});
