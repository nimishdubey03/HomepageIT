import Snackbar from 'react-native-snackbar';

const ErrorMessage = ({
  msg = '',
  backgroundColor = 'black',
  actionTxt = '',
  actionColor = '',
  onPressAction = () => {},
}) =>
  Snackbar.show({
    text: msg,
    duration: Snackbar.LENGTH_LONG,
    backgroundColor: backgroundColor,
    textColor: 'white',
    action: {
      text: actionTxt,
      textColor: actionColor,
      onPress: onPressAction,
    },
  });

export default ErrorMessage;
