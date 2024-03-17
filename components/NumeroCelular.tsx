import { FC } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"


interface NumeroCelularProps {
	setNumeroCelular: (numero: string) => void
	setConfirmacionCelular: (numero: string) => void
}

export const NumeroCelular: FC<NumeroCelularProps> = ({ setNumeroCelular, setConfirmacionCelular }) => {

	return (
		<View style={styles.contenedor}>
			<Text style={styles.titulo}>
				Número Celular
			</Text>

			<TextInput
				style={styles.input}
				keyboardType="numeric"
				onChangeText={setNumeroCelular}
			/>

			<Text style={[styles.titulo, { marginTop: 14 }]}>
				Confirmar Número Celular
			</Text>

			<TextInput
				style={styles.input}
				keyboardType="numeric"
				onChangeText={setConfirmacionCelular}
			/>
		</View>
	)

}

const styles = StyleSheet.create({
	contenedor: {
		width: '100%',
		rowGap: 6
	},
	titulo: {
		color: 'gray'
	},
	input: {
		height: 54,
		borderRadius: 10,
		backgroundColor: '#eeeae8',
		paddingHorizontal: 16,
		fontSize: 16,
		color: '#000',
	}
})