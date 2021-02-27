import tw, { css, styled } from 'twin.macro'

export const StyledSearchButton = styled.button(({ show }: { show: boolean }) => [
  tw`hidden sm:flex items-center p-0.5 space-x-6 border-2 rounded-2xl cursor-pointer pointer-events-none opacity-0 transform scale-50 translate-y-6 origin-center transition duration-300 focus:outline-none`,
  css`
    span {
      ${tw`text-sm text-gray-400 ml-2 select-none`};
    }

    div {
      ${tw`flex items-center justify-center p-2 space-x-3 rounded-xl text-gray-50 bg-primary-default transition duration-300 group-hover:bg-primary-dark`};

      svg {
        ${tw`w-4 h-4 stroke-current stroke-2`};
      }
    }
  `,
  show && [tw`scale-100 translate-y-0 opacity-100 pointer-events-auto`],
])
