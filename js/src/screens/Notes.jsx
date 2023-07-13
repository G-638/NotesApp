/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StatusBar,
  TextInput,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useTheme } from '../hooks';
import { changeTheme } from '../store/theme';

const Notes = props => {
  const { darkMode: isDark } = useTheme();
  const dispatch = useDispatch();
  const [title, onChangetitle] = useState('');
  const [description, onChangeDescription] = useState('');

  //   const [fetchOne, { data, isSuccess, isLoading, isFetching }] =
  //     useLazyFetchOneQuery();

  useEffect(() => {
    // dispatch(changeTheme({ darkMode: !isDark }, darkMode));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={{ alignItems: 'center', margin: 16 }}
        >
          <Text style={{ color: 'yellow', fontSize: 18, fontWeight: '700' }}>
            Back
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={{ marginRight: 8 }}
          >
            <Text style={{ color: 'yellow', fontSize: 18, fontWeight: '700' }}>
              Save
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                'Delete',
                'Are you sure you want to delete this file?',
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    // style: 'cancel',
                  },
                  { text: 'Confirm', onPress: () => console.log('OK Pressed') },
                ],
              );
            }}
            style={{ marginRight: 8 }}
          >
            <Text style={{ color: 'yellow', fontSize: 18, fontWeight: '700' }}>
              Delete
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, marginBottom: 16 }}>
        <TextInput
          style={{
            height: 55,
            padding: 10,
            borderBottomWidth: 1,
            borderColor: 'grey',
            fontSize: 24,
            color: '#ffffff',
            fontWeight: '700',
          }}
          onChangeText={text => onChangetitle(text)}
          maxLength={40}
          value={title}
          placeholder="Title"
          placeholderTextColor={'grey'}
        />
        <TextInput
          editable
          multiline
          numberOfLines={4}
          onChangeText={text => onChangeDescription(text)}
          value={description}
          placeholder="Enter your notes here ... "
          placeholderTextColor={'grey'}
          style={{
            height: '90%',
            padding: 10,
            paddingTop: 20,
            borderWidth: 1,
            fontSize: 20,
            fontWeight: '500',
            color: 'grey',
          }}
        />
        <Text>END</Text>
      </View>
    </SafeAreaView>
  );
};

export default Notes;
