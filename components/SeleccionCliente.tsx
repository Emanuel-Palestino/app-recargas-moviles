import { Picker } from "@react-native-picker/picker"
import { FC } from "react"
import { StyleSheet, Text, View } from "react-native"


interface SeleccionClienteProps {
	setCliente: (cliente: string) => void
	cliente: string
}

export const SeleccionCliente: FC<SeleccionClienteProps> = ({ setCliente, cliente }) => {

	return (
		<View style={styles.contenedor}>
			<Text style={styles.titulo}>
				Tipo de Cliente
			</Text>

			<View style={styles.picker}>
				<Picker
					selectedValue={cliente}
					onValueChange={setCliente}
				>
					<Picker.Item label="cliente 1" value="1" />
				</Picker>
			</View>
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
	picker: {
		width: '100%',
		height: 54,
		padding: 0,
		borderRadius: 10,
		backgroundColor: '#eeeae8'
	}
})