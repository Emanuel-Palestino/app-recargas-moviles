import { Link } from "expo-router"
import { Text, View, TextInput, StyleSheet } from "react-native"
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

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Realizar Recarga</Text>

      <SeleccionOperadora setOperadora={setOperadora} operadora={operadora} />

      <SeleccionTipoRecarga setTipoRecarga={setTipoRecarga} tipoRecarga={tipoRecarga} />

      <SeleccionMontoRecarga setMonto={setMonto} monto={monto} />

      <NumeroCelular
        setNumeroCelular={setNumeroCelular}
        setConfirmacionCelular={setConfirmacionCelular}
      />

      <Link href='/'>Volver</Link>
    </View>
  )

}

export default recargar

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    rowGap: 20,
    padding: 20
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
  }
})