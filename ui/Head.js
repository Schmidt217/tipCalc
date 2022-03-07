import { Header, Left, Body, Title, Right } from "native-base";

const Head = () => {
	return (
		<Header style={{ backgroundColor: "#aaa" }}>
			<Left />
			<Body>
				<Title>Tip Calculator</Title>
			</Body>
			<Right />
		</Header>
	);
};

export default Head;
