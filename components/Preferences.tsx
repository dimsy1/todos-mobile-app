import { createSettingsStyles } from "@/assets/styles/settings.styles";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Switch, Text, View } from "react-native";

const Preferences = () => {
  const [isAutoSync, setIsAutoSync] = useState(true);
  const [isNotificationEnable, setIsNotificationEnable] = useState(true);

  const { isDarkMode, toggleDarkMode, colors } = useTheme();

  const settingStyle = createSettingsStyles(colors);

  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingStyle.section}
    >
      <Text style={settingStyle.sectionTitle}>Preferences</Text>

      {/* Dark Mode */}
      <View style={settingStyle.settingItem}>
        <View style={settingStyle.settingLeft}>
          <LinearGradient
            colors={colors.gradients.primary}
            style={settingStyle.settingIcon}
          >
            <Ionicons name="moon" size={18} color="#fff" />
          </LinearGradient>
          <Text style={settingStyle.settingText}>Dark Mode</Text>
        </View>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          thumbColor={"#fff"}
          trackColor={{ false: colors.border, true: colors.primary }}
        />
      </View>

      {/* Notification */}
      <View style={settingStyle.settingItem}>
        <View style={settingStyle.settingLeft}>
          <LinearGradient
            colors={colors.gradients.warning}
            style={settingStyle.settingIcon}
          >
            <Ionicons name="notifications" size={18} color="#fff" />
          </LinearGradient>
          <Text style={settingStyle.settingText}>Notification</Text>
        </View>
        <Switch
          value={isNotificationEnable}
          onValueChange={() => setIsNotificationEnable(!isNotificationEnable)}
          thumbColor={"#fff"}
          trackColor={{ false: colors.border, true: colors.warning }}
        />
      </View>

      {/* Auto Sync */}
      <View style={settingStyle.settingItem}>
        <View style={settingStyle.settingLeft}>
          <LinearGradient
            colors={colors.gradients.success}
            style={settingStyle.settingIcon}
          >
            <Ionicons name="sync" size={18} color={"#fff"} />
          </LinearGradient>
          <Text style={settingStyle.settingText}>Auto Sync</Text>
        </View>
        <Switch
          value={isAutoSync}
          onValueChange={() => setIsAutoSync(!isAutoSync)}
          thumbColor={"#fff"}
          trackColor={{ false: colors.border, true: colors.success }}
        />
      </View>
    </LinearGradient>
  );
};

export default Preferences;
