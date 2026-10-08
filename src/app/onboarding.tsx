import { Link } from "expo-router";
import { Image, Pressable, Text, View, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants/images";

export default function OnboardingScreen() {
  const { height, width } = useWindowDimensions();
  const compact = height < 740;

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#ffffff" }}
      edges={["top", "bottom"]}
    >
      <View className="onboarding-content">
        <View className="onboarding-brand">
          <Image source={images.mascotLogo} className="onboarding-logo" resizeMode="contain" />
          <Text className="onboarding-brand-name">muolingo</Text>
        </View>

        <View className="onboarding-copy">
          <Text className="onboarding-title">
            Your AI language{"\n"}
            <Text className="onboarding-title-accent">teacher</Text>.
          </Text>
          <Text className="onboarding-subtitle">
            Real conversations, personalized lessons, anytime, anywhere.
          </Text>
        </View>

        <View
          className="onboarding-hero"
          style={{ minHeight: 190, maxHeight: compact ? 285 : 340 }}
        >
          <Image
            source={images.mascotWelcome}
            resizeMode="contain"
            style={{ width: Math.min(width * 0.64, 290), height: "100%" }}
          />
          <View className="onboarding-bubble onboarding-hello">
            <Text className="onboarding-bubble-text onboarding-hello-text">Hello!</Text>
          </View>
          <View className="onboarding-bubble onboarding-hola">
            <Text className="onboarding-bubble-text onboarding-hola-text">{"\u00a1Hola!"}</Text>
          </View>
          <View className="onboarding-bubble onboarding-nihao">
            <Text className="onboarding-bubble-text onboarding-nihao-text">{"\u4f60\u597d!"}</Text>
          </View>
        </View>

        <Link href="/" asChild>
          <Pressable className="onboarding-cta active:opacity-85">
            <Text className="onboarding-cta-text">Get Started</Text>
            <Text className="onboarding-cta-arrow">{"\u203a"}</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}
