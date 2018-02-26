import { checkResponseData } from './movieApi';

describe('search response', () => {
  
  it('returns json if response is true', () => {
    const data = { Response: 'True' };
    const output = checkResponseData(data);
    expect(output).toBe(data);
  });

  it('throws an error with data.Error if response is false', () => {
    const data = { Response: 'False', Error: 'This is the error' };
    expect(() => {
      checkResponseData(data);
    }).toThrow(data.Error);
  });
});