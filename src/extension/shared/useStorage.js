/* eslint-disable react-hooks/exhaustive-deps */

import { useState } from "ganic-usex";
import { getVersion } from "./utils";

const getStoredValue = (key, initValue) => {
  if (!key) {
    return initValue;
  }
  try {
    return JSON.parse(window.localStorage[key]);
  } catch (e) {
    return initValue;
  }
};

const setStoredValue = (key, value) => {
  if (!key) {
    return;
  }
  try {
    window.localStorage[key] = JSON.stringify(value);
  } catch (e) {}
};

const useStorage = (key, defaultValue) => {
  key = key ? (key + '@' + getVersion()) : key;
  const [value, setValue] = useState(() => getStoredValue(key, defaultValue));
  setStoredValue(key, value);
  return [value, setValue];
};

export default useStorage;
