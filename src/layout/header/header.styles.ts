import tw, { css, styled } from 'twin.macro'

export const StyledHeader = styled.header(({ showBG }: { showBG: boolean }) => [
	tw`sticky top-0 z-40 flex items-center justify-between w-full h-24 px-4 md:px-8 text-gray-50 transition-all ease-out duration-300`,
	css`
		> a {
			${tw`text-xl font-semibold tracking-widest transition-colors`};
		}

		nav {
			${tw`flex items-center space-x-2`};

			a {
				${tw`hidden sm:inline-block tracking-wider px-5 py-3 rounded-3xl transition-colors duration-300 hover:bg-gray-50 hover:bg-opacity-5`};
			}

			button {
				${tw`flex items-center justify-between p-2 space-x-2 text-gray-600 rounded-full bg-gray-50 shadow-sm transition-shadow duration-300 hover:shadow-md focus:outline-none`};

				svg {
					${tw`w-6 h-6 fill-current`};
				}
			}
		}
	`,
	showBG && [ tw`h-16 text-gray-700 bg-white shadow-sm` ],
])
