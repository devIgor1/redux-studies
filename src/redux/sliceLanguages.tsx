import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Languages {
  name: string
  favorite: boolean
}

const INITIAL_STATE: Languages[] = [
  { name: "Next", favorite: false },
  { name: "Typescript", favorite: false },
  { name: "C#", favorite: false },
]

const sliceLanguages = createSlice({
  name: "languages",
  initialState: INITIAL_STATE,
  reducers: {
    addLanguages(state, { payload }: PayloadAction<string>) {
      return [...state, { name: payload, favorite: false }]
    },
    favLanguage(state, { payload }: PayloadAction<string>) {
      return state.map((st) =>
        st.name === payload ? { ...st, favorite: !st.favorite } : st
      )
    },
  },
})

export default sliceLanguages.reducer
export const { addLanguages, favLanguage } = sliceLanguages.actions

export const useLanguages = (state: any) => {
  return state.languages as Languages[]
}
