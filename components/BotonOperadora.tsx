import { FC } from "react"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"


interface BotonOperadoraProps {
	onSelect: (operadora: string) => void
	imagen: any
	valor: string
	seleccionado?: boolean
}

export const BotonOperadora: FC<BotonOperadoraProps> = ({
	onSelect,
	imagen,
	valor,
	seleccionado = false
}) => {

	return (
		<Pressable
			style={[
				styles.boton,
				seleccionado ? { backgroundColor: '#f8eee8', borderColor: '#f78c50' } : {}
			]}
			onPress={() => onSelect(valor)}
		>
			{/* Select image from assets folder */}
			<Image
				source={imagen}
				style={styles.imagen}
			/>
		</Pressable>
	)

}

const styles = StyleSheet.create({
	boton: {
		backgroundColor: 'white',
		padding: 6,
		flexGrow: 1,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: '#eeeae8',
	},
	imagen: {
		width: 'auto',
		height: 60,
		resizeMode: 'contain'
	}
})