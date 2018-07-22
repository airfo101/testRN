
### Coding
RN with typescript

[React-Native App](https://github.com/ReactNativeNews/React-Native-Apps)
[React-Native Sample](https://github.com/taskrabbit/ReactNativeSampleApp)


### Build
```ps
# Build debug apk without development server (unsigned)
react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug

cd ./android
./gradlew assembleDebug
```