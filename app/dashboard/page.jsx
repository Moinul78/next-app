"use client";
import { useGlobalContext } from "../../context/context"

export default function NextPage() {
  const { updateUser } = useGlobalContext();
  updateUser();
  return <h1>I am dashboard</h1>
}