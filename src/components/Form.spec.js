import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Form from './Form'

describe('Form', () => {
    it('starts with a disabled button', () => {
    render (<Form /> )
    expect(screen.getByRole('button')).toBeDisabled()
    })

    it('only has an enabled button, if both inputs are filled', () => {
    render (<Form  />)
    userEvent.type(screen.getByLabelText(/name/i), 'John')
    expect(screen.getByRole('button')).toBeDisabled()
    userEvent.type(screen.getByLabelText(/e-?mail/i), 'eileen@gmail.com')
    expect(screen.getByRole('button')).toBeEnabled()
    })

    it('sends onSubmit with a data object', () => {
        const callback = jest.fn()
        render (<Form onSubmit={callback}/>)
        userEvent.type(screen.getByLabelText(/name/i), 'John')
        userEvent.type(screen.getByLabelText(/e-?mail/i), 'John@mail.com')
        userEvent.click(screen.getByRole('button'))

        expect(callback).toHaveBeenCalledWith({
            name: 'John',
            email: 'John@mail.com'
        })
    }
    )

})


/* it.todo('starts with a disabled button')
it.todo('only has an enabled button, if both inputs are filled)
it.todo('sends onSubmit with a data object') */