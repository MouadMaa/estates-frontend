import tw, { css, styled } from 'twin.macro'

export const StyledMapButton = styled.button(() => [
  tw`fixed right-5 bottom-5 flex lg:hidden items-center space-x-2 px-5 py-2 text-gray-50 bg-primary-default rounded-xl shadow-md transition-transform duration-300 transform scale-100 focus:outline-none active:scale-95`,
  css`
    svg {
      ${tw`w-5 h-5 fill-current`}
    }

    span {
      ${tw`tracking-wider`}
    }
  `,
])
