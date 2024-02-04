import { screen } from '@testing-library/react'

import { Footer } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Footer />', () => {
  it('should render the footer', () => {
    const { container } = renderWithTheme(<Footer />)
    const copyright = `© ${new Date().getFullYear()} Resultados Digitais`

    expect(
      screen.getByRole('link', { name: /política de privacidade/i })
    ).toBeInTheDocument()
    expect(screen.getByText(copyright)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
