import { FC } from "react"
import { Modal, StyleSheet, Text, View } from "react-native"


interface ModalRecargaRealizadaProps {
	abierto: boolean
	onClose: () => void
}

export const ModalRecargaRealizada: FC<ModalRecargaRealizadaProps> = ({ abierto, onClose }) => {

	return (
		<Modal animationType="fade" transparent={true} visible={abierto}>
			<View style={styles.modalContent}>
				<Text>Recarga realizada</Text>
			</View>
		</Modal>
	)

}

const styles = StyleSheet.create({
	modalContent: {
		height: '25%',
		width: '100%',
		backgroundColor: '#25292e',
		borderTopRightRadius: 18,
		borderTopLeftRadius: 18,
		position: 'absolute',
		bottom: 0,
	},
})