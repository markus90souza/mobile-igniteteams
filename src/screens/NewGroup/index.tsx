import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
// Components
import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
// End components
import { Container, Wrapper, Icon } from './styles'
import { createGroup } from '@storage/group'
import { AppError } from '@utils/AppError'
import { Alert } from 'react-native'

const NewGroup = () => {
  const [group, setGroup] = useState('')

  const { navigate } = useNavigation()

  const handleCreateGroup = async () => {
    try {
      if (group.trim().length === 0) {
        return Alert.alert('Novo grupo', 'Informe o nome do grupo!')
      }
      await createGroup(group)
      navigate('players', {
        group,
      })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo grupo', error.message)
      } else {
        Alert.alert('Novo grupo', 'Não foi possivel criar um novo grupo')
        console.log(error)
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Wrapper>
        <Icon />
        <Highlight
          title="Nova Turma"
          subTitle="crie uma turma para adicionar pessoas"
        />

        <Input placeholder={'Cadastrar nova turma'} onChangeText={setGroup} />

        <Button
          title={'Criar'}
          style={{ marginTop: 20 }}
          onPress={handleCreateGroup}
        />
      </Wrapper>
    </Container>
  )
}

export { NewGroup }
