import React, { useState, useRef } from 'react';
import { Button, Dimensions, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const Page = Dimensions.get('window');
const PAGE_WIDTH = Page.width

// Define the CarouselComponent that accepts a `Component` prop
const LeftAlignCarousel = ({ Component, data, autoPlay, fastInterval, pagingEnabled, onSnapToItem, onIndexChange, componentWidth, loop, dynamicHeght }) => {
  const [isFast, setIsFast] = useState(false);
  const ref = useRef(null);

  const baseOptions = {
    vertical: false,
    height: dynamicHeght ? PAGE_WIDTH * dynamicHeght : PAGE_WIDTH / 3,
  };

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        {...baseOptions}
        loop={loop}
        ref={ref}
        style={{ width: '100%', }}
        autoPlay={autoPlay}
        autoPlayInterval={isFast ? fastInterval : 2000}
        data={data}
        pagingEnabled={pagingEnabled}
        width={componentWidth ? PAGE_WIDTH - componentWidth : PAGE_WIDTH - 50}
        onSnapToItem={index => {
          if (onSnapToItem) onSnapToItem(index);
        }}
        renderItem={({ index }) => {
          try {
            const itemData = data[index]; // Parse JSON string
            return (
              <Component key={index} index={index} data={itemData} />
            );
          } catch (error) {
            console.error('Failed to parse JSON', error);
            return null;
          }
        }}
      />
    </View>
  );
};

export default LeftAlignCarousel;

