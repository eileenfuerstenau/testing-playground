import { render, screen } from "@testing-library/react"
import Header from "./Header"

describe('Header', () => {
    it('renders the children prop', () => {
        render(<Header>Hello world</Header>)
        screen.debug()
    })
})