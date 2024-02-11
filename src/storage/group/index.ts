import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from '@storage/storageConfig'
import { AppError } from '@utils/AppError'

const getAllGroups = async () => {
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION)
    const groups = storage ? JSON.parse(storage) : []
    return groups
  } catch (error) {
    throw error
  }
}

const createGroup = async (name: string) => {
  try {
    const storedGroups = await getAllGroups()

    const groupAlreadysExists = storedGroups.includes(name)

    if (groupAlreadysExists) {
      throw new AppError('Grupo já existente com esse nome')
    }

    const storage = JSON.stringify([...storedGroups, name])
    AsyncStorage.setItem(GROUP_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}

export { createGroup, getAllGroups }
