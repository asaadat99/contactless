import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        color: 'black'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        backgroundColor: '#3e96fa',
        marginVertical: 6,
        marginHorizontal: 48,
    },
    button_picker: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 4,
        backgroundColor: '#3e96fa',
        marginVertical: 6,
        marginLeft: 48,
        marginRight: 12
    },
    picker: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        backgroundColor: '#d7dadd',
        marginVertical: 6,
        marginHorizontal: 0,
        width: 198
    },
    picker_wide: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        backgroundColor: '#d7dadd',
        marginVertical: 6,
        marginHorizontal: 48,
    },
    button_text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        textTransform: 'uppercase',
    },
    card: {
        alignItems: 'center',
        padding: 6,
        margin: 12,
        borderWidth: 5,
        borderRadius: 10,
        borderColor: 'white'
    },
    card_title_text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        lineHeight: 30,
        marginVertical: 10
    },
    qrcode: {
       borderWidth: 6,
       padding: 3,
       backgroundColor: 'white'
    },
    body_text: {
        fontSize: 18,
        color: '#737373',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 16
    }
});