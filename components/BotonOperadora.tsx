import { FC } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"


interface BotonOperadoraProps {
	onSelect: (operadora: string) => void
	etiqueta: string
	valor: string
	seleccionado?: boolean
}

export const BotonOperadora: FC<BotonOperadoraProps> = ({
	onSelect,
	etiqueta,
	valor,
	seleccionado = false
}) => {

	return (
		<Pressable
			style={[
				styles.boton,
				seleccionado ? { backgroundColor: 'lightblue', borderColor: 'orange' } : {}
			]}
			onPress={() => onSelect(valor)}
		>
			<Text>{etiqueta}</Text>
		</Pressable>
	)

}

const styles = StyleSheet.create({
	boton: {
		backgroundColor: 'lightgray',
		paddingVertical: 10,
		paddingHorizontal: 16,
		flexGrow: 1,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: 'transparent',
	}
})