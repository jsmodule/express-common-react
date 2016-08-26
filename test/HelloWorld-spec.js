import { expect } from 'chai';
import HelloWorld from '../src/js/HelloWorld';

describe('HelloWorld', () => {
  let hello;
  beforeEach(() => {
    hello = new HelloWorld();
  });

  it('should return hello world', () => {
    expect(hello.message('World')).to.be.equal('Hello World');
  });
});
