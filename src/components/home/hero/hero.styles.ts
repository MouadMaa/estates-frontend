import tw, { css, styled } from 'twin.macro'

export const StyledHero = styled.section(() => [
	tw`relative flex items-center justify-center flex-col py-20 bg-gray-600 px-4 sm:px-6 md:px-8 -mt-24`,
	css`
		img {
			${tw`absolute w-full h-full object-cover`};
		}

		> div {
			${tw`absolute inset-0 bg-gradient-to-br from-gray-700 to-transparent`};
		}
	`,
])
