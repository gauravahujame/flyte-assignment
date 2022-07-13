import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const MenuItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={item.icon} resizeMode='contain' style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.descriptionText}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 4,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Manrope-Regular'
  },
  descriptionText: {
    fontSize: 12,
    marginTop: 4,
    fontFamily: 'Manrope-Regular'
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  icon: {
    width: 60,
    height: 60,
  }
});

export default MenuItem;
