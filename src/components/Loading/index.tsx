import { Spinner } from "phosphor-react";
import React from "react";
import { LoadingContainer } from "./styles";

interface ILoadingProps {
  iconSize: number;
}

export default function Loading({ iconSize }: ILoadingProps) {
  return (
    <LoadingContainer>
      <Spinner size={iconSize}></Spinner>
    </LoadingContainer>
  );
}
