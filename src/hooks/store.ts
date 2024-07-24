import {
  TypedUseSelectorHook,
  useSelector as useGenericSelector,
  useDispatch as useGenericDispatch,
} from 'react-redux';
import { AppDispatch, RootState } from '@/types/store';

export const useSelector: TypedUseSelectorHook<RootState> = useGenericSelector;
export const useDispatch = () => useGenericDispatch<AppDispatch>();
