import {Stack} from './stack';

describe('Stack', () => {

  let service: Stack;

  beforeEach(() => {
    service = new Stack();
  });

  it('created an instance', () => {
    expect(service).toBeDefined();
  });

  it('is empty', () => {
    const result = service.isEmpty();

    expect(result).toEqual(true);
  });

  it('is not empty when one element is pushed', () => {
    service.push(1);

    const result = service.isEmpty();

    expect(result).toEqual(false);
  });

  it('is empty again when element is popped out', () => {
    service.push(1);
    service.pop();

    const result = service.isEmpty();

    expect(result).toEqual(true);
  });

  it('gets pushed element', () => {
    const element = 42;
    service.push(element);

    const result = service.pop();

    expect(result).toEqual(element);
  });

  it('is empty when stack gets cleared', () => {
    for (let element = 1; element < 5; element++) {
      service.push(element);
    }

    service.clear();
    const result = service.isEmpty();

    expect(result).toEqual(true);
  });

});

/*
push
pop
isEmpty (/)
clear
 */
