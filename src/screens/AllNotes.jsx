/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import CommonIcons from '../theme/assets/svg/CommonIcons';
import SvgIcon from '../components/SvgIcon';

const AllNotes = props => {
  console.log('data ------> ', props);
  const { notes } = useSelector(state => state.notes);

  useEffect(() => {
    console.log('ada --> ', notes);
  }, []);

  // const notesAppData = [
  //   {
  //     id: 1,
  //     title: 'App Data 1',
  //     description: 'afafeqfonqeoideq',
  //     lastUpdatedAt: '',
  //   },
  //   {
  //     id: 2,
  //     title: 'App Notes 2',
  //     description: 'afafe  qfonqe oideq',
  //     lastUpdatedAt: '',
  //   },
  //   {
  //     id: 3,
  //     title: 'App Notes 3',
  //     description: 'afafe  qfonqe oideq',
  //     lastUpdatedAt: '',
  //   },
  // ];

  const getUpdatedTime = lastUpdatedAt => {
    let date = new Date(lastUpdatedAt);
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    return date.toLocaleDateString();
  };

  const RenderCard = ({ title, description, id, lastUpdatedAt }) => (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('Notes', {
          id: id,
        });
        console.log('Data --> ', id, lastUpdatedAt);
      }}
      style={{
        height: 80,
        marginTop: 16,
        padding: 16,
        borderRadius: 10,
        backgroundColor: '#171718',
        color: '#000000',
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: '700' }}>
        {title.trim()}
      </Text>
      <Text
        style={{
          color: '#ffffff',
          marginTop: 8,
        }}
      >
        {getUpdatedTime(lastUpdatedAt)}
      </Text>
      <TouchableOpacity
        style={{ position: 'absolute', right: 16, alignItems: 'center' }}
      >
        <SvgIcon xml={CommonIcons.selectionIcon} width={20} height={20} />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text
          style={{
            fontSize: 24,
            color: '#FFCC34',
            margin: 16,
            fontWeight: '700',
          }}
        >
          All Notes
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Notes');
          }}
          style={{ alignItems: 'center', margin: 16, paddingRight: 10 }}
        >
          <SvgIcon xml={CommonIcons.addIcon} width={30} height={30} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          margin: 16,
        }}
      >
        <FlatList
          data={notes}
          renderItem={({ item }) => (
            <RenderCard
              title={item.title}
              description={item.description}
              id={item.id}
              lastUpdatedAt={item.lastUpdatedAt}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default AllNotes;
