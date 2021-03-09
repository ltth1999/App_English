import {
    StyleSheet
} from 'react-native'

export const styles = StyleSheet.create({
    // For the container View
    parent: {
        flex: 1,
        padding: 16,
        marginTop: 5,
        backgroundColor: '#F5FCFF'

    },
    text: {
        fontSize: 20,
        paddingBottom: 15,
        fontFamily: "vincHand",
        marginTop: 10,
        color: '#696969'
    },
    
    input: {
       flexDirection:"row",
        backgroundColor: '#fff',
        width: '100%',
        alignSelf:'center',
        borderRadius: 5,
        padding: 10,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
        color: '#696969'
    },
    // For the Text label
    germanLabel: {
        fontSize: 20,
        fontFamily: "vincHand",
        marginTop: 10,
         color: '#696969'
    },
    // For the Text meaning
    germanWord: {
        marginTop: 15,
        fontSize: 20,
        color: '#696969'
    },

    
})