import {
  TextInput as RNTextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import Colors, { colorProps } from "themes/colors";
import { scale, verticalScale } from "react-native-size-matters";
import Fonts from "themes/fonts";
import Icon from "react-native-vector-icons/Feather";
import Label from "./parts/Label";
import Text from "../Text";

const TextField = ({
  initialValue,
  label,
  error,
  labelColor,
  renderRightComponent,
  hideError,
  secureTextEntry,
  multiline,
  ...otherProps
}) => {
  const [isFocused, setFocused] = useState(false);
  const [value, setValue] = useState(initialValue);
  const [isSecureVisible, setSecureVisible] = useState(secureTextEntry);

  const inputRef = useRef(null);

  const isActive = value !== null && value !== "";

  const labelProps = {
    isActive,
    isFocused,
    isError: error !== null,
    onPress: () => inputRef?.current?.focus(),
    labelColor,
  };

  return (
    <View>
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputContainerActive,
          error && styles.inputContainerError,
        ]}
      >
        <RNTextInput
          defaultValue={initialValue}
          value={value}
          style={[styles.input, multiline && styles.textarea]}
          autoCapitalize="none"
          onFocus={() => setFocused(true)}
          // onEndEditing={() => setFocused(false)}
          ref={(ref) => {
            inputRef.current = ref;
          }}
          onChangeText={setValue}
          underlineColorAndroid="transparent"
          secureTextEntry={isSecureVisible}
          multiline={multiline}
          {...otherProps}
        />
        {renderRightComponent && (
          <View style={styles.rightContainer}>
            {secureTextEntry && (
              <TouchableOpacity
                onPress={() => setSecureVisible(!isSecureVisible)}
              >
                <Icon name={isSecureVisible ? "eye" : "eye-off"} />
              </TouchableOpacity>
            )}
            {renderRightComponent()}
          </View>
        )}

        {secureTextEntry && (
          <View style={styles.rightContainer}>
            <TouchableOpacity
              onPress={() => setSecureVisible(!isSecureVisible)}
            >
              <Icon
                name={isSecureVisible ? "eye-off" : "eye"}
                color={Colors.gray25}
                size={scale(18)}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
      {label && <Label {...labelProps}>{label}</Label>}
      {!hideError && (
        <Text color="tertiary" style={styles.error}>
          {error}
        </Text>
      )}
    </View>
  );
};

TextField.propTypes = {
  value: PropTypes.string,
  error: PropTypes.any,
  label: PropTypes.string,
  labelColor: PropTypes.oneOf(colorProps),
  initialValue: PropTypes.string,
  renderRightComponent: PropTypes.func,
  hideError: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  multiline: PropTypes.bool,
};

TextField.defaultProps = {
  value: null,
  error: null,
  label: null,
  labelColor: "white",
  initialValue: "",
  renderRightComponent: null,
  hideError: false,
  secureTextEntry: false,
  multiline: false,
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: scale(3),
    borderWidth: 2,
    borderColor: Colors.gray10,
  },
  input: {
    height: scale(40),
    flex: 1,
    paddingHorizontal: scale(15),
    color: Colors.gray75,
    ...Fonts.p2(),
  },
  inputContainerActive: {
    borderColor: Colors.primary,
  },
  inputContainerError: {
    borderColor: Colors.tertiary,
  },
  error: {
    marginBottom: verticalScale(4),
  },
  rightContainer: {
    marginRight: scale(15),
  },
  textarea: {
    minHeight: scale(200),
  },
});

export default TextField;
