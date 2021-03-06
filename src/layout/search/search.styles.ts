import tw, { css, styled } from 'twin.macro'

export const StyledSearch = styled.section(({ removePadding }: { removePadding: boolean }) => [
  tw`sticky top-0 z-20 flex items-center justify-center p-4 bg-gray-50 shadow transition-all duration-300 ease-out`,
  css`
    form {
      ${tw`m-0 shadow-none hover:shadow-none`};
      animation: show-search-form 300ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    @keyframes show-search-form {
      0% {
        transform: translateY(-24px) scale(0.5);
      }
      100% {
        transform: translateY(0) scale(1);
      }
    }
  `,
  removePadding ? [tw`pt-4`] : [tw`pt-20`],
])
