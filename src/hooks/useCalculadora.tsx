import { useRef, useState } from "react";

enum Operadores {
    sumar,
    restar,
    multiplicar,
    dividir,
  }

export const useCalculadora = () => {

    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [numero, setNumero] = useState('0');
  
    const ultimaOperaicion = useRef<Operadores>();
  
    const limpiar = () => {
      setNumero('0');
      setNumeroAnterior('0');
    };
  
    const armarNumero = (numeroTexto: string) => {
      // No aceptar doble punto
      if (numero.includes('.') && numeroTexto === '.') return;
  
      // Verificar is empieza con 0 o -0
      if (numero.startsWith('0') || numero.startsWith('-0')) {
        // Punto decimal
        if (numeroTexto === '.') {
          setNumero(numero + numeroTexto);
  
          // Evaluar si es otro cero y hay un punto
        } else if (numeroTexto === '0' && numero.includes('.')) {
          setNumero(numero + numeroTexto);
  
          // Evaluar si es diferente de cero y no tiene un punto
        } else if (numeroTexto !== '0' && !numero.includes('.')) {
          setNumero(numeroTexto);
  
          // Evitar el 00000.00
        } else if (numeroTexto === '0' && !numero.includes('.')) {
          setNumero(numero);
        } else {
          setNumero(numero + numeroTexto);
        }
      } else {
        setNumero(numero + numeroTexto);
      }
    };
  
    const positivoNegativo = () => {
      if (numero.includes('-')) {
        setNumero(numero.replace('-', ''));
      } else {
        setNumero('-' + numero);
      }
    };
  
    const btnDelete = () => {
      let negativo = '';
      let numeroTemp = numero;
  
      if (numero.includes('-')) {
        negativo = '-';
        numeroTemp = numero.substring(1);
      }
  
      if (numeroTemp.length > 1) {
        setNumero(negativo + numeroTemp.slice(0, -1));
      } else {
        setNumero('0');
      }
    };
  
    const cambiarNumPorAnterior = () => {
      if (numero.endsWith('.')) {
        setNumeroAnterior(numero.slice(0, -1));
      } else {
        setNumeroAnterior(numero);
      }
      setNumero('0');
    };
  
    const btnDividir = () => {
      cambiarNumPorAnterior();
      ultimaOperaicion.current = Operadores.dividir;
    };
  
    const btMultiplicar = () => {
      cambiarNumPorAnterior();
      ultimaOperaicion.current = Operadores.multiplicar;
    };
  
    const btnRestar = () => {
      cambiarNumPorAnterior();
      ultimaOperaicion.current = Operadores.restar;
    };
  
    const btnSumar = () => {
      cambiarNumPorAnterior();
      ultimaOperaicion.current = Operadores.sumar;
    };
  
    const calcular = () => {
      const num1 = Number(numero);
      const num2 = Number(numeroAnterior);
  
      switch (ultimaOperaicion.current) {
        case Operadores.sumar:
          setNumero(`${num1 + num2}`);
  
          break;
        case Operadores.restar:
          setNumero(`${num2 - num1}`);
  
          break;
        case Operadores.multiplicar:
          setNumero(`${num1 * num2}`);
  
          break;
        case Operadores.dividir:
          setNumero(`${num2 / num1}`);
  
          break;
      }
  
      setNumeroAnterior('0');
    };

    return {
        calcular,
        btnSumar,
        btnRestar,
        btnDividir,
        btMultiplicar,
        cambiarNumPorAnterior,
        btnDelete,
        positivoNegativo,
        armarNumero,
        limpiar,
        numero,
        setNumero,
        numeroAnterior,
        setNumeroAnterior
    }


}
