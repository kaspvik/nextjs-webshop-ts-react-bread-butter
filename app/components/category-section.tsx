"use client";

import { Stack } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import StyledButton from "./styled-button";

type Category = {
  id: string;
  name: string;
};

type Props = {
  categories: Category[];
};

export default function CategorySection({ categories }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = (categoryId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (categoryId === "all") {
      params.delete("categoryId");
    } else {
      params.set("categoryId", categoryId);
    }

    router.push(`/?${params.toString()}`, { scroll: false });
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        mt: 2,
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}>
      <StyledButton
        onClick={() => handleClick("all")}
        variant="outlined"
        color="secondary"
        emoji="🎸">
        All genres
      </StyledButton>
      {categories.map((category) => (
        <StyledButton
          key={category.id}
          color="secondary"
          onClick={() => handleClick(category.id)}
          variant="outlined">
          {category.name}
        </StyledButton>
      ))}
    </Stack>
  );
}
