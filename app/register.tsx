import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { register } from "../src/api/authApi";

export default function Register() {
  const [form, setForm] = useState({
    nic: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    password: "",
    address: "",
    village: "",
    role: "",
    badgeNumber: "",
    station: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = async () => {
    if (!form.email || !form.password || !form.role) {
      setError("Please fill all required fields");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const payload: any = {
        nic: form.nic,
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phoneNumber: form.phoneNumber,
        gender: form.gender.toUpperCase(),
        password: form.password,
        address: form.address,
        village: form.village,
        role: form.role === "Wild Officer" ? "WILD_OFFICER" : form.role.toUpperCase(),
      };

      // ✅ Only add if Wild Officer
      if (form.role === "Wild Officer") {
        payload.badgeNumber = form.badgeNumber;
        payload.station = form.station;
      }

      await register(payload);
      alert("Registered Successfully!");
      router.replace("/");
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://images.newscientist.com/wp-content/uploads/2020/10/05175158/2-oct_elephant.jpg",
        }}
        style={{ height: 150, justifyContent: "center" }}
        imageStyle={{ opacity: 0.6 }}
      >
        <Text style={styles.title}>EleSafe Lanka</Text>
        <Text style={styles.title}>Create Account</Text>
      </ImageBackground>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      {/* NIC */}
      <Text style={styles.label}>NIC</Text>
      <TextInput style={styles.input} placeholder="Enter NIC"
        placeholderTextColor="#888" value={form.nic}
        onChangeText={(v) => handleChange("nic", v)} />

      {/* First Name */}
      <Text style={styles.label}>First Name</Text>
      <TextInput style={styles.input} placeholder="Enter First Name"
        placeholderTextColor="#888" value={form.firstName}
        onChangeText={(v) => handleChange("firstName", v)} />

      {/* Last Name */}
      <Text style={styles.label}>Last Name</Text>
      <TextInput style={styles.input} placeholder="Enter Last Name"
        placeholderTextColor="#888" value={form.lastName}
        onChangeText={(v) => handleChange("lastName", v)} />

      {/* Email */}
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="Enter Email"
        placeholderTextColor="#888" value={form.email}
        keyboardType="email-address" autoCapitalize="none"
        onChangeText={(v) => handleChange("email", v)} />

      {/* Phone */}
      <Text style={styles.label}>Phone Number</Text>
      <TextInput style={styles.input} placeholder="Enter Phone Number"
        placeholderTextColor="#888" value={form.phoneNumber}
        keyboardType="phone-pad"
        onChangeText={(v) => handleChange("phoneNumber", v)} />

      {/* Gender */}
      <Text style={styles.label}>Gender</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={form.gender}
          onValueChange={(v) => handleChange("gender", v)}
          dropdownIconColor="#00ff66" style={{ color: "#fff" }}>
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="MALE" />
          <Picker.Item label="Female" value="FEMALE" />
          <Picker.Item label="Other" value="OTHER" />
        </Picker>
      </View>

      {/* Password */}
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} placeholder="Enter Password"
        placeholderTextColor="#888" value={form.password}
        secureTextEntry onChangeText={(v) => handleChange("password", v)} />

      {/* Address */}
      <Text style={styles.label}>Address</Text>
      <TextInput style={styles.input} placeholder="Enter Address"
        placeholderTextColor="#888" value={form.address}
        onChangeText={(v) => handleChange("address", v)} />

      {/* Village */}
      <Text style={styles.label}>Village</Text>
      <TextInput style={styles.input} placeholder="Enter Village"
        placeholderTextColor="#888" value={form.village}
        onChangeText={(v) => handleChange("village", v)} />

      {/* Role */}
      <Text style={styles.label}>Role</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={form.role}
          onValueChange={(v) => handleChange("role", v)}
          dropdownIconColor="#00ff66" style={{ color: "#fff" }}>
          <Picker.Item label="Select Role" value="" />
          <Picker.Item label="User" value="USER" />
          <Picker.Item label="Wild Officer" value="Wild Officer" />
        </Picker>
      </View>

      {/* ✅ Wild Officer only fields */}
      {form.role === "Wild Officer" && (
        <>
          <Text style={styles.label}>Badge Number</Text>
          <TextInput style={styles.input} placeholder="Enter Badge Number"
            placeholderTextColor="#888" value={form.badgeNumber}
            onChangeText={(v) => handleChange("badgeNumber", v)} />

          <Text style={styles.label}>Station</Text>
          <TextInput style={styles.input} placeholder="Enter Station"
            placeholderTextColor="#888" value={form.station}
            onChangeText={(v) => handleChange("station", v)} />
        </>
      )}

      <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={loading}>
        {loading ? <ActivityIndicator color="#000" /> :
          <Text style={styles.buttonText}>Register</Text>}
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#021e12", padding: 7 },
  title: { fontSize: 22, color: "#f8f3f3", textAlign: "center", marginBottom: 20, fontWeight: "bold" },
  label: { color: "#ccc", marginTop: 15, marginBottom: 10 },
  input: { backgroundColor: "#0a2f1f", padding: 15, borderRadius: 10, color: "#fff" },
  pickerContainer: { backgroundColor: "#0a2f1f", borderRadius: 10, marginBottom: 5 },
  button: { backgroundColor: "#00ff66", padding: 15, borderRadius: 12, marginTop: 20, marginBottom: 100 },
  buttonText: { textAlign: "center", fontWeight: "bold" },
  errorText: { color: "#ff4444", textAlign: "center", margin: 10 },
});