import { Text, View } from "react-native";

export default function LibraryScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-[#101010] px-6">
      <Text className="text-2xl font-semibold text-white">Library</Text>
      <Text className="mt-2 text-center text-base text-zinc-400">
        Your study materials will appear here.
      </Text>
    </View>
  );
}

