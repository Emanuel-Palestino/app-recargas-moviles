import { Picker } from "@react-native-picker/picker"
import { FC } from "react"
import { StyleSheet, Text, View } from "react-native"


interface SeleccionTipoClienteProps {
	setTipoCliente: (tipoCliente: string) => void
	tipoCliente: string
}

export const SeleccionTipoCliente: FC<SeleccionTipoClienteProps> = ({ tipoCliente, setTipoCliente }) => {

	return (
		<View style={styles.contenedor}>
			<Text style={styles.titulo}>
				Tipo de Cliente
			</Text>

			<View style={styles.picker}>
				<Picker
					selectedValue={tipoCliente}
					onValueChange={setTipoCliente}
				>
					<Picker.Item label="Cliente Nuevo" value="nuevo" />
					<Picker.Item label="Cliente Registrado" value="cliente" />
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