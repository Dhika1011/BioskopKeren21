import React from 'react';
import { View } from 'react-native';

type Props = {
  height?: number;
  width?: number;
};

const Gap = ({ height, width }: Props) => {
  return <View style={{ height: height, width: width }} />;
};

Gap.defaultProps = {
  height: 0,
  width: 0,
};

export default Gap;
