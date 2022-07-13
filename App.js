import React, { useCallback, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View, StatusBar, Text, FlatList } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from './src/components/bottomSheet';
import MenuItem from './src/components/menuItem';
import { menuItems } from './src/utils/constants';

export default function App() {
  const sheetRef = useRef(null);

  const onPress = useCallback(() => {
    sheetRef?.current?.scrollTo(-500);
  }, []);

  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.container}>
          <StatusBar barStyle={'light-content'} />
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Open Sheet</Text>
          </TouchableOpacity>
          <BottomSheet ref={sheetRef}>
            <FlatList data={menuItems} renderItem={({item}) => <MenuItem item={item} />} scrollEnabled={false} />
          </BottomSheet>
        </View>
      </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Manrope-Regular',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 25,
    backgroundColor: 'blue',
    marginTop: 48,
  },
});