import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={{
          uri: "https://images.newscientist.com/wp-content/uploads/2020/10/05175158/2-oct_elephant.jpg?crop=1:1,smart&width=1200&height=1200&upscale=true",
        }}
        style={styles.header}
        imageStyle={{ opacity: 0.6 }}
      >
        <Text style={styles.title}>EleSafe Lanka</Text>
      </ImageBackground>

      {/* Form Section */}
      <View style={styles.form}>
        <Text style={styles.welcome}>Welcome Back</Text>
        <Text style={styles.subtitle}>
          Sign in to report incidents and track activity.
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
    onPress={() => router.push("/registerPage")}
  >
    Register Here
  </Text>
</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021d0f",
  },
  header: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
  form: {
    flex: 1,
    padding: 20,
  },
  welcome: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    color: "#aaa",
    marginBottom: 20,
  },
  label: {
    color: "#888",
    fontSize: 12,
    marginTop: 10,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0b2e1a",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    color: "#fff",
    marginLeft: 10,
  },
  forgot: {
    color: "#00ff66",
    textAlign: "right",
    marginBottom: 20,
  },
  loginBtn: {
    flexDirection: "row",
    backgroundColor: "#00ff66",
    padding: 15,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  loginText: {
    fontWeight: "bold",
    color: "#000",
  },
  divider: {
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialBtn: {
    backgroundColor: "#0b2e1a",
    padding: 12,
    borderRadius: 10,
    width: "48%",
    alignItems: "center",
  },
  socialText: {
    color: "#fff",
  },
  footer: {
    color: "#aaa",
    textAlign: "center",
    marginTop: 20,
  },
});