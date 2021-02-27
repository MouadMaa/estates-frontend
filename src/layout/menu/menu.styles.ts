import tw, { css, styled } from 'twin.macro'

export const StyledMenu = styled.menu(({ showMenu }: { showMenu: boolean }) => [
  tw`relative p-0`,
  css`
    > button {
      ${tw`flex items-center justify-between space-x-2 text-gray-500 rounded-2xl bg-gray-50 shadow-sm focus:outline-none`};
      padding: 5px;

      svg {
        ${tw`w-6 h-6 fill-current`};
      }
    }

    > div {
      ${tw`absolute right-0 mt-2 py-2 w-48 bg-gray-50 rounded-xl overflow-hidden shadow-md select-none pointer-events-none opacity-0 transform scale-75 translate-y-6 transition duration-300`};

      button {
        ${tw`flex w-full px-4 py-2 space-x-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none`};
      }

      div {
        ${tw`w-full h-px mx-2 my-2 bg-gray-200`};
      }
    }
  `,
  showMenu && [
    css`
      > div {
        ${tw`scale-100 translate-y-0 opacity-100 pointer-events-auto`};
      }
    `,
  ],
])
