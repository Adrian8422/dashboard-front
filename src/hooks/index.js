import { useRecoilValue, useRecoilState, atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "data_user", // this key is using to store data in local storage
  storage: localStorage, // configurate which stroage will be used to store the data
});

const userRol = atom({
  key: "userRol",
  default: {
    email: "",
    rol: "",
  },
  effects_UNSTABLE: [persistAtom],
});

export const useSetRolUser = () => useRecoilState(userRol);
export const useGetValueRolUser = () => useRecoilValue(userRol);

const arrayProducts = atom({
  key: "products",
  default: [],
});

export const useSetProducts = () => useRecoilState(arrayProducts);
export const useGetProducts = () => useRecoilValue(arrayProducts);

const formProduct = atom({
  key: "formProduct",
  default: false,
});

export const useSetStatsFormProduct = () => useRecoilState(formProduct);
export const getStatusFormProduct = () => useRecoilValue(formProduct);
