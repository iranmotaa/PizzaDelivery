import React from "react";
import GroupCard from "./GroupCard";
import Logo from "./Logo";
import Tabs from "./Tabs";
import TitleSection from "./TitleSection";

export default function PizzaHome() {
  return (
    <>
      <Logo />
      <Tabs />
      <TitleSection title="Pizza pequena" />
      <GroupCard titleCard="Pequena" />
      <TitleSection title="Pizza média" />
      <GroupCard titleCard="Média" />
      <TitleSection title="Pizza grande" />
      <GroupCard titleCard="Grande" />
    </>
  );
}
