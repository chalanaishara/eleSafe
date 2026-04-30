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

        {/* Username */}
        <Text style={styles.label}>USERNAME OR EMAIL</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#aaa" />
          <TextInput
            placeholder="RangerID / Email"
            placeholderTextColor="#aaa"
            style={styles.input}
          />
        </View>

        {/* Password */}
        <Text style={styles.label}>PASSWORD</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#aaa" />
          <TextInput
            placeholder="••••••••"
            placeholderTextColor="#aaa"
            secureTextEntry={!passwordVisible}
            style={styles.input}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Ionicons
              name={passwordVisible ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#aaa"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginBtn}>
          <Ionicons name="log-in-outline" size={20} color="#000" />
          <Text style={styles.loginText}>LOG IN</Text>
        </TouchableOpacity>

       
       

    <Text style={[styles.footer,
                  {padding:20}]
    }>
  Don't have an account?{" "}
  <Text
    style={{ color: "#00ff66",  }}
    onPress={() => router.push("/register")}
  >
    Register Here
  </Text>
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