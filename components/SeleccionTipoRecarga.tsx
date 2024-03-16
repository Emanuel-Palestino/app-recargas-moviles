import { Picker } from "@react-native-picker/picker"
import { FC } from "react"
import { StyleSheet, Text, View } from "react-native"


interface SeleccionTipoRecargaProps {
	setTipoRecarga: (tipoRecarga: string) => void
	tipoRecarga: string
}

export const SeleccionTipoRecarga: FC<SeleccionTipoRecargaProps> = ({ setTipoRecarga, tipoRecarga }) => {

	return (
		<View style={styles.contenedor}>
			<Text
				style={styles.titulo}
			>
				Tipo de Recarga
			</Text>

			<View style={styles.picker} >
				<Picker
					selectedValue={tipoRecarga}
					onValueChange={setTipoRecarga}
				>
					<Picker.Item label="Normal" value="normal" />
					<Picker.Item label="Plan Amigo" value="amigo" />
					<Picker.Item label="Internet" value="internet" />
				</Picker>
			</View>
		</View >
	)

}

const styles = StyleSheet.create({
	contenedor: {
		width: '100%',
		rowGap: 10
	},
	titulo: {
		textAlign: 'center',
		color: 'gray'
	},
	picker: {
		width: '100%',
		borderWidth: 1,
		borderRadius: 10,
		borderColor: 'gray'
	}
})