import tw, { css, styled } from 'twin.macro'

export const StyledCityCard = styled.article(() => [
  tw`relative flex items-center justify-center w-full h-44 rounded-lg overflow-hidden cursor-pointer shadow-md transition-shadow duration-500 hover:shadow-lg`,
  css`
    img {
      ${tw`absolute transition-transform duration-500 ease-in-out transform`};
    }

    div {
      ${tw`absolute h-full w-full bg-gray-700 bg-opacity-70 transition-opacity duration-500`};
    }

    h3 {
      ${tw`absolute text-xl font-semibold tracking-wider text-white opacity-60 transition-transform duration-500 ease-in-out transform scale-150`}
    }
  `,
])
