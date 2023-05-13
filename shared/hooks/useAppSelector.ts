import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { RootState } from '@/app/providers/storeProvider/config/store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
