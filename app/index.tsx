import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TextInput } from 'react-native'


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aplicación de Recargas</Text>
      <Link href='/recargar'>Recargar</Link>
      <StatusBar style="auto" />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})
