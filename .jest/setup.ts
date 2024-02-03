import '@testing-library/jest-dom'
import 'jest-styled-components'

jest.mock('next/font/google', () => ({
    Darker_Grotesque: () => ({
        className: 'darker grotesque'
    }),
    Nunito: () => ({
        className: 'nunito'
    }),
    Red_Hat_Display: () => ({
        className: 'red hat'
    })
}))
