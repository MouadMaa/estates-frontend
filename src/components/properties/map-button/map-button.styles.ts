import tw, { css, styled } from 'twin.macro'

export const StyledMapButton = styled.button(() => [
  tw`fixed right-5 bottom-5 flex lg:hidden items-center space-x-2 px-4 py-1 text-gray-50 bg-primary-default rounded-xl shadow-md focus:outline-none`,
  css`
    svg {
      ${tw`w-5 h-5 fill-current`}
    }

    span {
      ${tw`tracking-wider`}
    }
  `,
])
