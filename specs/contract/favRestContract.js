/* eslint-disable max-len */
const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('10) Dapat mengembalikan restoran yg telah diambahkan', async () => {
    favoriteRestaurant.putRestaurant({id: 1});
    favoriteRestaurant.putRestaurant({id: 2});

    expect(await favoriteRestaurant.getRestaurant(1))
        .toEqual({id: 1});
    expect(await favoriteRestaurant.getRestaurant(2))
        .toEqual({id: 2});
    expect(await favoriteRestaurant.getRestaurant(3))
        .toEqual(undefined);
  });

  it('11) Tidak menambahkan restoran jika tidak punya properti yang benar', async () => {
    favoriteRestaurant.putRestaurant({aProperty: 'property'});

    expect(await favoriteRestaurant.getAllRestaurants())
        .toEqual([]);
  });

  it('12) Mengembalikan semua restoran yg telah ditambahkan', async () => {
    favoriteRestaurant.putRestaurant({id: 1});
    favoriteRestaurant.putRestaurant({id: 2});

    expect(await favoriteRestaurant.getAllRestaurants())
        .toEqual([
          {id: 1},
          {id: 2},
        ]);
  });

  it('13) Dapat menghapus restoran favorit', async () => {
    favoriteRestaurant.putRestaurant({id: 1});
    favoriteRestaurant.putRestaurant({id: 2});
    favoriteRestaurant.putRestaurant({id: 3});

    await favoriteRestaurant.deleteRestaurant(1);

    expect(await favoriteRestaurant.getAllRestaurants())
        .toEqual([
          {id: 2},
          {id: 3},
        ]);
  });

  it('14) Dapat menghapus restoran walaupun restoran belum pernah ditambahkan', async () => {
    favoriteRestaurant.putRestaurant({id: 1});
    favoriteRestaurant.putRestaurant({id: 2});
    favoriteRestaurant.putRestaurant({id: 3});

    await favoriteRestaurant.deleteRestaurant(4);

    expect(await favoriteRestaurant.getAllRestaurants())
        .toEqual([
          {id: 1},
          {id: 2},
          {id: 3},
        ]);
  });

  it('31) Dapat melakukan pencarian restoran', async () => {
    favoriteRestaurant.putRestaurant({id: 1, name: 'resto a'});
    favoriteRestaurant.putRestaurant({id: 2, name: 'resto b'});
    favoriteRestaurant.putRestaurant({id: 3, name: 'resto abc'});
    favoriteRestaurant.putRestaurant({id: 4, name: 'ini mah resto abcd'});
    expect(await favoriteRestaurant.searchRestaurants('resto a')).toEqual([
      {id: 1, name: 'resto a'},
      {id: 3, name: 'resto abc'},
      {id: 4, name: 'ini mah resto abcd'},
    ]);
  });
};

export {itActsAsFavoriteRestaurantModel};
