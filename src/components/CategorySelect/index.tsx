import React from "react";
import { ScrollView } from "react-native";

import { categories } from "../../utils/categories";
import { Category } from "../Category";

import { styles } from "./styles";

type CategorySelectProps = {
  categorySelected: string;
  onSelectCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
};

export function CategorySelect({
  categorySelected,
  onSelectCategory,
  hasCheckBox = false,
}: CategorySelectProps) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          hasCheckBox={hasCheckBox}
          onPress={() => onSelectCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
}
