import { useState } from 'react'
import { Button, Image, Text, TextInput, View } from 'react-native'

export default function App() {
  const [name, setname] = useState("")
  const [visibleName, setVisibleName] = useState(name)

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1, justifyContent: "space-evenly", alignItems: "center", backgroundColor: "#fff"}}>
        <View style={{alignItems: "center"}}>
          <Text style={{fontSize: 16}}>
            Cadastre seu Projeto:
          </Text>
        </View>

        <View style={{flexDirection: "row", alignItems: "center", marginTop: 20}}>
          <Text>
            Nome:
          </Text>

          <TextInput style={{width: 250, height: 30, borderWidth: 1, marginLeft: 10, padding: 5}} value={name} onChangeText={newName => setname(newName)}/>
        </View>

        <View style={{width: 300, flexDirection: "row", justifyContent: "space-between"}}>
          <View>
            <Button title="Limpar" onPress={() => setname("")}/>
          </View>

          <View>
            <Button title="Cadastrar" onPress={() => setVisibleName(name)}/>
          </View>
        </View>
      </View>

      <View style={{flex: 1, justifyContent: "space-evenly", alignItems: "center"}}>
        <Text>
          {visibleName}
        </Text>

        <Image style={{width: 250, height: 250}} source={require("./assets/meeting.jpg")}/>
      </View>
    </View>
  )
}
