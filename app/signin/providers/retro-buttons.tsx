import { Button } from "@mui/material";
import styled from "@emotion/styled";

export const RetroButton = styled(Button)`
  background-color: #d3d3d3;
  border: 1px solid black;
  color: black;
  font-weight: bold;
  font-family: Tahoma, sans-serif;
  text-transform: none;
  border-radius: 0;
  padding: 6px 12px;
  box-shadow: 2px 1px;
  width: 60%;

  &:hover {
    background-color: #bfbfbf;
  }

  .MuiButton-startIcon {
    margin-right: 8px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    right: 3px;
    bottom: 3px;
    border: 1px dotted black;
    pointer-events: none;
  }

`;
