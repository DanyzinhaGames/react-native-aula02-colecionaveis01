import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import estiloInicial from "./estiloInicial";

function inicial(){
    return(
        <View style = {estiloInicial.container}>
            <View style={estiloInicial.borda}>

                <Text style={estiloInicial.texto}>Inicial</Text>

                <TouchableOpacity style={estiloInicial.botaoContainer}> 
                <Text style={estiloInicial.botaoTexto}>Coleção</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estiloInicial.botaoContainer}> 
                <Text style={estiloInicial.botaoTexto}>Item</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
} 
export default inicial;