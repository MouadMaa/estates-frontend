import { FC, Fragment } from 'react'
import { AppProps } from 'next/app'

import Layout from '@/layout/layout.component'
import TwinGlobalStyles from '@/styles/TwinGlobalStyles'

const MyApp: FC<AppProps> = (props) => {
	const { Component, pageProps } = props

	return (
		<Fragment>
			<TwinGlobalStyles />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Fragment>
	)
}

export default MyApp
