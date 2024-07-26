import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const BasicBottomModal = ({ children, snapPoint,sheetStyle }) => {

  const BottomSheetBackground = ({ style }) => {
    return (
      <View
        style={[
          {
            backgroundColor: "white",
            borderTopStartRadius: 30,
            borderTopEndRadius: 30,
          },
          { ...style },
        ]}
      />
    );
  };


  // hooks
  const sheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => snapPoint, []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  // render
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
        style={{
          backgroundColor: 'white',  // <==== HERE
          borderRadius: 24,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.53,
          shadowRadius: 13.97,

          elevation: 21,
        }}
        backgroundComponent={props => <BottomSheetBackground {...props} />}
      >
        <BottomSheetView style={[styles.contentContainer,sheetStyle]}>
          {children}
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    width: '100%',
  },
  contentContainer: {
    flex:1,
    width: '95%',
  }
});

export default BasicBottomModal;