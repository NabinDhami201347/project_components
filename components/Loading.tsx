import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";

const Loading = () => {
  return (
    <View style={{ flexDirection: "row", gap: 6 }}>
      <Skeleton width={120} height={40} />
      <Skeleton circle width={40} height={40} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
