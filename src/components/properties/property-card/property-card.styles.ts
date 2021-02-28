import tw, { css, styled } from 'twin.macro'

export const StyledPropertyCard = styled.article(() => [
  tw`grid grid-cols-3 h-44 cursor-pointer rounded-lg shadow-lg overflow-hidden transition-shadow duration-500`,
  css`
    figure {
      ${tw`relative flex items-center w-full h-full`};

      img {
        ${tw`absolute h-full w-full object-cover`}
      }

      button {
        ${tw`absolute opacity-0 z-10 flex items-center justify-center w-7 h-7 bg-gray-50 bg-opacity-80 rounded-full transform transition duration-300 hover:scale-105 focus:outline-none`};

        svg {
          ${tw`w-4 h-4 text-gray-600 stroke-2 stroke-current`}
        }
      }

      button:first-of-type {
        ${tw`rotate-180 left-2`}
      }

      button:last-of-type {
        ${tw`right-2`}
      }
    }

    > div {
      ${tw`col-span-2 p-4 space-y-3.5 bg-gray-50`};

      > div:first-of-type {
        ${tw`flex items-start justify-between flex-col-reverse sm:flex-row`};

        p {
          ${tw`text-xs tracking-wide px-2.5 py-0.5 rounded-lg text-gray-50 bg-primary-default`}
        }

        > div {
          ${tw`space-y-3 mb-2 sm:mb-0`};

          > div {
            ${tw`flex items-center space-x-1`};

            svg {
              ${tw`w-4 h-4 text-gray-500 fill-current`}
            }

            span {
              ${tw`text-sm text-gray-600`}
            }
          }
        }
      }

      > div:last-of-type {
        ${tw`space-y-1.5`};

        h2 {
          ${tw`font-semibold text-lg leading-tight`}
        }

        div {
          ${tw`flex items-center space-x-2 text-xs uppercase font-semibold tracking-wide text-gray-600`}
        }
      }
    }
  `,
])
