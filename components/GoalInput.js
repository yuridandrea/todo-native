import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';
import { useState } from 'react';

function GoalInput({ setCourseGoals, isVisible, closeModalHandler }) {
  const [entredGoalText, setEntredGoalText] = useState('');

  function addGoalHandler() {
    // currentCourseGoals is the latest state snapshot
    if (entredGoalText === '') {
      return;
    } else {
      setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
        { text: entredGoalText, id: Math.random().toString() },
      ]);
      setEntredGoalText('');
      closeModalHandler();
    }
  }

  function goalInputHandler(entredText) {
    setEntredGoalText(entredText);
  }

  return (
    <Modal visible={isVisible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.image}
        />
        <TextInput
          placeholder='Your course goal!'
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={entredGoalText}
          placeholderTextColor='gray'
        />
        <View style={styles.buttonContainer}>
          {/* you cant add styles to buttons */}
          <View style={styles.button}>
            <Button
              title='Cancel'
              onPress={closeModalHandler}
              color='#f31282'
            />
          </View>
          <View style={styles.button}>
            <Button title='Add goal' onPress={addGoalHandler} color='#b180f0' />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },

  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },

  textInput: {
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    width: '100%',
    color: 'black',
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
    // justifyContent: 'space-between',
  },

  button: {
    width: '30%',
    marginHorizontal: 8,
  },
});
