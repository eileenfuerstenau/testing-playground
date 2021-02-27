import {add} from './math'

describe('lib/math', () => {
    describe('add', () => {
        it('returns the sum of 4 + 3, which is 7', () => {
            const result = add(4,3)
        expect(result).toBe(7)
        })

        it('returns the sum of -4 and -3, which is -7', () => {
            const result = add(-4,-3)
        expect(result).toBe(-7)
        })

        it('returns the sum of 0 and 5, which is 5', () => {
            const result = add(0,5)
        expect(result).toBe(5)
        })

        it('returns the sum of 1,2,3,4,5 (=15)', () => {
            const result = add(1,2,3,4,5)
        expect(result).toBe(15)
        })
    })
})