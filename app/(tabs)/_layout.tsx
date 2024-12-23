import React from 'react';
import { TouchableOpacity } from 'react-native';

export function HapticTab(props) {
  const { onPress, ...rest } = props;

  return (
    <TouchableOpacity
      {...rest}
      onPress={(e) => {
        // Placeholder for haptic feedback
        console.log('Haptic feedback triggered');
        onPress(e);
      }}
    />
  );
}