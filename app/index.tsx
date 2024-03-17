import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Pressable, StyleSheet, Text, View } from 'react-native'


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aplicación de Recargas</Text>

      <Link href='/recargar' style={styles.boton} asChild>
        <Pressable>
          <Text style={styles.textoBoton}>Realizar Recarga</Text>
        </Pressable>
      </Link>

      <Link href='/clientes' style={styles.boton} asChild>
        <Pressable>
          <Text style={styles.textoBoton}>Cartera de Clientes</Text>
        </Pressable>
      </Link>

      <Link href='/reportes' style={styles.boton} asChild>
        <Pressable>
          <Text style={styles.textoBoton}>Reporte de Ventas</Text>
        </Pressable>
      </Link>
      <StatusBar style="auto" />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    rowGap: 20
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  boton: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f78c50',
    borderRadius: 10,
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBoton: {
    fontSize: 18,
    color: '#fff'
  }
})
