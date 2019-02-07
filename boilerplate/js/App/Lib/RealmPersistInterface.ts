// import Realm from 'realm';
//
// const Symbol = require('es6-symbol/polyfill');
// const singleton = Symbol();
// const singletonEnforcer = Symbol();
// export default class RealmPersistInterface {
//   realm;
//   _type;
//   items;
//   constructor(enforcer) {
//     if (enforcer !== singletonEnforcer) {
//       throw new Error('Cannot construct singleton');
//     }
//     this._type = 'RealmPersistInterface';
//     this.realm = Realm.open({
//       path: 'redux.realm',
//       schema: [
//         {
//           name: 'Item',
//           primaryKey: 'name',
//           properties: {
//             name: 'string',
//             content: 'string'
//           }
//         }
//       ]
//     });
//   }
//   static get instance() {
//     if (!this[singleton]) {
//       this[singleton] = new RealmPersistInterface(singletonEnforcer);
//     }
//     return this[singleton];
//   }
//   get type() {
//     return this._type;
//   }
//   async check() {
//     if (!this.items) {
//       this.realm = await this.realm;
//       this.items = this.realm.objects('Item');
//     }
//   }
//   async getItem(key) {
//     await this.check();
//     return new Promise((resolve, reject) => {
//       try {
//         const matches = this.items.filtered(`name = "${key}"`);
//         if (matches.length > 0 && matches[0]) {
//           resolve(matches[0].content);
//         } else {
//           reject(new Error(`Could not get item with key: '${key}'`));
//         }
//       } catch (error) {
//         reject(error);
//       }
//     });
//   };
//   async setItem(key, value) {
//     await this.check();
//     return new Promise((resolve, reject) => {
//       try {
//         this.realm.write(() => {
//           this.realm.create('Item', { name: key, content: value }, true);
//           resolve();
//         });
//       } catch (error) {
//         reject(error);
//       }
//     });
//   };
//   async removeItem(key) {
//     await this.check();
//     return new Promise((resolve, reject) => {
//       try {
//         this.realm.write(() => {
//           const item = this.items.filtered(`name = "${key}"`);
//           this.realm.delete(item);
//           resolve();
//         });
//       } catch (error) {
//         reject(error);
//       }
//     });
//   };
//   async getAllKeys() {
//     await this.check();
//     return new Promise((resolve, reject) => {
//       try {
//         const keys = this.items.map(item => item.name);
//         resolve(keys);
//       } catch (error) {
//         reject(error);
//       }
//     });
//   };
// }
