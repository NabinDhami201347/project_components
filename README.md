```sh
npx create-react-native-app -t with-typescript
npx expo install react-native-safe-area-context
npx expo install react-native-reanimated

npm install @rneui/themed @rneui/base
npm install @rneui/base@edge @rneui/themed@edge

npm i react-native-reanimated-carousel
npm install --save react-native-gesture-handler
```

```ts
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"],
  };
};
```

### [Documentation](https://docs.expo.dev/develop/user-interface/animation/) | [React Native Elements](https://reactnativeelements.com/docs) | [react-native-reanimated-carousel](https://www.npmjs.com/package/react-native-reanimated-carousel)
