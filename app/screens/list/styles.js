import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native'
import { Colors, Fonts, } from '../../themes';
var { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'rgb(35,88,106)',
    },
    modelView: {
        width: width * (344 / 375),
        borderRadius: width * (15/375),
        backgroundColor: "white",
        marginTop: height * (10 / 667),
    },
    outer_view: {
        alignItems: 'center'
    },
    icon_view: {
        alignItems: 'flex-end',
        marginHorizontal: width * (20 / 375),
    },
    commentView: {
        width: '96%', 
        height: width * (30/375), 
        justifyContent: 'space-between', 
        alignSelf:'center',
        paddingVertical:height * (20/667),
        marginVertical: height * (20/667),
        backgroundColor: Colors.white, 
        borderRadius: width * (25/375), 
        flexDirection: 'row', 
        alignItems: 'center'
    },
    sendIcon: {
        height: height *0.019, 
        width:  width *0.0533,
    },
    commentInput: {
        width: '90%', 
        height: width * (60/375),
        paddingHorizontal: width *0.0266 
    },
    nav_view: {
        backgroundColor: "white",
        borderRadius: height * (100 / 667),
        padding: width * (5/375),
        height: width * (31 / 375),
        width: width * (31 / 375),
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        fontSize: width * (16 / 375)
    },
    mainContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.7)',
        paddingTop: height * (90 / 667)
    },
    button_view: {
        width: width * (142 / 375),
        marginTop: height * (30 / 667),
        alignItems: 'center'
    },
    messageBox: {
        width: width * (296 / 375),
        height: width * (179 / 375),
        borderWidth: 1,
        marginTop: height * (10 / 667),
        paddingLeft: width * (10 / 375),
        paddingTop: height * (10 / 667),
        borderColor: Colors.lightGrey,
        borderRadius: width * (10 / 375)
    },
    msg_view: {
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: width * (14 / 375),
        fontFamily: Fonts.type.semiBold
    },
    image: {
        width: '100%',
        height: height * (200/667)
    },
    labelView: {
        width: "90%",
        flexDirection: 'row',
        paddingTop: width * (15/667),
        marginHorizontal: width * (40/375),
    },
    label: {
        fontFamily: Fonts.type.semiBold,
        fontSize: width * (15/375),
        color: Colors.black,
    },
    discription: {
        fontFamily: Fonts.type.semiBold,
        fontSize: width * (15/375),
        color: 'rgb(35,88,106)',
        marginLeft: width *  (5/375),
        marginRight: width * (30/375)
    },
    conatinerTitle: {
        fontSize: 25,
        color: '#FFF',
        marginVertical: 7,
        alignSelf: 'center'
      },
      containerDescription: {
        fontSize: 13,
        color: '#BDBDBD',
        marginTop: -7,
        marginBottom: 7,
      },
      addCardTextView: {
        width: "19%",
        height: 40,
        alignContent: 'center',
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 10,
        backgroundColor: '#D8D8D8'
        
      },
      inputText: {
        // flex: 2,
        color: '#424242',
      },
      inputPlaceholder: {
        // flex: 4,
        color: '#9b9b9b',
        fontWeight: '500'
      },
      inputTextSection: {
        width: '59%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 10,
        borderColor: '#CCCCCC',
        // borderWidth: 0.5,
        marginTop: 2,
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: '#eeeeee',
        color: '#9b9b9b',
        fontWeight: '500',
        fontSize: 14,
      },
    input: {
        width: '100%%',
        margin: 5,
        alignItems: "center",
        alignSelf: 'center'
    },

})