import React from 'react'
import { View, Text, ScrollView, SafeAreaView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Input, Button, Icon, } from '@rneui/themed'
import enviarLivro from '../Tela 7 Enviar Livro/enviarLivro';
import Config from '../Tela 4 Configurações/Config';
import CadastroBook from '../Tela 2 Cadastro/CadastroBook';
import { Header } from '@rneui/themed';


function BookPrincipal() {

    return (
        <SafeAreaView>
            <ImageBackground style={{ width: 412, height: 760, }} source={require('../../../res/img/BOOKFLOW/FundoEditarPerfil.png')} >
                <View>
                    <Text style={styles.title}>Book Flow</Text>
                </View>

                <ScrollView horizontal>

                    <View style={styles.item}>

                        <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }}
                            locations={[0, 0.5, 0.9]} colors={['#922f2f', '#561c1c']} style={styles.linearGradient}>


                            <Image
                                style={{ width: 180, height: 180, marginTop: 18, alignSelf: 'center', borderRadius: 10, }} source={require('../../../res/img/BOOKFLOW/corali.png')} >
                            </Image>


                            <Image
                                style={{ width: 45, height: 45, marginTop: 10, borderRadius: 90, }} source={require('../../../res/img/BOOKFLOW/KERMIT.jpg')} >
                            </Image>

                            <Image
                                style={{ width: 150, height: 55, marginTop: -50, marginLeft: 48, borderRadius: 10, }} source={require('../../../res/img/BOOKFLOW/FundoMSGBOOKFLOW.png')} >
                            </Image>

                            <Text
                                style={{ marginTop: -52, marginLeft: 52, color: 'black', fontFamily: 'Judson-Regular', }}>
                                Troco esse livro de Coraline por qualquer outro.
                            </Text>


                        </LinearGradient>
                    </View>





                    <View style={styles.item}>
                        <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }}
                            locations={[0, 0.5, 0.9]} colors={['#922f2f', '#561c1c']} style={styles.linearGradient}>

                            <Image
                                style={{ width: 180, height: 180, marginTop: 18, alignSelf: 'center', borderRadius: 10, }} source={require('../../../res/img/BOOKFLOW/DEADPOOLLIVRO.jpg')} >
                            </Image>
                            <Image
                                style={{ width: 45, height: 45, marginTop: 10, borderRadius: 90, }} source={require('../../../res/img/BOOKFLOW/DEADPOOL.jpg')} >
                            </Image>
                            <Image
                                style={{ width: 150, height: 55, marginTop: -50, marginLeft: 48, borderRadius: 10, }} source={require('../../../res/img/BOOKFLOW/FundoMSGBOOKFLOW.png')} >
                            </Image>
                            <Text
                                style={{ marginTop: -52, marginLeft: 52, color: 'black', fontFamily: 'Judson-Regular', }}>
                                Troco essa HQ do Deadpool por uma do Coringa.
                            </Text>
                        </LinearGradient>


                    </View>
                    <View style={styles.item}>
                        <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }}
                            locations={[0, 0.5, 0.9]} colors={['#922f2f', '#561c1c']} style={styles.linearGradient}>
                            <Image
                                style={{ width: 180, height: 180, marginTop: 18, alignSelf: 'center', borderRadius: 10, }} source={require('../../../res/img/BOOKFLOW/banana.jpg')} >
                            </Image>
                            <Image
                                style={{ width: 45, height: 45, marginTop: 10, borderRadius: 90, }} source={require('../../../res/img/BOOKFLOW/venom.jpg')} >
                            </Image>
                            <Image
                                style={{ width: 150, height: 55, marginTop: -50, marginLeft: 48, borderRadius: 10, }} source={require('../../../res/img/BOOKFLOW/FundoMSGBOOKFLOW.png')} >
                            </Image>
                            <Text
                                style={{ marginTop: -52, marginLeft: 52, color: 'black', fontFamily: 'Judson-Regular', }}>
                                Troco o Diário de um Banana 1 pelo 2
                            </Text>
                        </LinearGradient>


                    </View>
                    <View style={styles.item}>
                        <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }}
                            locations={[0, 0.5, 0.9]} colors={['#922f2f', '#561c1c']} style={styles.linearGradient}>
                            <Image
                                style={{ width: 180, height: 180, marginTop: 18, alignSelf: 'center', borderRadius: 10, }} source={require('../../../res/img/BOOKFLOW/racio.png')} >
                            </Image>
                            <Image
                                style={{ width: 45, height: 45, marginTop: 10, borderRadius: 90, }} source={require('../../../res/img/BOOKFLOW/kenny.jpg')} >
                            </Image>
                            <Image
                                style={{ width: 150, height: 55, marginTop: -50, marginLeft: 48, borderRadius: 10, }} source={require('../../../res/img/BOOKFLOW/FundoMSGBOOKFLOW.png')} >
                            </Image>
                            <Text
                                style={{ marginTop: -52, marginLeft: 52, color: 'black', fontFamily: 'Judson-Regular', }}>
                                Troco livro dos Racionais por qualquer outro
                            </Text>
                        </LinearGradient>


                    </View>
                    <View style={styles.item}>
                        <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }}
                            locations={[0, 0.5, 0.9]} colors={['#922f2f', '#561c1c']} style={styles.linearGradient}>
                            <Image
                                style={{ width: 180, height: 180, marginTop: 18, alignSelf: 'center', borderRadius: 10, }} source={require('../../../res/img/BOOKFLOW/ayrton.jpg')} >
                            </Image>
                            <Image
                                style={{ width: 45, height: 45, marginTop: 10, borderRadius: 90, }} source={require('../../../res/img/BOOKFLOW/jakxon.jpg')} >
                            </Image>
                            <Image
                                style={{ width: 150, height: 55, marginTop: -50, marginLeft: 48, borderRadius: 10, }} source={require('../../../res/img/BOOKFLOW/FundoMSGBOOKFLOW.png')} >
                            </Image>
                            <Text
                                style={{ marginTop: -52, marginLeft: 52, color: 'black', fontFamily: 'Judson-Regular', }}>
                                Troco livro do Ayrton Senna por qualquer outro
                            </Text>
                        </LinearGradient>


                    </View>
                    <View style={styles.item}>
                        <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }}
                            locations={[0, 0.5, 0.9]} colors={['#922f2f', '#561c1c']} style={styles.linearGradient}>
                            <Image
                                style={{ width: 180, height: 180, marginTop: 18, alignSelf: 'center', borderRadius: 10, }} source={require('../../../res/img/BOOKFLOW/vento.jpg')} >
                            </Image>
                            <Image
                                style={{ width: 45, height: 45, marginTop: 10, borderRadius: 90, }} source={require('../../../res/img//BOOKFLOW/tes.jpg')} >
                            </Image>
                            <Image
                                style={{ width: 150, height: 55, marginTop: -50, marginLeft: 48, borderRadius: 10, }} source={require('../../../res/img/BOOKFLOW/FundoMSGBOOKFLOW.png')} >
                            </Image>
                            <Text
                                style={{ marginTop: -52, marginLeft: 52, color: 'black', fontFamily: 'Judson-Regular', }}>
                                Troco "O Menino Que Descobriu o Vento" por algum igual
                            </Text>

                        </LinearGradient>



                    </View>
                </ScrollView>
            </ImageBackground>

        </SafeAreaView>







    );
}






