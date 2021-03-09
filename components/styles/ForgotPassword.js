import { StyleSheet } from 'react-native';
import iPhoneSize from '../helpers/utils';


let headingTextSize = 30;
if (iPhoneSize() === 'small') {
  headingTextSize = 26;
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1,
  },
  forgotPasswordHeading: {
    fontSize: headingTextSize,
    color: '#ffffff',
    fontWeight: '300',
    fontSize: 29,
    marginTop: 30
  },
  forgotPasswordSubheading: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 60,
  },
  notificationWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  toolbarButton:{
    width: 55,
    color:'#fff',
    textAlign:'center',
    marginTop: 20,
    marginLeft: 10
},
});

export default styles;