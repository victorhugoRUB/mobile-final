import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

interface TitleProps extends TextProps {
  children: React.ReactNode;
}

export default function Title({ children, ...rest }: TitleProps) {
  return (
    <Text style={styles.title} {...rest}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    marginBottom: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
