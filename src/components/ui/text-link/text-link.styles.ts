import tw, { css, styled } from 'twin.macro'

export const StyledLink = styled.a(() => [
  tw`flex items-center space-x-1 text-primary-default cursor-pointer transition-colors duration-300 hover:text-primary-dark`,
  css`
    max-width: max-content;

    span {
      ${tw`text-sm font-semibold`}
    }

    svg {
      ${tw`w-4 h-4 fill-current transition-transform duration-300 transform`}
    }
  `,
])
