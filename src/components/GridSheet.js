import React from 'react';
import { View, StyleSheet } from 'react-native';

const GridSheet = () => {
  const horizontalLines = [];
  const verticalLines = [];

  // Creating 5 horizontal lines
  for (let i = 0; i < 5; i++) {
    horizontalLines.push(
      <View
        key={`h_${i}`}
        style={[
          styles.line,
          styles.horizontalLine,
          { top: `${(i + 1) * 20}%` }, // Adjust the position of each line
        ]}
      />
    );
  }

  // Creating 10 vertical lines
  for (let i = 0; i < 10; i++) {
    verticalLines.push(
      <View
        key={`v_${i}`}
        style={[
          styles.line,
          styles.verticalLine,
          { left: `${(i + 1) * 9}%` }, // Adjust the position of each line
        ]}
      />
    );
  }

  return (
    <View style={styles.container}>
      {horizontalLines}
      {verticalLines}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  line: {
    position: 'absolute',
    backgroundColor: '#FF76CE', 
  },
  horizontalLine: {
    height: 0.5, 
    width: '100%',
  },
  verticalLine: {
    width: 0.5,
    height: '100%',
  },
});

export default GridSheet;
