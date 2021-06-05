const Stack = require('../src/stack')

describe('My stack', () => {

    let stack;
    beforeEach(() => {
        stack = new Stack();
    })


    it('is created empty', () => {
        expect(stack.top).toBe(-1)
        expect(stack.items).toEqual({})
    })


    it('can push to the top', () => {
        stack.push('fizz')
        expect(stack.top).toBe(0)
        expect(stack.peek).toBe('fizz')
    })


    it('can pop off', () => {
        stack.push('buzz')
        expect(stack.top).toBe(0)
        expect(stack.peek).toBe('buzz')
        
        stack.pop()
        expect(stack.items).toEqual({})
        expect(stack.top).toBe(-1)
    })
})