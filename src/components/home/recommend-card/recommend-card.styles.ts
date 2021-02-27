import tw, { css, styled } from 'twin.macro'

export const StyledRecommendedCard = styled.article(() => [
  tw`cursor-pointer`,
  css`
    figure {
      ${tw`relative h-52 transform transition-transform duration-300`};

      span {
        ${tw`absolute top-2 right-2 z-10 text-xs font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded-full text-gray-50 bg-primary-default`}
      }

      img {
        ${tw`absolute h-full w-full object-cover rounded-lg shadow-md transition-shadow duration-300`}
      }
    }

    > div {
      ${tw`relative px-4 -mt-14 transform transition duration-500`};

      > div {
        ${tw`bg-gray-50 px-4 py-3 space-y-2 rounded-lg shadow-lg transition-shadow duration-300`}

        h4 {
          ${tw`font-semibold text-lg leading-tight`}
        }

        div {
          ${tw`flex items-center space-x-2 text-xs capitalize font-semibold tracking-wide text-gray-600`}
        }
      }
    }
  `,
])
