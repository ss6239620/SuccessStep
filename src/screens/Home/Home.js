import { StyleSheet, Text, View, StatusBar, useColorScheme, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { colorTheme } from '../../constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import MaterialIcon from '../../components/MaterialIcon';
import NormalTextInputWithIcon from '../../components/TextInput/NormalTextInputWithIcon';
import LinearGradient from 'react-native-linear-gradient';
import LeftAlignCarousel from '../../components/Carousel/LeftAlignCarousel';
import FullButton from '../../components/FullButton';
import GridSheet from '../../components/GridSheet';
import ImageComponent from '../../components/ImageComponent';
import InfoCard from '../../components/Card/InfoCard';

const CategoryComponent = ({ index, data }) => {
  const colorScheme = useColorScheme();
  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;
  return (
    <LinearGradient colors={data.color} style={{ width: '90%', padding: 20, borderRadius: 10, }}>
      <MaterialIcon name={'book-open-page-variant'} color={'white'} />
      <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={[styles.allText, { color: 'white' }]} >
          Mat 116
        </Text>
        <View style={[{ marginHorizontal: 5 }]} />
        <Text style={[styles.subText, { color: 'white' }]}>{data.description}</Text>
      </View>
    </LinearGradient>
  )
};

export default function Home() {
  const jsonData = [
    { name: 'Item 1', description: '19 Tutor', color: ['#FE8B6E', '#FF6773'] },
    { name: 'Item 2', description: '11 Tutor', color: ['#0980B8', '#61C2D2'] },
    { name: 'Item 3', description: '43 Tutor', color: ['#7421CF', '#9F54F8'] },
  ];
  const TrendingData = [
    { image: require('../../assets/img/biology.jpg') },
    { image: require('../../assets/img/computer.jpg') },
    { image: require('../../assets/img/martial-arts.jpg') },

  ];
  const colorScheme = useColorScheme();
  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent={true}
      />
      <ScrollView contentContainerStyle={styles.subContainer}>
        <View style={styles.headerRow}>
          <View style={styles.menuIconContainer}>
            <MaterialCommunityIcons
              name={'menu'}
              size={25}
              color={styles.iconColor}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
          </View>
          <View style={styles.iconRow}>
            <MaterialIcon style={{
              borderWidth: 1,
              borderRadius: 50,
              padding: 7,
              borderColor: colorTheme.borderColor
            }} name={'cards-heart-outline'} />
            <MaterialIcon
              style={{
                borderWidth: 1,
                borderRadius: 50,
                padding: 7,
                borderColor: colorTheme.borderColor
              }}
              onPress={()=>navigation.navigate('VideoCall')}
              name={'bell-ring-outline'} />
          </View>
        </View>
        <View style={[styles.searchContainer, { borderColor: styles.iconBorderColor }]}>
          <NormalTextInputWithIcon icon={'search-web'} style={styles.textInput} placeholder={'Search...'} />
          <View style={[styles.separator, { backgroundColor: styles.iconBorderColor }]} />
          <MaterialIcon name={'tune'} style={{ padding: 8 }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <Text style={[styles.allText, { fontSize: 17 }]}>Live Subject Turing</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Text style={[styles.allText, { color: colorTheme.primaryColor, textDecorationLine: 'underline', fontSize: 15 }]}>
              All Subjects
            </Text>
            <MaterialIcon name={'chevron-right'} />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <LeftAlignCarousel
            Component={CategoryComponent}
            data={jsonData}
            autoPlay={true}
            pagingEnabled={true}
            componentWidth={150}
            loop={true}
          />
        </View>
        <View style={{ flex: 1 }}>
          <LinearGradient
            start={{ x: -0.1, y: 0.5 }} // Center start
            end={{ x: 0.9, y: 1.5 }} // Extend gradient towards the bottom-right
            locations={[0.1, 0.5, 2.5]} // Define locations for colors
            colors={['#FF76CE', '#9F54F8', '#521B88']} // Colors in gradient
            style={{ borderRadius: 20, }}
          >
            <View style={{ position: 'absolute', width: '100%', height: '100%', }}>
              <GridSheet />
            </View>
            <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
              <View style={{ flex: 1, padding: 20 }}>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                  <Text style={[styles.allText, { fontSize: 18, fontWeight: '600', color: 'black' }]}>Get LifeTime</Text>
                  <View>
                    <Text style={[styles.allText, { fontSize: 18, fontWeight: '600', color: '#FFEE00', marginLeft: 10 }]}>Deal</Text>
                  </View>
                </View>
                <Text style={[styles.allText, { fontWeight: '600', color: 'black', fontSize: 14 }]}>On demand courses</Text>
                <FullButton title={'Reedem Now'} style={{ width: '100%', backgroundColor: '#0F172A', marginTop: 40 }} textColor={'white'} />
              </View>
              <View style={{ flex: 1, height: '100%', justifyContent: 'flex-start' }}>
                <Image source={require('../../assets/img/man_deal.png')} style={{
                  flex: 1,
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                  // bottom:'10%',                  
                }} />
              </View>
            </View>
          </LinearGradient>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}>
          <Text style={[styles.allText, { fontSize: 17 }]}>Trending Courses</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Text style={[styles.allText, { color: colorTheme.primaryColor, fontSize: 15 }]}>
              All Courses
            </Text>
            <MaterialIcon name={'chevron-right'} />
          </View>
        </View>
        <View style={{ flex: 1, }}>
          <LeftAlignCarousel
            Component={InfoCard}
            data={TrendingData}
            autoPlay={false}
            pagingEnabled={true}
            componentWidth={100}
            dynamicHeght={0.99}
          />
        </View>
        <View>
          <Text style={[styles.allText, { fontSize: 20 }]}>Weekly Top Author</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 15 }} >
            {[1, 2, 3, 4, 5].map((i) => (
              <View key={i} style={{ padding: 30, borderWidth: 1, borderColor: colorTheme.darkBorderColor, borderRadius: 10, alignItems: 'center', marginHorizontal: 10 }}>
                <ImageComponent source={require('../../assets/img/computer.jpg')} />
                <Text style={[styles.allText]}>Albert Flores</Text>
                <Text style={[styles.subText]}>Math 116</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}>
          <Text style={[styles.allText, { fontSize: 17 }]}>Top new Courses</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Text style={[styles.allText, { color: colorTheme.primaryColor, fontSize: 15 }]}>
              All Courses
            </Text>
            <MaterialIcon name={'chevron-right'} />
          </View>
        </View>
        <View style={{ flex: 1, }}>
          <LeftAlignCarousel
            Component={InfoCard}
            data={TrendingData}
            autoPlay={false}
            pagingEnabled={true}
            componentWidth={100}
            dynamicHeght={0.99}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const baseStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  subContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuIconContainer: {
    flex: 1,
  },
  iconRow: {
    flexDirection: 'row',
    flex: 0.45,
    justifyContent: 'space-between',
  },
  iconBorder: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 7,
  },
  searchContainer: {
    marginVertical: 30,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  separator: {
    width: 1,
    height: '100%',
  },
  textInput: {
    flex: 1,
    borderWidth: 0,
  },
  allText: {
    fontSize: 16,
    fontFamily: colorTheme.appcommonfont,
  },
  subText: {
    fontSize: 14,
    fontFamily: colorTheme.appcommonfont,
  },
  iconColor: 'black',
  iconBorderColor: colorTheme.borderColor,
});

const lightStyles = StyleSheet.create({
  ...baseStyle,
  container: {
    ...baseStyle.container,
    backgroundColor: colorTheme.lightappBackGroundColor,
  },
  iconColor: 'black',
  iconBorderColor: colorTheme.borderColor,
  allText: {
    ...baseStyle.allText,
    color: 'black',
  },
  subText: {
    ...baseStyle.subText,
    color: 'black',
  },
});

const darkStyles = StyleSheet.create({
  ...baseStyle,
  container: {
    ...baseStyle.container,
    backgroundColor: colorTheme.darkappBackGroundColor,
  },
  iconColor: 'white',
  iconBorderColor: colorTheme.darkBorderColor,
  allText: {
    ...baseStyle.allText,
    color: 'white',
  },
  subText: {
    ...baseStyle.subText,
    color: 'white',
  },
});
