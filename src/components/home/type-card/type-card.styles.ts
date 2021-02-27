import tw, { css, styled } from 'twin.macro'

export const StyledTypeCard = styled.article(() => [
  tw`flex h-20 shadow-sm rounded-lg cursor-pointer overflow-hidden transition-shadow duration-300 hover:shadow`,
  css`
    figure {
      ${tw`relative w-2/6 overflow-hidden`};

      img {
        ${tw`absolute transform transition-transform duration-300 ease-in-out`}
      }

      div {
        ${tw`absolute h-full w-full bg-gray-700 bg-opacity-50`};
      }
    }

    > div {
      ${tw`flex items-center ml-4 sm:ml-6`};

      span {
        ${tw`text-lg tracking-wider text-gray-600`}
      }
    }
  `,
])
