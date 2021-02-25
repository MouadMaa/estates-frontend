import { FC } from 'react'
import Link from 'next/link'
import 'twin.macro'

import { StyledLink } from './text-link.styles'

interface TextLinkProps {
  href: string
  text: string
}

const TextLink: FC<TextLinkProps> = (props) => {
  const { href, text } = props

  return (
    <Link href={href}>
      <StyledLink className='group'>
        <span>{text}</span>
        <svg
          tw='group-hover:translate-x-1'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M15.713 12L9.70202 5.99001L8.28802 7.40401L12.888 12.004L8.28802 16.597L9.70202 18.011L15.713 12Z' />
        </svg>
      </StyledLink>
    </Link>
  )
}

export default TextLink
