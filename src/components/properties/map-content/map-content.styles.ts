import tw, { css, styled } from 'twin.macro'

export const StyledMap = styled.section(() => [
  tw`sticky top-20 col-span-4 w-full h-full bg-gray-100 rounded-lg shadow-md`,
  css`
    min-height: calc(100vh - 96px);
    max-height: calc(100vh - 96px);
  `,
])
