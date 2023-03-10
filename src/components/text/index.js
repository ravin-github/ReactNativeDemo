import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {ms, mvs} from 'react-native-size-matters/extend';
import {Colors} from '@themes';

const TextComponent = ({children, ...props}) => {
  let customStyle;

  switch (props.variant) {
    case 'title': {
      customStyle = styles.titleStyle;
      break;
    }
    case 'titleLarge': {
      customStyle = styles.titleLargeStyle;
      break;
    }
    default: {
      customStyle = styles.bodyStyle;
      break;
    }
  }
  return (
    <Text {...props} style={[customStyle, {color: Colors.black}, props.style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: ms(16),
    lineHeight: mvs(26),
  },
  titleLargeStyle: {
    fontSize: ms(24),
    lineHeight: mvs(28),
  }
});

export default TextComponent;
