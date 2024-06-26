import { Picker } from "@react-native-picker/picker"
import { FC } from "react"
import { Alert, Pressable, StyleSheet, Text, View } from "react-native"


interface SeleccionMontoRecargaProps {
	setMonto: (monto: string) => void
	monto: string
}

export const SeleccionMontoRecarga: FC<SeleccionMontoRecargaProps> = ({ setMonto, monto }) => {

	return (
		<View style={styles.contenedor}>
			<Text style={styles.titulo}>
				Monto de Recarga
			</Text>

			<View style={styles.contenedorBeneficios}>
				<View style={styles.picker} >
					<Picker
						selectedValue={monto}
						onValueChange={setMonto}
					>
						<Picker.Item label="$10" value="10" />
						<Picker.Item label="$20" value="20" />
						<Picker.Item label="$30" value="30" />
						<Picker.Item label="$50" value="50" />
						<Picker.Item label="$100" value="100" />
						<Picker.Item label="$150" value="150" />
						<Picker.Item label="$200" value="200" />
						<Picker.Item label="$300" value="300" />
						<Picker.Item label="$500" value="500" />
					</Picker>
				</View>

				<Pressable style={styles.botonBeneficios} onPress={() => Alert.alert('Beneficios', 'beneficios')}>
					<Text style={styles.textoBotonBeneficios}>
						Beneficios
					</Text>
				</Pressable>
			</View>

		</View >
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
		width: '50%',
		height: 54,
		padding: 0,
		borderRadius: 10,
		backgroundColor: '#eeeae8',
		flexGrow: 1
	},
	contenedorBeneficios: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10
	},
	botonBeneficios: {
		backgroundColor: 'lightblue',
		paddingHorizontal: 16,
		paddingVertical: 10,
		borderRadius: 10,
	},
	textoBotonBeneficios: {
		color: '#000'
	}
})