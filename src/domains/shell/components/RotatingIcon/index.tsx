import React, { useRef } from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

type RotatingIconProps = {
  degrees?: number;
  duration?: number;
  icon: IconDefinition;
  onPress: () => void;
  size: number;
};

export const RotatingIcon = ({
  degrees = 180,
  duration = 500,
  icon,
  onPress,
  size,
}: RotatingIconProps) => {
  const rotation = new Animated.Value(0);
  const animating = useRef(0);

  const onPressAction = () => {
    onPress();
    animating.current = 0;
  };

  const onPressIn = () => {
    animating.current += 1;
    rotation.setValue(0);
    Animated.timing(rotation, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start(() => {
      animating.current += 1;
      if (animating.current >= 3) onPressAction();
    });
  };

  const onPressOut = () => {
    animating.current += 1;
    if (animating.current >= 3) onPressAction();
  };

  const rotate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', `${degrees}deg`],
  });

  return (
    <Animated.View
      style={{
        transform: [{ rotate }],
      }}
    >
      <TouchableOpacity activeOpacity={0.5} onPressIn={onPressIn} onPressOut={onPressOut}>
        <FontAwesomeIcon icon={icon} size={size} />
      </TouchableOpacity>
    </Animated.View>
  );
};
