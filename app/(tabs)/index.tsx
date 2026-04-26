import { View, Text, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  const handleLogout = () => {
    // clear token here if using AsyncStorage
    router.replace("../login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to EleSafe 🐘</Text>

      <Text style={styles.subtitle}>
        Human - Elephant Conflict Alert System
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>
          📍 Track elephant movements
        </Text>
        <Text style={styles.cardText}>
          🚨 Get danger alerts
        </Text>
        <Text style={styles.cardText}>
          🗺️ View safe zones
        </Text>
      </View>

      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 30,
  },
  card: {
    backgroundColor: "#f2f2f2",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    marginBottom: 20,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 10,
  },
});