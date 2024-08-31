import { StyleSheet, Text, View, StatusBar, useColorScheme, ScrollView, } from 'react-native'
import React from 'react'
import { colorTheme } from '../../../constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Header from '../../../components/Header';
import FullButton from '../../../components/FullButton';


export default function UploadPhoto() {
  const colorScheme = useColorScheme()
  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent={true}
      />
      {/* write your code here  */}
      <Header />
      <ScrollView contentContainerStyle={[styles.subContainer, { flex: 1 }]}>
        <View style={{ flex: 1, justifyContent: 'flex-start', marginTop: 20 }}>
          <Text style={[styles.headText,]}>Upload photo</Text>
          <Text style={[styles.subText, { marginTop: 10 }]}>Upload your profile photo to finish signingin</Text>
        </View>
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ width: '70%', height: '70%', borderWidth: 2, borderColor: colorTheme.primaryColor, borderRadius: 200, borderStyle: 'dashed', justifyContent: 'center', alignItems: 'center', backgroundColor: '#dec2fc' }}>
            <MaterialCommunityIcons name={'cloud-upload'} color={colorTheme.primaryColor} size={100} />
          </View>
        </View>
        <View style={{ flex:1,justifyContent:'flex-end'}}>
          <FullButton backgroundColor={colorTheme.primaryColor} title={'Continue'} textColor={'white'} navigateTo={'Success'} style={{marginBottom:10}} />
        </View>
      </ScrollView>
    </View>
  )
}

const baseStyle = StyleSheet.create({
  headText: {
    fontWeight: '500',
    fontSize: 20
  },
  subText: {
    fontSize: 16,
    fontWeight: '400'
  }
})

const lightStyles = StyleSheet.create({
  ...baseStyle,
  container: {
    flex: 1,
    backgroundColor: colorTheme.lightappBackGroundColor,
    paddingTop: 5,
  },
  subContainer: {
    width: '90%',
    alignSelf: 'center'
  },
  allText: {
    color: 'black',
    fontFamily: colorTheme.appcommonfont
  },
  subText: {
    color: 'black',
    ...baseStyle.subText
  },
  headText: {
    color: 'black',
    ...baseStyle.headText
  },
})

const darkStyles = StyleSheet.create({
  ...baseStyle,
  container: {
    flex: 1,
    backgroundColor: colorTheme.darkappBackGroundColor,
    paddingTop: 5,
  },
  subContainer: {
    width: '90%',
    alignSelf: 'center'
  },
  allText: {
    color: 'white',
    fontFamily: colorTheme.appcommonfont
  },
  subText: {
    color: 'white',
    ...baseStyle.subText
  },
  headText: {
    color: 'white',
    ...baseStyle.headText
  },
})