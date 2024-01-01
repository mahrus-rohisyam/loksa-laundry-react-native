// storage.ts

import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to save a token to AsyncStorage
export const saveTokenToStorage = async (
  itemName: string,
  tokenValue: string,
): Promise<void> => {
  try {
    await AsyncStorage.setItem(itemName, tokenValue);
    // console.log(`Token '${itemName}' saved successfully.`);
  } catch (error) {
    console.error(`Error saving token '${itemName}':`, error);
  }
};

// Function to read a token from AsyncStorage
export const readTokenFromStorage = async (
  itemName: string,
): Promise<string | null> => {
  try {
    const token = await AsyncStorage.getItem(itemName);
    if (token !== null) {
      return token;
    } else {
      console.log(`Token '${itemName}' not found in storage.`);
      return null;
    }
  } catch (error) {
    console.error(`Error reading token '${itemName}':`, error);
    return null;
  }
};

export const removeTokenFromStorage = async (
  itemName: string,
): Promise<void> => {
  try {
    await AsyncStorage.removeItem(itemName);
    // console.log(`Token '${itemName}' removed from storage.`);
  } catch (error) {
    console.error(`Error removing token '${itemName}':`, error);
  }
};
