import React, { FC } from 'react';
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Button } from 'react-native-paper';
import { COLORS } from '@themes';

interface CButtonProps {
  buttonType?: 'primary' | 'secondary';
  label?: string;
  disabled?: boolean;
  labelStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const CButton: FC<CButtonProps> = ({
  buttonType,
  label,
  disabled,
  labelStyle,
  style,
  onPress,
}) => {
  const getColor = () => {
    return {
      backgroundColor:
        buttonType === 'primary' ? COLORS.primaryBlack : COLORS.primaryWhite,
      color:
        buttonType === 'primary' ? COLORS.primaryWhite : COLORS.primaryBlack,
    };
  };

  return (
    <Button
      style={[
        styles.button,
        {
          backgroundColor: getColor().backgroundColor,
        },
        style,
      ]}
      mode="outlined"
      labelStyle={[
        styles.label,
        {
          color: getColor().color,
        },
        labelStyle,
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      {label}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export { CButton };
