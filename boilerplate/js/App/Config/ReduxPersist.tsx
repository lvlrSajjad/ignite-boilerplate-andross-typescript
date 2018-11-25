import immutablePersistenceTransform from "../Services/ImmutablePersistenceTransform";
//import RealmPersistInterface from '../Lib/RealmPersistInterface'
//const storage = RealmPersistInterface.instance;
import {AsyncStorage} from "react-native";

// More info here:  https://shift.infinite.red/shipping-persistant-reducers-7341691232b1
const REDUX_PERSIST = {
  active: true,
  reducerVersion: "1.0",
  storeConfig: {
    key: "primary",
    //storage,
    storage:AsyncStorage,
    // Reducer keys that you do NOT want stored to persistence here.
    blacklist: ["login", "search", "nav"],
    whitelist: ["appSettings"],
    // Optionally, just specify the keys you DO want stored to persistence.
    // An empty array means 'don't store any reducers' -> infinitered/ignite#409
    // whitelist: [],
    transforms: [immutablePersistenceTransform]
  }
};

export default REDUX_PERSIST;
