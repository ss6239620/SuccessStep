import React from 'react';
import { View } from 'react-native';
import BasicBottomModal from '../../BottomModal/BasicBottomModal';


export default function BottomSheetSlide({
  child1,
  child2,
}) {
  return (
    <View
      style={{
        backgroundColor: '#000',
      }}>
      {child1}
      {child2}
    </View>
  );
}
