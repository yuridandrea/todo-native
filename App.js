import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [entredGoalText, setEntredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler() {
    // currentCourseGoals is the latest state snapshot
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: entredGoalText, id: Math.random().toString() },
    ]);
    setEntredGoalText('');
  }

  function goalInputHandler(entredText) {
    setEntredGoalText(entredText);
  }

  return (
    // view is like a div but it cant scroll - flex is alredy on by default
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Your course goal!'
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={entredGoalText}
        />
        {/* you cant add styles to buttons */}
        <Button title='Add goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {/* flatlist will render just the visible content (better for long lists) */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          // if the key is not "key", we can use keyExtractor to specify the unique parameter
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 10,
    paddingHorizontal: 15,
    flex: 1,
  },

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'green',
  },

  textInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 8,
    padding: 8,
    width: '70%',
  },

  goalsContainer: {
    flex: 5,
  },

  goalItem: {
    padding: 10,
    margin: 8,
    borderRadius: 5,
    backgroundColor: '#5e0acc',
  },

  goalText: {
    color: '#fff',
  },
});
