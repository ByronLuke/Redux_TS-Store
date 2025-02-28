import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { useSelector, type TypedUseSelectorHook } from "react-redux";

type DispatchFunction = ()=> AppDispatch;

export const useCartDispatch : DispatchFunction = useDispatch;

export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector