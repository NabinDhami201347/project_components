import { GestureHandlerRootView } from "react-native-gesture-handler";
import ImageCarousel from "../components/ImageCarousel";
import { StyleSheet, View } from "react-native";

const Home = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageCarousel />
      </View>
    </GestureHandlerRootView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#191825",
  },
});
