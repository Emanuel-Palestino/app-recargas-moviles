import { Link } from "expo-router"
import { Text, View, StyleSheet, Alert, KeyboardAvoidingView, Platform, Pressable, Keyboard } from "react-native"
import { useState } from "react"
import { SeleccionOperadora } from "../components/SeleccionOperadora"
import { SeleccionTipoRecarga } from "../components/SeleccionTipoRecarga"
import { SeleccionMontoRecarga } from "../components/SeleccionMontoRecarga"
import { NumeroCelular } from "../components/NumeroCelular"


const recargar = () => {

  const [operadora, setOperadora] = useState<string>('telcel')
  const [tipoRecarga, setTipoRecarga] = useState<string>('normal')
  const [monto, setMonto] = useState<string>('10')
  const [numeroCelular, setNumeroCelular] = useState<string>('')
  const [confirmacionCelular, setConfirmacionCelular] = useState<string>('')

  const recargar = () => {
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

    console.log({
      operadora,
      tipoRecarga,
      monto,
      numeroCelular,
      confirmacionCelular
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

        <NumeroCelular
          setNumeroCelular={setNumeroCelular}
          setConfirmacionCelular={setConfirmacionCelular}
        />

        <View style={{ flex: 1 }} />

        <View style={styles.contenedorAcciones}>
          <Link href='/' style={styles.botonAtras}>Volver</Link>

          <Pressable onPress={recargar}>
            <Text style={styles.botonRecargar}>Recargar</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  )

}

export default recargar

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    rowGap: 20,
    padding: 20
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10
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