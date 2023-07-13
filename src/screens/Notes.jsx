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
import { setNotes } from '../store/notes';
import { useSelector } from 'react-redux';
import CommonIcons from '../theme/assets/svg/CommonIcons';
import SvgIcon from '../components/SvgIcon';

const Notes = props => {
  const notesId = props?.route?.params?.id ? props?.route?.params?.id : '';
  const { darkMode: isDark } = useTheme();
  const dispatch = useDispatch();
  const [title, onChangetitle] = useState('');
  const [description, onChangeDescription] = useState('');
  const { notes } = useSelector(state => state.notes);

  useEffect(() => {
    console.log('props --->', props?.route?.params?.id);
    if (notesId !== '') {
      const data = notes.filter(item => item?.id === notesId);
      onChangetitle(data[0]?.title);
      onChangeDescription(data[0]?.description);
    }
  }, []);

  const onSaveNotes = () => {
    if (title !== '' || description !== '') {
      if (notesId !== '') {
        let editedNote = {
          id: notesId,
          title: title.trim(),
          description: description.trim(),
          lastUpdatedAt: new Date().toString(),
        };
        const updatedNotes = notes.map(note =>
          note.id !== notesId ? note : editedNote,
        );
        dispatch(setNotes(updatedNotes));
        props.navigation.goBack();
      } else {
        let notesData = {
          id: Math.floor(Math.random() * 100),
          title: title.trim(),
          description: description.trim(),
          lastUpdatedAt: new Date().toString(),
        };
        dispatch(setNotes([...notes, notesData]));
        props.navigation.goBack();
      }
    } else {
      props.navigation.goBack();
    }
  };

  const onConfirmPopup = () => {
    Alert.alert('Delete', 'Are you sure you want to delete this file?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      { text: 'Confirm', onPress: deleteNote },
    ]);
  };

  const deleteNote = () => {
    const updatedNotes = []
    notes?.map(note => {
      if (note.id !== notesId) {
        updatedNotes.push(note);
      }
    });
    if (updatedNotes.length !== 0) {
      dispatch(setNotes(updatedNotes));
      props.navigation.goBack();
    }
  };

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
          onPress={onSaveNotes}
          style={{ alignItems: 'center', margin: 16 }}
        >
          <SvgIcon xml={CommonIcons.backArrow} width={30} height={30} />
        </TouchableOpacity>
        {notesId !== '' && (
          <TouchableOpacity onPress={onConfirmPopup} style={{ marginRight: 8 }}>
            <SvgIcon xml={CommonIcons.deleteIcon} width={30} height={30} />
          </TouchableOpacity>
        )}
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
            color: '#ffffff',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Notes;
