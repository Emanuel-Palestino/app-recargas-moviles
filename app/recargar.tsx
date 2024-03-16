import { Link } from "expo-router"
import { Text, View, TextInput, StyleSheet } from "react-native"


const recargar = () => {

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Recargar</Text>
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
  },
  titulo: {
    fontSize: 20,
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