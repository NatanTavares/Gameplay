import React, { useState } from "react";
import { TextInput, TextInputProps } from "react-native";

import { styles } from "./styles";

type TextAreaProps = TextInputProps;

export function TextArea({ ...rest }: TextAreaProps) {
  return <TextInput style={styles.container} {...rest} />;
}
