import React, { useEffect, useState } from 'react';
import { View, StatusBar, SafeAreaView, FlatList, Text, Dimensions, StyleSheet } from 'react-native';
import { useTheme, TouchableRipple, Switch } from 'react-native-paper';

import realm from 'database/main'
import { insertTestData, getAllBooks, addBook, deleteAllBooks, updateAllBookEditions } from 'database/book'

import CustomButton from 'components/ui/Button'

const App = () => {

  const theme = useTheme();

  // insertTestData()

  const [books, setBooks] = useState([]);
  const [bigBooks, setBigBooks] = useState(false);

  const onGetBigBooks = () => setBigBooks(!bigBooks);

  const onBookAdd = () => {
    // addBook("Chronicles of JavaScript", Math.floor(Math.random() * 500))
    addBook("I can not C#", Math.floor(Math.random() * 500), 1, { firstName: "John", lastName: "Johnson" });
    onGetBooks(bigBooks)
  }

  const onDeleteAllBooks = () => {
    console.log('onDeleteAllBooks', bigBooks)
    deleteAllBooks()
    onGetBooks(bigBooks)
  }

  const onUpdateAllBookEditions = () => {
    updateAllBookEditions()
    onGetBooks(bigBooks)
  }

  const onGetBooks = (bigBooks = false) => {
    setBooks(getAllBooks(bigBooks))
  }

  useEffect(() => {
    onGetBooks(bigBooks)
  }, [bigBooks])

  return (
    <>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor={theme.colors.surface} translucent={false} />
      <SafeAreaView style={{ padding: 8 }}>
        <View style={styles.container}>
          <View style={{ flexDirection: 'row' }}>
            <Text>Get big books</Text>
            <Switch value={bigBooks} onValueChange={onGetBigBooks} />
          </View>
          <FlatList
            data={books}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text>{item.title}</Text>
                  <Text>{item.pages}</Text>
                  <Text>{item.edition === null ? 'null' : item.edition}</Text>
                  <Text>{item.author === null ? 'null' : item.author.firstName + ' ' + item.author.lastName}</Text>
                </View>
              )
            }} />
        </View>
        <View style={{ padding: 20 }}>
          <CustomButton style={{ backgroundColor: 'green' }} mode="contained" onClick={onBookAdd}>Add book</CustomButton>
          <CustomButton style={{ backgroundColor: 'red' }} mode="contained" onClick={onDeleteAllBooks}>Delete all books</CustomButton>
          <CustomButton mode="contained" onClick={onUpdateAllBookEditions}>Update edition</CustomButton>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = new StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10
  }
})
export default App;