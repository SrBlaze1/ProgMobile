import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';

function CadastroScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [repetirSenha, setRepetirSenha] = useState('');
  const [foto, setFoto] = useState(null);
  const [localizacao, setLocalizacao] = useState(null);

  useEffect(() => {
    // Solicitar permissão para acessar a câmera e a galeria de fotos
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Desculpe, precisamos de permissão para acessar a câmera e a galeria de fotos.');
      }
    })();

    // Solicitar permissão para acessar a localização
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Desculpe, precisamos de permissão para acessar a localização.');
      } else {
        const location = await Location.getCurrentPositionAsync({});
        setLocalizacao(location);
      }
    })();
  }, []);

  const handleCadastro = () => {
    //Implementar a lógica de criação de conta, incluindo
    // o envio do e-mail, senha, foto e localização para o servidor.
    navigation.navigate('Home');
  };

  const handleEscolherFoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setFoto(result.uri);
    }
  };

  const handleTirarFoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setFoto(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crie uma conta</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Repetir senha"
        secureTextEntry
        value={repetirSenha}
        onChangeText={(text) => setRepetirSenha(text)}
      />
      <Text style={styles.subtitle}>Escolher uma foto de perfil:</Text>
      {foto && <Image source={{ uri: foto }} style={styles.foto} />}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleEscolherFoto}>
          <Text style={styles.button}>Escolher Foto</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTirarFoto}>
          <Text style={styles.button}>Tirar Foto</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>Localização:</Text>
      {localizacao && (
        <Text style={styles.localizacao}>
          Latitude: {localizacao.coords.latitude}, Longitude: {localizacao.coords.longitude}
        </Text>
      )}
      <Button title="Cadastrar-se" onPress={handleCadastro} />
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
  subtitle: {
    marginTop: 20,
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
  foto: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 100,
    marginTop: 10,
  },
  localizacao: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default CadastroScreen;
