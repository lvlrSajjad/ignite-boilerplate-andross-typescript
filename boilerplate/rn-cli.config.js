module.exports = {
	transformer: {
    babelTransformerPath: require.resolve("react-native-typescript-transformer"),
  },
  getSourceExts() {
    return ["ts", "tsx"];
  }
};
