import { initializeStore } from '../store'
import Table from "../components/table"
import Test from "../components/test"

// posts will be populated at build time by getStaticProps()
export default function Home(props) {

	return (
		<>
			<Table title={Test} new="sada">
				<ul>
					{props.initialReduxState.list.map((prop) => {
						return <li>{prop.title}</li>
					})}
				</ul>
			</Table>
		</>
	)
}


export async function getServerSideProps() {
	const reduxStore = initializeStore()
	const { dispatch } = reduxStore

	const res = await fetch('https://jsonplaceholder.typicode.com/albums')
	const posts = await res.json()
	dispatch({
		type: 'UPDATE',
		list: posts,
		lastUpdate: Date.now(),
	})
	// const response = fetch('https://jsonplaceholder.typicode.com/albums').then(async res => {
	// 	return await res.json()
	// })
	// dispatch({
	// 	type: 'UPDATE',
	// 	list: response,
	// 	lastUpdate: Date.now(),
	// })

	return { props: { initialReduxState: reduxStore.getState() } }
}