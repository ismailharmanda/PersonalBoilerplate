import React from 'react';
import { StyleSheet, Text } from 'react-native';

type TextDecorationLine = 'none' | 'underline' | 'line-through';

export type HeadingSize = 'h1' | 'h2' | 'h3' | 'h4';

export interface HeadingProps {
  size: HeadingSize;
  align?: 'left' | 'right' | 'center';
  children?: React.ReactNode;
  /*  color?: TextColor; */
  decoration?: TextDecorationLine;
}

export function Heading(props: HeadingProps) {
  const { size, children, /* color = 'default', */ align = 'left', decoration = 'none' } = props;

  return <Text style={[styles.base, styles[align], styles[size], /*  styles[color], */ { textDecorationLine: decoration }]}>{children}</Text>;
}

const styles = StyleSheet.create({
  base: {
    margin: 0,
    padding: 0,
    fontWeight: 'normal',
    /*  fontFamily: tokens.text.fontFamily, */
  },
  /*   default: {
    color: tokens.colors.base.black,
  },
  darker: {
    color: tokens.colors.primary.darker,
  },
  primary: {
    color: tokens.colors.primary.regular,
  },
  success: {
    color: tokens.colors.primary.regular,
  },
  link: {
    color: tokens.colors.neutral.link,
  },
  tooltip: {
    color: tokens.colors.neutral.darker,
  },
  muted: {
    color: tokens.colors.neutral.darkest,
  },
  light: {
    color: tokens.colors.utility.lighter,
  },
  lightest: {
    color: tokens.colors.utility.lightest,
  },
  'neutral-darkest': {
    color: tokens.colors.neutral.darkest,
  },
  error: {
    color: tokens.colors.secondary.dark,
  },
  warning: {
    color: tokens.colors.secondary.regular,
  },
  contrast: {
    color: tokens.colors.base.white,
  },
  'success-green': {
    color: tokens.colors.success.regular,
  }, */
  h1: {
    fontSize: 31,
    fontWeight: '700',
    lineHeight: 37.2,
  },
  h2: {
    fontSize: 28,
    fontWeight: '600',
    lineHeight: 33.5,
  },

  h3: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
  },
  h4: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 23.76,
  },
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
  center: {
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
});
