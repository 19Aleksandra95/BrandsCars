import { createSlice} from '@reduxjs/toolkit';

const initialState = {
    inOpenModal: false,
    modalData: 0,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
      openModal: (state, { payload }) => {
        state.inOpenModal = true;
        state.modalData = payload;
      },
      closeModal: (state) => {
        state.inOpenModal = false;
        state.modalData = 0;
      },
    },
  });
  
  export const { openModal, closeModal } = modalSlice.actions;
  export const modalReducer = modalSlice.reducer;
