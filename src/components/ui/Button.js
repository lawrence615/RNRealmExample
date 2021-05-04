import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';

import { theme } from 'helper/theme';

const Button = (props) => {
  return (
    <PaperButton
      style={[
        styles.button,
        props.mode === 'outlined' && { backgroundColor: theme.colors.surface },
        props.style,
      ]}
      labelStyle={styles.text} mode={props.mode} loading={props.loading} onPress={props.onClick}>{props.children}</PaperButton>
  )
}


const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
    color: '#FFF'
  },
});

export default memo(Button);