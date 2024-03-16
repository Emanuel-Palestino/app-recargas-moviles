import { FC } from "react"
import { StyleSheet, Text, View } from "react-native"
import { BotonOperadora } from "./BotonOperadora"


const operadoras: { etiqueta: string, valor: string }[] = [
	{ etiqueta: 'Telcel', valor: 'telcel' },
	{ etiqueta: 'Movistar', valor: 'movistar' },
	{ etiqueta: 'AT&T', valor: 'att' }
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
							etiqueta={op.etiqueta}
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