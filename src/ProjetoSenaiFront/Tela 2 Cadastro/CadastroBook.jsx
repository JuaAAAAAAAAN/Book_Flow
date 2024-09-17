import React, { useState } from 'react';
import { Link } from '@react-navigation/native';
import { ImageBackground, Alert, StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from '@rneui/themed';
import axios from 'axios';

export default CadastroBook = ({ navigation }) => {
    const [formData, setFormData] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [idade, setIdade] = useState('');
    const [nome, setNome] = useState('');
   



    const handleInputChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const data = {
        id: '',
        nome: nome,
        email: email,
        idade: idade,
        senha: senha,
    }

    const handleCadastrar = async () => {
        if (!nome || !email || !idade || !senha) {
            setMensagem('Todos os campos são obrigatórios')
        }

        

        
            
        
        

        console.log(data)

        //envio de informações para a API cadastrar no banco de dados
        try {
            await axios.post('http://10.0.2.2:8085/api/cadastro', data);
            Alert.alert('Cadastro realizado com sucesso');
            navigation.navigate('Homesenai');
        } catch (error) {
            console.log(error);
            setMensagem('Ocorreu um erro ao cadastrar o usuário. Tente novamente!!!')
        }
    }
    const validateEmail = (email) => {
        return email.indexOf('@') !== -1;
    };

   
       
    return (

        <SafeAreaView style={styles.container}>
            <ScrollView>

                <ImageBackground style={{ width: 412, height: 629 }} source={require('../../../res/img/BOOKFLOW/FundoEditarPerfil.png')} >


                    <TextInput
                        color={'black'}
                        placeholder='Nome de usuário:'
                        placeholderTextColor={'black'}
                        onChangeText={value => setNome(value)}
                        editable


                        maxLength={40}
                        style={{
                            width: '90%', height: 50, alignSelf: 'center', backgroundColor: 'white', marginTop: 470,
                            borderRadius: 10, fontFamily: 'AnnieUseYourTelescope'
                        }}

                    />


                    <TextInput
                        color={'black'}
                        placeholder='Digite seu idade:' placeholderTextColor={'black'}
                        keyboardType="numeric"
                        onChangeText={value => setIdade(value)}

                        editable
                        multiline

                        maxLength={40}
                        style={{
                            width: '90%', height: 50, alignSelf: 'center', backgroundColor: 'white', marginTop: -120,
                            borderRadius: 10, fontFamily: 'AnnieUseYourTelescope'
                        }}
                    />

                    <TextInput
                        color={'black'}
                        placeholder='Digite seu senha:' placeholderTextColor={'black'}
                        onChangeText={value => setSenha(value)}

                        editable
                        secureTextEntry={true}


                        maxLength={40}
                        style={{
                            width: '90%', height: 50, alignSelf: 'center', backgroundColor: 'white', marginTop: -120,
                            borderRadius: 10, fontFamily: 'AnnieUseYourTelescope'
                        }}
                    />

                    <TextInput
                        color={'black'}
                        placeholder='Digite seu email:' placeholderTextColor={'black'}
                        keyboardType="email-address"
                        onChangeText={value => setEmail(value)}
                        editable
                        multiline

                        maxLength={40}
                        style={{
                            width: '90%', height: 50, alignSelf: 'center', backgroundColor: 'white', marginTop: -120,
                            borderRadius: 10, fontFamily: 'AnnieUseYourTelescope'
                        }}
                    />



                    <View style={styles.Button}>
                        <Button
                            title="Cadastrar" onPress={handleCadastrar}
                            buttonStyle={{
                                backgroundColor: '#9B0303',
                                borderColor: '#9B0303',
                                borderRadius: 10,
                            }}
                            titleStyle={{

                                color: 'black',
                                marginHorizontal: 50,
                                marginVertical: -3,
                                fontFamily: 'AnnieUseYourTelescope',

                            }}
                        />

                        <TouchableOpacity onPress={() => navigation.navigate('Homesenai')}></TouchableOpacity>


                        <View>
                            <Text style={styles.title}>Book Flow</Text>
                        </View>

                    </View>
                    {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}




                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );

};
const styles = StyleSheet.create({
    container: {
        flex: 1,


    },

    title: {

        color: '#FFC700',
        marginTop: -530,
        alignSelf: 'center',
        fontFamily: 'Inspiration',
        fontSize: 90
    },



    textInput: {
        width: '100',
        backgroundColor: 'white',


    },

    Link: {
        alignItems: 'center',
        marginTop: 10,
        color: 'white',
    },

    mensagem: {
        color: 'white',
        marginTop: 10,
        alignSelf: 'center'
    },

    Button: {
        borderRadius: 100,
        alignItems: 'center',

        marginTop: 250,
    },
});