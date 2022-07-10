import {divide} from './math';

it('should return 2 with 6 / 2', () => {
    expect(divide(6,2)).toEqual(3);
    expect(divide(6,0)).toEqual(null);
});