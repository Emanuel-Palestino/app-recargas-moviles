import { Link } from "expo-router"
import { Text, View, TextInput, StyleSheet } from "react-native"
import { useState } from "react"
import { SeleccionOperadora } from "../components/SeleccionOperadora"
import { SeleccionTipoRecarga } from "../components/SeleccionTipoRecarga"


const recargar = () => {

  const [operadora, setOperadora] = useState<string>('telcel')
  const [tipoRecarga, setTipoRecarga] = useState<string>('normal')

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Realizar Recarga</Text>

      <SeleccionOperadora setOperadora={setOperadora} operadora={operadora} />

      <SeleccionTipoRecarga setTipoRecarga={setTipoRecarga} tipoRecarga={tipoRecarga} />

      <TextInput
        placeholder="Número celular"
        style={styles.input}
        keyboardType="numeric"
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