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
			${tw`grid grid-cols-2 lg:grid-cols-4 w-full max-w-screen-xl z-10 mt-16 p-2  bg-gray-50 shadow-md rounded-3xl transition-shadow duration-300 hover:shadow-lg`};

			button {
				${tw`text-sm sm:text-base flex items-center py-2 lg:py-3 px-4 lg:px-6 m-1 tracking-wide text-gray-600 rounded-2xl border-2 border-gray-200 cursor-pointer transition-colors duration-300 hover:bg-gray-100 focus:outline-none`};
			}

			button:last-child {
				${tw`text-sm sm:text-base lg:col-auto flex items-center justify-center m-1 py-2 px-1 space-x-2 rounded-2xl text-gray-50 bg-primary-default border-2 border-primary-dark transition-colors duration-300 hover:bg-primary-dark focus:outline-none`};

				svg {
					${tw`hidden sm:inline-block w-5 h-5 stroke-current stroke-2`};
				}
			}
		}
	`,
])
