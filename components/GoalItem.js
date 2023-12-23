import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem({ text, onDelateItem, id }) {
  return (
    //bind() is used to pass a parameter to the function
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={onDelateItem.bind(this, id)}
        // pressed is a boolean that is true when the element is pressed
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 5,
    backgroundColor: '#5e0acc',
  },

  pressedItem: {
    opacity: 0.5,
  },

  goalText: {
    padding: 10,
    color: '#fff',
  },
});
