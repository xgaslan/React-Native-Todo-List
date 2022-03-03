import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import Task from "./components/Task";

export default function App ()
{
    return (
        <View style={styles.container}>
            {/* Wrapper */}
            <View style={styles.taskWrapper}>
                {/* Title */}
                <Text style={styles.sectionTitle}>Tasks</Text>
                {/* Tasks */}
                <View style={styles.items}>
                    <Task text={"Task 1"} />
                    <Task text={"Task 2"} />
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8EAED",
    },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold"
    },
    items: {
        marginTop: 30
    },
});
