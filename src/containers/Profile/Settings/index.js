import React, { useContext } from "react";
import { Container, NavBar, Avatar, Text, Button, ListItem } from "components";
import PropTypes from "prop-types";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { getProfile } from "mocks/me";
import Colors from "themes/colors";
import { scale } from "react-native-size-matters";
import { AuthContext } from "contexts/AuthContext";

const profile = getProfile();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.white,
    padding: scale(14),
    borderBottomWidth: 1,
    borderColor: Colors.gray10,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    marginHorizontal: scale(14),
    flex: 1,
  },
  label: {
    padding: scale(14),
  },
  signOut: {
    paddingVertical: scale(18),
    alignItems: "center",
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.gray10,
    marginBottom: scale(24),
  },
});

const Settings = ({ navigation }) => {
  const { signOut } = useContext(AuthContext);

  return (
    <Container>
      <NavBar title="Settings" onLeftIconPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.profile}>
            <Avatar size={45} source={profile.image} />
            <View style={styles.name}>
              <Text font="p1" weight="medium">
                {profile.name}
              </Text>
              <Text>{profile.username}</Text>
            </View>
            <Button
              size="tiny"
              label="Edit"
              onPress={() => navigation.navigate("EditProfile")}
            />
          </View>
        </View>
        <ScrollView>
          <View style={styles.label}>
            <Text>Account Settings</Text>
          </View>
          <ListItem
            title="My Profile"
            leftIcon="account-outline"
            onPress={() => navigation.navigate("EditProfile")}
          />
          <ListItem
            title="Password Management"
            leftIcon="key-outline"
            onPress={() => navigation.navigate("ChangePassword")}
          />
          <ListItem
            title="Payment Methods"
            leftIcon="credit-card-outline"
            onPress={() => navigation.navigate("PaymentMethod")}
          />
          <ListItem
            title="Address Book"
            leftIcon="book-open-outline"
            onPress={() => navigation.navigate("AddressBook")}
          />
          <View style={styles.label}>
            <Text>Personalization</Text>
          </View>
          <ListItem
            title="Notifications"
            leftIcon="bell-outline"
            onPress={() => navigation.navigate("NotificationSettings")}
          />
          <ListItem
            title="Privacy"
            leftIcon="lock-outline"
            onPress={() => navigation.navigate("PrivacySettings")}
          />
          <View style={styles.label}>
            <Text>Support</Text>
          </View>
          <ListItem
            title="FAQ"
            leftIcon="comment-question-outline"
            onPress={() => navigation.navigate("Faq")}
          />
          <ListItem
            title="About Us"
            leftIcon="information-outline"
            onPress={() => navigation.navigate("AboutUs")}
          />
          <ListItem
            title="Privacy Policy"
            leftIcon="file-document-edit-outline"
            onPress={() => navigation.navigate("PrivacyPolicy")}
          />

          <View style={styles.label}>
            <Text centered font="h5" color="gray50">
              App version 1.0.0
            </Text>
          </View>
          <TouchableOpacity style={styles.signOut} onPress={() => signOut()}>
            <Text>Sign Out</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Container>
  );
};
Settings.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Settings;
