// eslint-disable-next-line import/prefer-default-export
export const selectLibraryId = libraryId => ({
  type: 'select_library',
  payload: libraryId,
});
