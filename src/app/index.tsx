import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Text className="mb-6 text-center font-[Poppins-Bold] text-3xl text-[#10183b]">
        muolingo
      </Text>
      <Link href="/onboarding" asChild>
        <Pressable className="rounded-2xl bg-[#563df5] px-8 py-4 active:opacity-80">
          <Text className="font-[Poppins-SemiBold] text-base text-white">
            View onboarding
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
