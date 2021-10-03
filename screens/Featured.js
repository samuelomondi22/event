
import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import styled from 'styled-components/native';
import {dummyData, FONTS, SIZES, COLORS, icons, images} from '../constants';
import {McText, McIcon, McAvatar} from '../components';
import { SafeAreaView } from 'react-native-safe-area-context';

const Featured = ({ navigation }) => {
  return (
    // <SafeAreaView style={styles.container}>
    //   <SectionHeader>
    //     <View>
    //       <McText body5 style={{opacity:0.5}}>September 30</McText>
    //       <McText>Explore Events</McText>
    //     </View>
    //     <McAvatar source={images.avatar}/>
    //   </SectionHeader>
    // </SafeAreaView>
    <SafeAreaView style={styles.container}>
      <View>
        <McText body5 style={{opacity:0.5}}>September 30</McText>
        <McText>Explore Events</McText>
      </View>
    </SafeAreaView>
  );
};

const SectionHeader = styled.View`
  padding: 16px 30px,
  justify-content: space-between,
  align-items: center,
  flex-direction: row
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  }
);

export default Featured;
