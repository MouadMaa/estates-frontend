import tw, { css, styled } from 'twin.macro'

export const StyledHeader = styled.header(({ showHeaderBG }: { showHeaderBG: boolean }) => [
  tw`sticky top-0 z-40 grid grid-cols-2 sm:grid-cols-3 place-items-center w-full h-24 px-4 md:px-8 text-gray-50 transition-all ease-out duration-300`,
  css`
    > a {
      ${tw`text-xl font-semibold tracking-widest transition-colors justify-self-start`};
    }

    nav {
      ${tw`flex items-center space-x-2 justify-self-end`};

      a {
        ${tw`hidden sm:inline-block tracking-wider px-5 py-2 rounded-2xl transition-colors duration-300 hover:bg-gray-50 hover:bg-opacity-5`};
      }
    }
  `,
  showHeaderBG && [
    tw`h-16 text-gray-700 bg-gray-50 shadow-sm`,
    css`
      > a {
        ${tw`text-primary-default`};
      }

      nav {
        a {
          ${tw`hover:bg-gray-100`};
        }

        > menu > button {
          ${tw`p-1 border border-gray-200`};
        }
      }
    `,
  ],
])
