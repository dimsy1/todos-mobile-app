import { createSettingsStyles } from "@/assets/styles/settings.styles";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

const ProgressStats = () => {
  const { colors } = useTheme();
  const settingStyle = createSettingsStyles(colors);

  const todos = useQuery(api.todos.getTodos);
  const totalTodos = todos ? todos.length : 0;
  const completedTodos = todos
    ? todos.filter((todo) => todo.isCompleted).length
    : 0;
  const activeTodos = totalTodos - completedTodos;

  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingStyle.section}
    >
      <Text style={settingStyle.sectionTitle}>Progress Stats</Text>

      <View style={settingStyle.statsContainer}>
        {/* Total Todos */}
        <LinearGradient
          colors={colors.gradients.background}
          style={[settingStyle.statCard, { borderLeftColor: colors.primary }]}
        >
          <View style={settingStyle.statIconContainer}>
            <LinearGradient
              colors={colors.gradients.primary}
              style={settingStyle.statIcon}
            >
              <Ionicons name="list" size={20} color="#fff" />
            </LinearGradient>
          </View>

          <View>
            <Text style={settingStyle.statNumber}>{totalTodos}</Text>
            <Text style={settingStyle.statLabel}>Total Todos</Text>
          </View>
        </LinearGradient>

        {/* Completed Todos */}
        <LinearGradient
          colors={colors.gradients.background}
          style={[settingStyle.statCard, { borderLeftColor: colors.success }]}
        >
          <View style={settingStyle.statIconContainer}>
            <LinearGradient
              colors={colors.gradients.success}
              style={settingStyle.statIcon}
            >
              <Ionicons name="checkmark-circle" size={20} color="#fff" />
            </LinearGradient>
          </View>

          <View>
            <Text style={settingStyle.statNumber}>{completedTodos}</Text>
            <Text style={settingStyle.statLabel}>Completed Todos</Text>
          </View>
        </LinearGradient>

        {/* Active Todos */}
        <LinearGradient
          colors={colors.gradients.background}
          style={[settingStyle.statCard, { borderLeftColor: colors.warning }]}
        >
          <View style={settingStyle.statIconContainer}>
            <LinearGradient
              colors={colors.gradients.warning}
              style={settingStyle.statIcon}
            >
              <Ionicons name="time" size={20} color="#fff" />
            </LinearGradient>
          </View>

          <View>
            <Text style={settingStyle.statNumber}>{activeTodos}</Text>
            <Text style={settingStyle.statLabel}>Active Todos</Text>
          </View>
        </LinearGradient>
      </View>
    </LinearGradient>
  );
};

export default ProgressStats;
