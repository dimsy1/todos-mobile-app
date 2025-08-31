import { createSettingsStyles } from "@/assets/styles/settings.styles";
import ProgressStats from "@/components/ProgressStats";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  const [isAutoSync, setAutoSync] = useState(true);
  const [isNotificationEnable, setNotificationEnable] = useState(true);

  const { colors, isDarkMode, toggleDarkMode } = useTheme();

  const settingStyle = createSettingsStyles(colors);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={settingStyle.container}
    >
      <SafeAreaView style={settingStyle.safeArea}>
        {/* Header */}
        <View style={settingStyle.header}>
          <View style={settingStyle.titleContainer}>
            <LinearGradient
              colors={colors.gradients.primary}
              style={settingStyle.iconContainer}
            >
              <Ionicons name="settings" size={28} color="#fff" />
            </LinearGradient>
            <Text style={settingStyle.title}>Settings</Text>
          </View>
        </View>

        <ScrollView
          style={settingStyle.scrollView}
          contentContainerStyle={settingStyle.content}
          showsVerticalScrollIndicator={false}
        >
          <ProgressStats />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
