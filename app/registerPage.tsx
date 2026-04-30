import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Register() {
  const [form, setForm] = useState({
   
    Nic: "",
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    Gender: "",
    Password: "",
    Address: "",
    Village: "",
    Role: "",
    OfficerId:"",
   
   
  });

  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    console.log(form);

   if (!form.Email || !form.Password){
      alert("Please fill required fields");
      return;
    }

    alert("Registered Successfully!");
  };

  return (
    <ScrollView style={styles.container}>
  <ImageBackground
    source={{
      uri: "https://images.newscientist.com/wp-content/uploads/2020/10/05175158/2-oct_elephant.jpg",
    }}

  style={{ height:150, justifyContent: "center" }}
    imageStyle={{ opacity: 0.6 }} // lighter background
  >
             <Text style={styles.title}>EleSafe Lanka</Text>
           
      <Text style={styles.title}>Create Account</Text>
</ImageBackground>

    {Object.keys(form).map((key) => {
  // ❌ hide OfficerId from normal loop (we’ll show it conditionally)
  if (key === "OfficerId") return null;

  return (

    
    <View key={key}>
      <Text style={styles.label}>{key}</Text>

      {/* ✅ Gender Dropdown */}
      {key === "Gender" ? (
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={form.Gender}
            onValueChange={(value) => handleChange("Gender", value)}
            dropdownIconColor="#00ff66"
            style={{ color: "#fff" }}
          >
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        </View>

      /* ✅ Role Dropdown */
      ) : key === "Role" ? (
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={form.Role}
            onValueChange={(value) => handleChange("Role", value)}
            dropdownIconColor="#00ff66"
            style={{ color: "#fff" }}
          >
            <Picker.Item label="Select Role" value="" />
            <Picker.Item label="User" value="User" />
            <Picker.Item label="Wild Officer" value="Wild Officer" />
          </Picker>
        </View>

      ) : (
        <TextInput
          style={styles.input}
          placeholder={`Enter ${key}`}
          placeholderTextColor="#888"
          secureTextEntry={key === "Password"}
          value={(form as any)[key]}
          onChangeText={(value) => handleChange(key, value)}
        />
      )}
    </View>
  );
})}

{/* ✅ Show only when Role = Wild Officer */}
{form.Role === "Wild Officer" && (
  <View>
    <Text style={styles.label}>Officer ID</Text>
    <TextInput
      style={styles.input}
      placeholder="Enter Officer ID"
      placeholderTextColor="#888"
      value={form.OfficerId}
      onChangeText={(value) => handleChange("OfficerId", value)}
    />
  </View>
)}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/loginPage")}>
  <Text style={{ color: "#00ff66", textAlign: "center",marginBottom:150 }}>
    Already have an account? Login
  </Text>
</TouchableOpacity>

    </ScrollView>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021e12",
    padding: 7,
    
  },

  logo: {
    fontSize: 28,
    color: "#00ff66",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    color: "#f8f3f3",
    textAlign: "center",
    marginBottom: 20,
  fontWeight:"bold"
  },
  
  label: {
    color: "#ccc",
    marginTop: 15,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#0a2f1f",
    padding: 15,
    borderRadius: 10,
    color: "#fff",
  },
  button: {
    backgroundColor: "#00ff66",
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 100,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
  },
});