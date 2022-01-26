import * as React from "react";
import { StatusBar} from 'expo-status-bar';
import { Text, Button, TextInput} from 'react-native';



const ButtonNavigation = () => (
    <Button>
        title="Inscription"
        accessibilityLabel="S'inscrire"
        onPress={() => navigation.navigate("S'inscrire")}
    </Button>
)

export default ButtonNavigation;