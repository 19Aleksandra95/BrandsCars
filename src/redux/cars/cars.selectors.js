export const selectCars = (state) => state.carsStore.cars;
export const selectFavorites = (state) => state.carStore.favorites;
export const selectBrandsCars = (state) => state.carStore.brandsCars;
export const selectIsLoading = (state) => state.autosStore.isLoading;
export const selectError = (state) => state.autosStore.error;