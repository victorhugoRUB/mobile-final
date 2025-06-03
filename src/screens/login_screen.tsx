import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import Input from '../components/input';
import Title from '../components/text';
import authService from '../services/auth_service';
import { isEmailValid, isPasswordValid } from '../utils/validators';
import { RootStackParamList } from '../navigation/app_navigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();


    const handleLogin = async () => {
        if (!isEmailValid(email)) {
            Alert.alert('Erro', 'Digite um e-mail válido.');
            return;
        }

        if (!isPasswordValid(senha)) {
            Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        setLoading(true);
        try {
            const response = await authService.login(email, senha);
            Alert.alert('Sucesso', `Bem-vindo, ${response.usuario}!`);
            navigation.navigate('Home');
        } catch (error: any) {
            Alert.alert('Erro', error.message || 'Não foi possível fazer login.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={styles.container}
        >
            <Title>Login</Title>

            <Input
                placeholder="E-mail"
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />

            <Input
                placeholder="Senha"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
                <Text style={styles.buttonText}>{loading ? 'Entrando...' : 'Entrar'}</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    button: {
        height: 48,
        backgroundColor: '#007AFF',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
