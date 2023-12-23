import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function delateGoalHandler(id) {
    setCourseGoals((currentCourseGoal) => {
      return currentCourseGoal.filter((goal) => goal.id !== id);
    });
  }

  function modalHandler() {
    setIsModalVisible(true);
  }

  function cancelModalHandler() {
    setIsModalVisible(false);
  }

  return (
    <>
      <StatusBar style='light' />
      {/* view is like a div but it cant scroll - flex is alredy on by default */}
      <View style={styles.appContainer}>
        <View style={{ marginTop: 50 }}>
          <Button title='Add new Goal' color='#a065ec' onPress={modalHandler} />
        </View>
        <GoalInput
          setCourseGoals={setCourseGoals}
          isVisible={isModalVisible}
          closeModalHandler={cancelModalHandler}
        />
        <View style={styles.goalsContainer}>
          {/* flatlist will render just the visible content (better for long lists) */}
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              // itemData is an object with item and index properties - itemData.item, itemData.index
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDelateItem={delateGoalHandler}
                  id={itemData.item.id}
                />
              );
            }}
            // if the key is not "key", we can use keyExtractor to specify the unique parameter
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 10,
    paddingHorizontal: 15,
    flex: 1,
    // backgroundColor: '#1e085a',
  },

  goalsContainer: {
    flex: 5,
  },
});