const Tab = createBottomTabNavigator();

export default function HomePage({ navigation }) {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({

                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Configurações') {
                        iconName = focused
                            ? 'bars'
                            : 'bars';
                    } else if (route.name === 'Início') {
                        iconName = focused ? 'home' : 'home';
                    } else if (route.name === 'Uploads') {
                        iconName = focused ? 'plus' : 'plus';
                    } else if (route.name === 'Configuracoes') {
                        iconName = focused ? 'gear' : 'gear';
                    } else if (route.name === 'Perfil') {
                        iconName = focused ? 'user' : 'user';
                    }

                    // You can return any component that you like here!
                    return <Icon type='font-awesome' name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'black',
            })}
        >
            <Tab.Screen options={{
                headerShown: false, tabBarShowLabel: false,
                tabBarBackground: () => (
                    <LinearGradient
                        colors={['#A70A0A', '#790707', '#440404',]}
                        start={{ x: 0.5, y: 1 }} // Inicia no centro inferior
                        end={{ x: 0.5, y: 0 }} // Termina no centro superior
                        locations={[0, 0.5, 0.9]}
                        style={styles.linearGradient2} />
                ),

                tabBarActiveTintColor: 'white',
            }} name="Configuracoes" component={Config} />



            <Tab.Screen options={{
                headerShown: false, tabBarShowLabel: false,
                tabBarBackground: () => (
                    <LinearGradient
                        colors={['#A70A0A', '#790707', '#440404',]}
                        start={{ x: 0.5, y: 1 }} // Inicia no centro inferior
                        end={{ x: 0.5, y: 0 }} // Termina no centro superior
                        locations={[0, 0.5, 0.9]}
                        style={styles.linearGradient2} />
                ),

                tabBarActiveTintColor: 'white',
            }} name="Início" component={BookPrincipal} />



            <Tab.Screen options={{
                headerShown: false, tabBarShowLabel: false,
                tabBarBackground: () => (
                    <LinearGradient
                        colors={['#A70A0A', '#790707', '#440404',]}
                        start={{ x: 0.5, y: 1 }} // Inicia no centro inferior
                        end={{ x: 0.5, y: 0 }} // Termina no centro superior
                        locations={[0, 0.5, 0.9]}
                        style={styles.linearGradient2} />
                ),

                tabBarActiveTintColor: 'white',
            }} name="Perfil" component={enviarLivro} />



        </Tab.Navigator>
    )

}




import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    container2: {
        flex: 2,
        backgroundColor: 'blue',

    },


    item2: {
        width: 220,
        height: 280,
        marginHorizontal: 20,
        marginTop: 200,
    },
    item: {
        width: 220,
        height: 280,
        marginHorizontal: 20,
        marginTop: 55,
    },



    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 20,
    },
    linearGradient2: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,

    },

    image: {
        width: '218',
        height: '202',
    },

    Link: {
        fontSize: 30,
        alignSelf: 'center',
        marginTop: 295,
        marginLeft: 175,
        color: 'white',
        fontFamily: 'Judson-Regular',


    },

    Link2: {
        fontSize: 30,
        alignSelf: 'center',
        marginTop: 360,
        marginLeft: -140,
        fontFamily: 'Judson-Regular',
        color: 'white',
    },
    Link3: {
        fontSize: 30,
        alignSelf: 'center',
        marginTop: 230,
        marginLeft: -200,
        fontFamily: 'Judson-Regular',
        color: 'white',
    },

    title: {

        color: '#FFC700',
        // marginTop: ,
        alignSelf: 'center',
        fontFamily: 'Inspiration',
        fontSize: 90
    },
})
