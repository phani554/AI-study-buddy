import { colors } from "@/lib/theme";
import { NativeTabs } from "expo-router/unstable-native-tabs";

export const unstable_settings = {
  anchor: "(library)",
};

export default function TabsLayout() {
  return (
    <NativeTabs tintColor={colors.primary}>
      <NativeTabs.Trigger name="(library)">
        <NativeTabs.Trigger.Icon
          sf={{
            default: "books.vertical",
            selected: "books.vertical.fill",
          }}
          md="menu_book"
        />
        <NativeTabs.Trigger.Label>Library</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="(settings)">
        <NativeTabs.Trigger.Icon
          sf={{
            default: "gearshape",
            selected: "gearshape.fill",
          }}
          md="settings"
        />
        <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
