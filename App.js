import { useState } from "react";

import { Button, StyleSheet, TextInput, View } from "react-native";
import { Container, Content } from "native-base";
import Head from "./ui/Head";
import Values from "./ui/Values";

export default function App() {
	const [inputValue, setInputValue] = useState("");
	const [tipPercentage, setTipPercentage] = useState(0.2);

	const updateCustomTip = (customTip) => {
		if (customTip) {
			setTipPercentage(customTip / 100);
		} else {
			setTipPercentage(0);
		}
	};

	return (
		<Container>
			<Head />
			<View style={styles.container}>
				<View style={styles.content}>
					<Values bill={inputValue} tipPercentage={tipPercentage} />
					<View style={styles.inputs}>
						<TextInput
							style={styles.input}
							value={inputValue}
							keyboardType="numeric"
							underlineColorAndroid="#fff"
							onChangeText={setInputValue}
							placeholder="0.00"
							placeholderTextColor="#fff"
						/>
						<View style={styles.buttonGroup}>
							<Button
								color={tipPercentage === 0.1 ? "red" : "#2572f7"}
								title="10%"
								onPress={() => setTipPercentage(0.1)}
							/>
							<Button
								color={tipPercentage === 0.15 ? "red" : "#2572f7"}
								title="15%"
								onPress={() => setTipPercentage(0.15)}
							/>
							<Button
								color={tipPercentage === 0.2 ? "red" : "#2572f7"}
								title="20%"
								onPress={() => setTipPercentage(0.2)}
							/>
							<Button
								color={tipPercentage === 0.25 ? "red" : "#2572f7"}
								title="25%"
								onPress={() => setTipPercentage(0.25)}
							/>
							<TextInput
								style={styles.customTip}
								value={tipPercentage}
								keyboardType="numeric"
								placeholder="Custom"
								underlineColorAndroid="#fff"
								placeholderTextColor="#fff"
								onChangeText={(customTip) => updateCustomTip(customTip)}
							/>
						</View>
					</View>
				</View>
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
		alignItems: "center",
		height: "100%",
		width: "100%",
	},
	content: {
		width: "100%",
	},
	inputs: {
		backgroundColor: "#212121",
		padding: 20,
	},
	input: {
		height: 40,
		width: "100%",
		padding: 5,
		color: "#fff",
	},
	buttonGroup: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	customTip: {
		height: 40,
		fontSize: 13,
		width: 60,
		padding: 5,
		borderColor: "#333",
		borderWidth: 1,
		color: "#fff",
		borderRadius: 5,
	},
});
