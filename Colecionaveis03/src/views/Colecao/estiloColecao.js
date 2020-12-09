import { StyleSheet } from 'react-native';

const estiloColecao = StyleSheet.create({
   container: {   
      flex: 1,
      backgroundColor: '#4C2BE0',
   },
   header: {
      height: 50,
      backgroundColor: '#4C2BE0',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 5,
   },
   texto: {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: 'bold',
   },

});

  export default estiloColecao;