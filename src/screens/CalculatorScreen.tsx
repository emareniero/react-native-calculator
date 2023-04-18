import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/AppTheme';
import {BotonCalc} from '../components/BotonCalc';
import {useCalculadora} from '../hooks/useCalculadora';

export const CalculatorScreen = () => {
  const {
    calcular,
    btnSumar,
    btnRestar,
    btnDividir,
    btMultiplicar,
    btnDelete,
    positivoNegativo,
    armarNumero,
    limpiar,
    numero,
    numeroAnterior,
  } = useCalculadora();

   return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}

      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc color="rgba(222, 10, 120, 0.8)" texto="C" accion={limpiar} />
        <BotonCalc color="rgba(222, 10, 120, 0.8)" texto="+/-" accion={positivoNegativo} />
        <BotonCalc color="rgba(222, 10, 120, 0.8)" texto="del" accion={btnDelete} />
        <BotonCalc color="hotpink" texto="/" accion={btnDividir} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="7" accion={armarNumero} />
        <BotonCalc texto="8" accion={armarNumero} />
        <BotonCalc texto="9" accion={armarNumero} />
        <BotonCalc color="hotpink" texto="x" accion={btMultiplicar} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="4" accion={armarNumero} />
        <BotonCalc texto="5" accion={armarNumero} />
        <BotonCalc texto="6" accion={armarNumero} />
        <BotonCalc color="hotpink" texto="-" accion={btnRestar} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="1" accion={armarNumero} />
        <BotonCalc texto="2" accion={armarNumero} />
        <BotonCalc texto="3" accion={armarNumero} />
        <BotonCalc color="hotpink" texto="+" accion={btnSumar} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="0" ancho accion={armarNumero} />
        <BotonCalc texto="." accion={armarNumero} />
        <BotonCalc color="hotpink" texto="=" accion={calcular} />
      </View>
    </View>
  );
};
