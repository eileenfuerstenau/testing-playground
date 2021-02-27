import {commaSeparatedToArray} from './string'

describe('lib/string', () => {
    describe('commaSeparatedToArray', () => {
        it('returns["a", "b"] for text "a,b"', () => {
            const result = commaSeparatedToArray('A,B')
            expect(result).toStrictEqual(['A', 'B'])
        })
        it('returns["a", "b"] for text "A , B"', () => {
            const result = commaSeparatedToArray('A , B')
            expect(result).toStrictEqual(['A', 'B'])
        })
        it('returns["a b", "c"] for text "a b, c"', () => {
            const result = commaSeparatedToArray('A B , C')
            expect(result).toStrictEqual(['A B', 'C'])
        })
        it('returns["Jane", "John", "Karla"] for text "Jane, John,Karla"', () => {
            const result = commaSeparatedToArray('Jane, John,Karla')
            expect(result).toStrictEqual(['Jane', 'John', 'Karla'])
        })
        // it('returns the array in ascending alphabetical order')
        it('returns["Ali", "Bob", "Cesar"] for text "Cesar, Ali, Bob"', ()=> {
            const result = commaSeparatedToArray('Cesar, Bob, Ali')
            expect(result).toStrictEqual(['Ali', 'Bob', 'Cesar'])
        })
        // it.todo('contains each string only once in the resulting array')
        it('returns["Bike", "Car"] for text "Bike, Bike, Car"', ()=> {
            const result = commaSeparatedToArray('Bike, Bike, Car')
            expect(result).toStrictEqual(['Bike', 'Car'])
        })
        // it.todo('it returns all items in title case')
        it('returns["Ali", "Bob", "Cesar"] for text "ali, bob, cesar"', ()=> {
            const result = commaSeparatedToArray('ali, bob, cesar')
            expect(result).toStrictEqual(['Ali', 'Bob', 'Cesar'])
        })
        
    })
})