import { capitalise } from './stringUtils';

const capitaliseTestCases = [
    ['hello', 'Hello'],
    ['hello world', 'Hello World'],
    ['hello woRLd', 'Hello WoRLd'],
    ['hello world!', 'Hello World!'],
    ['0000', '0000'],
    ['hello world 123', 'Hello World 123'],
    ['hello World 123!', 'Hello World 123!'],
    ['!!!!!', '!!!!!'],
];

test.each(capitaliseTestCases)('capitalize(%s) should return %s', (input, expected) => {
    expect(capitalise(input)).toBe(expected);
})
