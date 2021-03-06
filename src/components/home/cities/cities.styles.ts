import tw, { css, styled } from 'twin.macro'

export const StyledCities = styled.section(() => [
  tw`px-4 sm:px-8 pt-4 pb-14`,
  css`
    h2 {
      ${tw`text-lg sm:text-xl font-semibold tracking-wide text-gray-600`}
    }

    > div {
      ${tw`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8`};
    }
  `,
])
