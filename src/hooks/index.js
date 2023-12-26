import { useRecoilValue, useRecoilState, atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "data_user", // this key is using to store data in local storage
  storage: localStorage, // configurate which stroage will be used to store the data
});

const user = atom({
  key: "user",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const useSetUser = () => useRecoilState(user);
export const useGetValueUser = () => useRecoilValue(user);

const arrayProducts = atom({
  key: "products",
  default: [],
});

export const useSetProducts = () => useRecoilState(arrayProducts);
export const useGetProducts = () => useRecoilValue(arrayProducts);

const arraySuppliers = atom({
  key: "supplier",
  default: [],
});

export const useSetSuppliers = () => useRecoilState(arraySuppliers);
export const useGetSuppliers = () => useRecoilValue(arraySuppliers);
const arrayUsers = atom({
  key: "users",
  default: [],
});

export const useSetUsers = () => useRecoilState(arrayUsers);
export const useGetUsers = () => useRecoilValue(arrayUsers);

const arrayTasks = atom({
  key: "tasks",
  default: [],
});

export const useSetTasks = () => useRecoilState(arrayTasks);
export const useGetTasks = () => useRecoilValue(arrayTasks);

const product = atom({
  key: "product",
  default: {},
});
export const useSetProduct = () => useRecoilState(product);
export const useGetProduct = () => useRecoilValue(product);
const formProduct = atom({
  key: "formProduct",
  default: false,
});

export const useSetStatsFormProduct = () => useRecoilState(formProduct);
export const getStatusFormProduct = () => useRecoilValue(formProduct);

const formTask = atom({
  key: "formTask",
  default: false,
});

export const useSetStatusFormTask = () => useRecoilState(formTask);
export const getStatusFormTask = () => useRecoilValue(formTask);
const formSupplier = atom({
  key: "formSupplier",
  default: false,
});

export const useSetStatsFormSupplier = () => useRecoilState(formSupplier);
export const getStatusFormSupplier = () => useRecoilValue(formSupplier);

// const token = atom({
//   key: "auth_token",
//   default: "",
//   effects_UNSTABLE: [persistAtom],
// });

// export const useSetToken = () => useRecoilState(token);
// export const useGetToken = () => useRecoilValue(token);
