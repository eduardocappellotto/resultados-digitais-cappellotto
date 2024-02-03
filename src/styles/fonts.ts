import { Darker_Grotesque, Nunito, Red_Hat_Display } from 'next/font/google'

export const nunito = Nunito({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '700', '800'],
})

export const darkerGrotesque = Darker_Grotesque({
    subsets: ['latin'],
    display: 'swap',
    weight: ['700', '800', '900'],
})

export const redHatDisplay = Red_Hat_Display({
    subsets: ['latin'],
    display: 'swap',
    weight: ['700'],
})