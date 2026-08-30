import { stackScreenOptions } from "@/lib/navigation";
import { Stack } from "expo-router";

export default function LibraryLayout() {
  return <Stack screenOptions={{ ...stackScreenOptions, headerShown: false }} />;
}
