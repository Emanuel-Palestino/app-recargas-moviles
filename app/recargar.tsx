import { Link } from "expo-router"
import { Text, View, StyleSheet, Alert, KeyboardAvoidingView, Platform, Pressable, Keyboard } from "react-native"
import { useState } from "react"
import { SeleccionOperadora } from "../components/SeleccionOperadora"
import { SeleccionTipoRecarga } from "../components/SeleccionTipoRecarga"
import { SeleccionMontoRecarga } from "../components/SeleccionMontoRecarga"
import { NumeroCelular } from "../components/NumeroCelular"
import { SeleccionTipoCliente } from "../components/SeleccionTipoCliente"
import { SeleccionCliente } from "../components/SeleccionCliente"
import { ModalRecargaRealizada } from "../components/ModalRecargaRealizada"


const recargar = () => {

  const [operadora, setOperadora] = useState<string>('telcel')
  const [tipoRecarga, setTipoRecarga] = useState<string>('normal')
  const [monto, setMonto] = useState<string>('10')
  const [numeroCelular, setNumeroCelular] = useState<string>('')
  const [confirmacionCelular, setConfirmacionCelular] = useState<string>('')
  const [tipoCliente, setTipoCliente] = useState<string>('nuevo')
  const [cliente, setCliente] = useState<string>('1')

  const [modalAbierto, setModalAbierto] = useState<boolean>(false)

  const realizarRecarga = () => {
    // Comprobar que los números de celular coincidan
    if (numeroCelular !== confirmacionCelular) {
      Alert.alert('Error', 'Los números de celular no coinciden')
      return
    }

    const numeroSanitizado = numeroCelular.replace(/\D/g, '')

    // Comprobar que el número de celular tenga 10 dígitos
    if (numeroSanitizado.length !== 10) {
      Alert.alert('Error', 'El número de celular debe tener 10 dígitos')
      return
    }

    // Ocultar el teclado
    Keyboard.dismiss()

    setModalAbierto(true)

    console.log({
      operadora,
      tipoRecarga,
      monto,
      numeroCelular,
      confirmacionCelular,
      tipoCliente,
      cliente
    })
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Realizar Recarga</Text>

        <SeleccionOperadora setOperadora={setOperadora} operadora={operadora} />

        <SeleccionTipoRecarga setTipoRecarga={setTipoRecarga} tipoRecarga={tipoRecarga} />

        <SeleccionMontoRecarga setMonto={setMonto} monto={monto} />

        <SeleccionTipoCliente setTipoCliente={setTipoCliente} tipoCliente={tipoCliente} />

        {
          tipoCliente === 'nuevo' &&
          <NumeroCelular
            setNumeroCelular={setNumeroCelular}
            setConfirmacionCelular={setConfirmacionCelular}
          />
        }

        {
          tipoCliente === 'cliente' &&
          <SeleccionCliente
            setCliente={setCliente}
            cliente={cliente}
          />
        }

        <View style={{ flex: 1 }} />

        <View style={styles.contenedorAcciones}>
          <Link href='/' style={styles.botonAtras}>Volver</Link>

          <Pressable onPress={realizarRecarga}>
            <Text style={styles.botonRecargar}>Recargar</Text>
          </Pressable>
        </View>
      </View>

      <ModalRecargaRealizada abierto={modalAbierto} onClose={() => { }} />
    </KeyboardAvoidingView>
  )

}

export default recargar

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    rowGap: 18,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  contenedorAcciones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  botonAtras: {
    color: '#f78c50',
    fontSize: 16
  },
  botonRecargar: {
    width: 150,
    backgroundColor: '#f78c50',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center'
  }
})