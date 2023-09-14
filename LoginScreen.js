import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implementar a lógica de autenticação.
    // Por enquanto, vou apenas navegar para a tela inicial.
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça o login</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário ou email"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Entrar" onPress={handleLogin} />
      <Text style={styles.signupText}>
        Ainda não tem uma conta?{' '}
        <Text style={styles.signupLink} onPress={() => navigation.navigate('Cadastro')}>
          Cadastre-se
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
  },
  signupText: {
    marginTop: 10,
    fontSize: 16,
  },
  signupLink: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
