import { StatusBar } from 'expo-status-bar';
import { Text, View,Image } from 'react-native';

export default function App() {
  return (
    <View className="p-8 flex-col justify-between h-full ">

      <View className="gap-10">
     <View className="flex-row justify-between ">
      <View className="flex-col item-center"><Image source={{uri:"https://img.freepik.com/premium-photo/cute-cheerful-girl-isolated-white-background-generative-ai_58409-46617.jpg"}} className="w-10 h-10 rounded-full" />
      <Text>Normal</Text></View>

      <View className="flex-col item-center"><Image source={{uri:"https://image.freepik.com/free-vector/happy-cute-child-girl-cartoon-vector_39663-15.jpg" }} className="w-10 h-10 rounded-full" />
      <Text>Happy</Text></View>

      <View className="flex-col item-center"><Image source={{uri:"https://th.bing.com/th/id/R.fb3c52b61eb916de9bc2ed7516c9e2b0?rik=kEhBs2qBXY73Ig&riu=http%3a%2f%2fwww.thevaccinemom.com%2fwp-content%2fuploads%2f2018%2f07%2fscared-girls-collection-002.jpg&ehk=kWVgU%2fMvKkxqLxjLQ9CptEHrx%2feNoE9Jez4ucffEJDg%3d&risl=&pid=ImgRaw&r=0"}} className="w-10 h-10 rounded-full"/>
      <Text>Angry</Text></View>

      <View className="flex-col item-center"><Image source={{uri:"https://th.bing.com/th/id/R.daa598c3f47b2a9428d864e99d1798b7?rik=ks78Yo2vEV9QKg&pid=ImgRaw&r=0"}} className="w-10 h-10 rounded-full" />
      <Text>Sad</Text></View>
     </View>
    
     <View className="flex-row justify-between ">
      <View className="flex-col item-center"><Image source={{uri:"https://th.bing.com/th/id/OIP._WW3QSWYMwKOtddAkQmcSgHaI0?rs=1&pid=ImgDetMain" }} className="w-10 h-10 rounded-full"/><View><Text className="text-center">Anxious</Text></View></View>

      <View className="flex-col item-center"><Image source={{uri:"https://clipground.com/images/depressiveness-clipart-12.jpg"}} className="w-10 h-10 rounded-full"/><View><Text className="text-center">Depressed</Text></View></View>

      <View className="flex-column item-center"><Image source={{uri:"https://th.bing.com/th/id/OIP.f0bicsp5xf7FTx-9q97_rAHaG9?rs=1&pid=ImgDetMain"}} className="w-10 h-10 rounded-full"/><View><Text className="text-center">Confused</Text></View></View>

      <View className="flex-col item-center"><Image source={{uri:"https://th.bing.com/th/id/OIP.kZpziOiMiPMlP4dC3SF2AgAAAA?rs=1&pid=ImgDetMain"}} className="w-10 h-10 rounded-full"/><View><Text className="text-center">Exhausted</Text></View></View>
     </View>
    


     
    
     <View >
      <Text className="text-center font-bold text-xl">
        Understand your cycle better by using your body signals
      </Text>
     </View>

     <View>
      <Text className="text-center">
        Your can impact your cycle as well as your fertile days
        </Text>
        </View>
        </View>
        

        <View >
          <View className="rounded-3xl bg-pink-400 h-10 ">
            <Text className="text-center text-xl text-white" >
            Next
            </Text>
          </View>
        </View>
    </View>
  );
}

