import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Groups } from '@screens/Groups'
import { NewGroup } from '@screens/NewGroup'
import { Players } from '@screens/Players'

const { Screen, Navigator, Group } = createNativeStackNavigator()

const AppRoutes = () => {
  return (
    <Navigator>
      <Group screenOptions={{ headerShown: false }}>
        <Screen name="groups" component={Groups} />
        <Screen name="new" component={NewGroup} />
        <Screen name="players" component={Players} />
      </Group>
    </Navigator>
  )
}

export { AppRoutes }
