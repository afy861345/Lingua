import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View className="flex-1 items-center justify-center">
        <View className="card items-center gap-3 p-6">
          <Text className="h1 text-text-primary">index</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
})
