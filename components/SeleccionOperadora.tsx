import { FC } from "react"
import { StyleSheet, Text, View } from "react-native"
import { BotonOperadora } from "./BotonOperadora"


const operadoras: { valor: string, imagen: any }[] = [
	{
		valor: 'telcel',
		imagen: require('../assets/logos/telcel.png')
	},
	{
		valor: 'movistar',
		imagen: require('../assets/logos/movistar.png')
	},
	{
		valor: 'att',
		imagen: require('../assets/logos/att.png')
	}
]

interface SeleccionOperadoraProps {
	setOperadora: (operadora: string) => void
	operadora: string
}

export const SeleccionOperadora: FC<SeleccionOperadoraProps> = ({ setOperadora, operadora }) => {

	return (
		<View style={styles.contenedor}>
			<Text
				style={styles.titulo}
			>
				Compañía Telefónica
			</Text>

			<View style={styles.contenedorBotones}>
				{
					operadoras.map(op => (
						<BotonOperadora
							key={op.valor}
							onSelect={setOperadora}
							seleccionado={operadora === op.valor}
							imagen={op.imagen}
							valor={op.valor}
						/>
					))
				}
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
	contenedorBotones: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 10
	}
})