import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Dados fictícios de agendamentos
const agendamentosFicticios = [
  {
    id: '1',
    empresa: {
      nome: 'Empresa 1',
      foto: 'URL_DA_FOTO_1',
    },
    data: '01/09/2023',
    hora: '09:00',
  },
  {
    id: '2',
    empresa: {
      nome: 'Empresa 2',
      foto: 'URL_DA_FOTO_2',
    },
    data: '02/09/2023',
    hora: '14:30',
  },
  // Adicionar mais agendamentos fictícios aqui
];

function ListaAgendamentosScreen() {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    // Implementar a lógica para buscar os agendamentos do servidor.
    // Por enquanto, estamos usando os dados fictícios.
    setAgendamentos(agendamentosFicticios);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.agendamentoContainer}>
      <View style={styles.empresaContainer}>
        <Text style={styles.empresaNome}>{item.empresa.nome}</Text>
        <Text style={styles.empresaDataHora}>
          Data: {item.data} - Hora: {item.hora}
        </Text>
      </View>
      {/* Exibir a foto da empresa aqui */}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Agendamentos</Text>
      <FlatList
        data={agendamentos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  agendamentoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  empresaContainer: {
    flex: 1,
  },
  empresaNome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  empresaDataHora: {
    fontSize: 16,
  },
});

export default ListaAgendamentosScreen;
