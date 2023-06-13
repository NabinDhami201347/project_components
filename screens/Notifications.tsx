import { View } from "react-native";
import Card from "../components/Card";
import Notice from "../components/Notice";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";

const Notifications = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card
          icon="md-checkmark-circle"
          content="Google developers are paid huge amount of salary."
        />
        <Card
          icon="logo-facebook"
          content="Google developers are paid huge amount of salary."
        />
        <Card
          icon="logo-twitter"
          content="Google developers are paid huge amount of salary."
        />
        <Card
          icon="logo-linkedin"
          content="Google developers are paid huge amount of salary."
        />
        <Card
          icon="logo-instagram"
          content="Google developers are paid huge amount of salary."
        />
        <Card
          icon="logo-whatsapp"
          content="Google developers are paid huge amount of salary."
        />
        <Card
          icon="logo-google"
          content="Google developers are paid huge amount of salary."
        />
        <Notice
          content="Google developers are paid huge amount of salary."
          date="2000-01-01T08:15:30"
          category="Scholarship"
        />
        <Notice
          content="Google developers are paid huge amount of salary."
          date="2023-06-14"
          icon="newspaper-sharp"
          category="Examination"
        />
        <Notice
          icon="analytics"
          content="Google developers are paid huge amount of salary."
          date="2023-06-10"
          category="Adminstration"
        />
      </View>
    </ScrollView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#191825",
  },
});
