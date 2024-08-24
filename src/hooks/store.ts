import {
  TypedUseSelectorHook,
  useSelector as useGenericSelector,
  useDispatch as useGenericDispatch,
} from 'react-redux';
import { AppDispatch, RootState } from '@/types/store';

export const useAppSelector: TypedUseSelectorHook<RootState> =
  useGenericSelector;
export const useAppDispatch = () => useGenericDispatch<AppDispatch>();
