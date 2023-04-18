import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'pink',
  },
  calculadoraContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "flex-end"
  },
  resultado: {
    color: "rgba(222, 10, 120, 0.8)",
    fontSize: 60,
    textAlign: "right",
    marginBottom: 10,
  },
  resultadoPequeno: {
    color: "hotpink", // Color blanco con 50% transparencia
    fontSize: 30,
    textAlign: "right"
  },
  fila: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  boton: {
    height: 80,
    width: 80,
    backgroundColor: "#2D2D2D",
    borderRadius: 100,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  botonTexto: {
    textAlign: "center",
    padding: 10,
    fontSize: 30,
    color: "white",
    fontWeight: "300"
  }

});
