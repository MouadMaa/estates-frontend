import tw, { css, styled } from 'twin.macro'

export const StyledHeader = styled.header(
	({ showHeaderBG, showSearch }: { showHeaderBG: boolean; showSearch: boolean }) => [
		tw`sticky top-0 z-40 flex items-center justify-between w-full h-24 px-4 md:px-8 text-gray-50 transition-all ease-out duration-300`,
		css`
			> a {
				${tw`text-xl font-semibold tracking-widest transition-colors`};
			}

			> div {
				${tw`hidden sm:flex items-center p-1 space-x-6 border-2 rounded-2xl cursor-pointer opacity-0 transform scale-50 translate-y-6 origin-center transition duration-300`};

				span {
					${tw`text-sm ml-2`};
				}

				button {
					${tw`flex items-center justify-center p-2 space-x-3 rounded-xl text-gray-50 bg-primary-default focus:outline-none`};

					svg {
						${tw`w-4 h-4 stroke-current stroke-2`};
					}
				}
			}

			nav {
				${tw`flex items-center space-x-2`};

				a {
					${tw`hidden sm:inline-block tracking-wider px-5 py-2 rounded-2xl transition-colors duration-300 hover:bg-gray-50 hover:bg-opacity-5`};
				}

				button {
					${tw`flex items-center justify-between p-1.5 space-x-2 text-gray-600 rounded-2xl bg-gray-50 shadow-sm focus:outline-none`};

					svg {
						${tw`w-6 h-6 fill-current`};
					}
				}
			}
		`,
		showHeaderBG && [
			tw`h-16 text-gray-700 bg-white shadow-sm`,
			css`
				> a {
					${tw`text-primary-default`};
				}

				nav {
					a {
						${tw`hover:bg-gray-100`};
					}

					button {
						${tw`p-1 border-2 border-gray-200`};
					}
				}
			`,
		],
		showSearch && [
			css`
				> div {
					${tw`scale-100 translate-y-0 opacity-100`};
				}
			`,
		],
	],
)
