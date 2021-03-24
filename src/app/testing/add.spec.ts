import {add} from './add';

describe('Add function', () => {

  it('adds two numbers', () => {
    const result = add(1, 2);

    expect(result).toEqual(3);
  });

  it('adds two different numbers', () => {
    const result = add(4, 49);

    expect(result).toEqual(53);
  });

  it('throws when first parameter is no numbers', () => {
    expect(() => add('1', 2)).toThrow();
  });

  it('throws when second parameter is no numbers', () => {
    expect(() => add(1, '2')).toThrow();
  });

});
