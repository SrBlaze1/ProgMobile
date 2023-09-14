import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function AgendamentoScreen({ route, navigation }) {
  const [endereco, setEndereco] = useState(route.params.usuarioLocalizacao || '');
  const [complemento, setComplemento] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');

  const handleAgendar = () => {
    // colocar a lógica de agendamento do serviço com a empresa selecionada.
  
    // Exemplo de redirecionamento após o agendamento:
    navigation.navigate('ListaAgendamentos');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar Serviço</Text>
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={(text) => setEndereco(text)}
        editable={false} // Impede a edição do campo
      />
      <TextInput
        style={styles.input}
        placeholder="Complemento"
        value={complemento}
        onChangeText={(text) => setComplemento(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Data (ex: 01/09/2023)"
        value={data}
        onChangeText={(text) => setData(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Hora (ex: 09:00)"
        value={hora}
        onChangeText={(text) => setHora(text)}
      />
      <Button title="Agendar" onPress={handleAgendar} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default AgendamentoScreen;
