import React, { useState } from 'react';
import { Link } from '@react-navigation/native';
import { ImageBackground, StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView, Button, TouchableOpacity, Alert, } from 'react-native';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import { Image } from '@rneui/base';


export default enviarLivro = ({ navigation }) => {

    const [formData, setFormData] = useState('');
    const [email, setEmail] = useState("");
    const [senha, setSenha,] = useState("");
    const [mensagem, setMensagem] = useState('');

    const handleInputChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const data = {

        email: email,
        senha: senha,
    }
    // const handleResetSenha = () =>{
    //      navigation.navigate('Resetar');
    //  }

    //validar que os campos não são vazios
    const handleLogin = async () => {
        if (!email || !senha) {
            setMensagem('Todos os campos são obrigatórios')
            return;
        }

        //envio de informações para a API cadastrar no banco de dados
        try {
            await axios.post('http://10.0.2.2:8085/api/login', data);
            Alert.alert('Login realizado com sucesso');
            navigation.navigate('BookPrincipal');
        } catch (error) {
            console.log(error);
            setMensagem('Ocorreu um erro ao realizar o login. Tente novamente!!!')
        }
    }





    return (
        
        <SafeAreaView style={styles.container}>


            <ImageBackground style={{ width: 415, height: 660 }} source={require('../../../res/img/BOOKFLOW/FundoEditarPerfil.png')} >

                <View>
                <TouchableOpacity onPress={() => navigation.navigate('Homesenai')}>
                    <LinearGradient

                        colors={['#993131', '#E06723']}
                        style={{
                            borderRadius: 10,
                            marginTop: 20,
                            height: 265,
                            width: '65%',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                         
                        <Image
                            style={{ width: 80, height: 80, marginTop: 5, alignSelf: 'center', }} source={require('../../../res/img/BOOKFLOW/plus.png')} >
                        </Image>
                    </LinearGradient>
                    </TouchableOpacity>

                    <LinearGradient

                        colors={['#610000', '#000000']}
                        style={{
                            borderRadius: 40,
                            marginTop: 20,
                            height: 300,
                            width: '85%',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            {/* <TextInput
                        color={'black'}
                        placeholder='Digite seu comentario:' placeholderTextColor={'gray'}
                        // onChangeText={value => setEmail(value)}
                        editable
                        multiline
    
                        maxLength={40}
                        style={{
                            width: '90%', height: '70%', alignSelf: 'center', backgroundColor: 'white', marginTop: -50,
                            borderRadius: 10, zIndex: 60, opacity: 1.2,
                        }} */}
                    {/* /> */}
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('Homesenai')}>

                                {/* <Text style={styles.Link}
                                >aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa{"\n"}
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa{"\n"}
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa{"\n"}
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa{"\n"}
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa{"\n"}
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa{"\n"}
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa{"\n"}
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa{"\n"}
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa{"\n"}
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa{"\n"}
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa{"\n"}
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa{"\n"}
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa{"\n"}
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa{"\n"}
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa{"\n"}
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa{"\n"}







                                </Text> */}

                            </TouchableOpacity>
                        </View>
                    </LinearGradient>

                </View>


            </ImageBackground>

        </SafeAreaView>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    textInput: {
        width: '100',
        backgroundColor: 'white',


    },

    Link: {
        alignSelf: 'center',
        marginTop: -435,
        color: 'white',
        opacity: 0.0,


    },


    mensagem: {
        color: 'white',
        marginTop: 10,
        alignSelf: 'center',
    },

    item: {
        width: 370,
        height: 160,
        marginHorizontal: 20,
        marginTop: -130,
        zIndex: 50,
        alignSelf: 'center',
    },
    item2: {
        width: 220,
        height: 280,
        marginHorizontal: 20,
        marginTop: -80,
        alignSelf: 'center',
        zIndex: 10,

    },
    item3: {
        width: 220,
        height: 280,
        marginHorizontal: 20,
        marginTop: 90,
        alignSelf: 'center',
        zIndex: 20,
    },



    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 20,
    },
});