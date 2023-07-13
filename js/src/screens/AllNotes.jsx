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
import { useTranslation } from 'react-i18next';
import { Brand } from '../../components';
import { useTheme } from '../../hooks';
import { useLazyFetchOneQuery } from '../../services/modules/users';
import { changeTheme, ThemeState } from '../../store/theme';
import i18next from 'i18next';

const AllNotes = props => {
  console.log(' data ------> ', props);
  

  useEffect(() => {
    console.log('ada --> ');
  }, []);

  const notesAppData = [
    {
      id: 1,
      title: 'App Data 1',
      description: 'afafeqfonqeoideq',
      createdAt: '',
      lastUpdatedAt: '',
    },
    {
      id: 2,
      title: 'App Notes 2',
      description: 'afafe  qfonqe oideq',
      createdAt: '',
      lastUpdatedAt: '',
    },
    {
      id: 3,
      title: 'App Notes 3',
      description: 'afafe  qfonqe oideq',
      createdAt: '',
      lastUpdatedAt: '',
    },
    {
      id: 3,
      title: 'App Notes 3',
      description: 'afafe  qfonqe oideq',
      createdAt: '',
      lastUpdatedAt: '',
    },
    {
      id: 3,
      title: 'App Notes 3',
      description: 'afafe  qfonqe oideq',
      createdAt: '',
      lastUpdatedAt: '',
    },
    {
      id: 3,
      title: 'App Notes 3',
      description: 'afafe  qfonqe oideq',
      createdAt: '',
      lastUpdatedAt: '',
    },
    {
      id: 3,
      title: 'App Notes 3',
      description: 'afafe  qfonqe oideq',
      createdAt: '',
      lastUpdatedAt: '',
    },
    {
      id: 3,
      title: 'App Notes 3',
      description: 'afafe  qfonqe oideq',
      createdAt: '',
      lastUpdatedAt: '',
    },
    {
      id: 3,
      title: 'App Notes 3',
      description: 'afafe  qfonqe oideq',
      createdAt: '',
      lastUpdatedAt: '',
    },
    {
      id: 3,
      title: 'App Notes 3',
      description: 'afafe  qfonqe oideq',
      createdAt: '',
      lastUpdatedAt: '',
    },
    {
      id: 3,
      title: 'App Notes 3',
      description: 'afafe  qfonqe oideq',
      createdAt: '',
      lastUpdatedAt: '',
    },
  ];

  const RenderCard = ({ title, description }) => (
    <TouchableOpacity
      onPress={() => props.navigation.navigate('Notes')}
      style={{
        borderWidth: 1,
        marginTop: 16,
        borderRadius: 5,
        borderColor: 'grey',
        backgroundColor: '#000000',
        color: '#000000',
      }}
    >
      <Text style={{ color: '#ffffff', margin: 8 }}>{title}</Text>
      <Text
        style={{
          color: '#ffffff',
          marginLeft: 8,
          marginBottom: 8,
          marginRight: 16,
        }}
      >
        {description}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 24, color: '#ffffff', margin: 16 }}>
          All Notes
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Notes');
          }}
          style={{ alignItems: 'center', margin: 16, paddingRight: 10 }}
        >
          <Text style={{ fontSize: 30, color: 'yellow' }}>+</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          margin: 16,
        }}
      >
        <FlatList
          data={notesAppData}
          renderItem={({ item }) => (
            <RenderCard title={item.title} description={item.description} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default AllNotes;
