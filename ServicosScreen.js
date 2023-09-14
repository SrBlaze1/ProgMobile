import React from 'react';
import { View, Text } from 'react-native';

function ServicosScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Serviços Disponíveis</Text>
      <Text>Aqui você pode listar os serviços disponíveis ou categorias.</Text>
    </View>
  );
}

export default ServicosScreen;
