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

		form {
			${tw`grid grid-cols-2 lg:grid-cols-5 w-full max-w-screen-lg z-10 mt-16 p-1 bg-gray-50 shadow-md rounded-3xl transition-shadow duration-300 hover:shadow-lg`};

			button {
				${tw`text-sm flex items-center py-2 px-3 m-1 tracking-wide text-gray-600 rounded-2xl border-2 border-gray-200 cursor-pointer transition-colors duration-300 hover:bg-gray-100 focus:outline-none`};
			}

			button:last-of-type {
				${tw`text-sm flex items-center justify-center space-x-2 rounded-2xl text-gray-50 bg-primary-default border-2 border-primary-dark transition-colors duration-300 hover:bg-primary-dark focus:outline-none`};

				svg {
					${tw`hidden sm:inline-block w-4 h-4 stroke-current stroke-2`};
				}
			}
		}
	`,
])
