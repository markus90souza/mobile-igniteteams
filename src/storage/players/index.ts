import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/storageConfig'
import { AppError } from '@utils/AppError'
import { PlayerStorageDTO } from './PlayerStorageDTO'
const getPlayersByGroup = async (group: string) => {
  try {
    const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`)

    const players: PlayerStorageDTO[] = storage ? JSON.parse(storage) : []

    return players
  } catch (error) {
    throw error
  }
}

const AddPlayersByGroup = async (
  newPlayer: PlayerStorageDTO,
  group: string,
) => {
  try {
    const storedPlayer = await getPlayersByGroup(group)

    const playerExistsInOneGroup = storedPlayer.filter(
      (player) => player.name === newPlayer.name,
    )

    if (playerExistsInOneGroup.length > 0) {
      throw new AppError('Usuário já registrado em um grupo existente!')
    }

    const storage = JSON.stringify([...storedPlayer, newPlayer])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
  } catch (error) {
    throw error
  }
}

const getPlayersByGroupAndTeam = async (group: string, team: string) => {
  try {
    const storage = await getPlayersByGroup(group)
    const players = storage.filter((player) => player.team === team)

    return players
  } catch (error) {
    throw error
  }
}

export { getPlayersByGroup, AddPlayersByGroup, getPlayersByGroupAndTeam }
