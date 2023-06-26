export const selectCartModule = (state) => state.cart;

export const selectFilmAmount = (state, id) => selectCartModule(state)[id] || 0;

export const selectStoredFilms = (state) => Object.keys(selectCartModule(state));

export const selectTotalTicketsAmount = (state) =>
    Object.values(selectCartModule(state)).reduce((acc, el) => el + acc, 0);