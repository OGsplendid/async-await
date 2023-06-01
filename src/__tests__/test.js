import GameSavingLoader from '../GameSavingLoader';

test('should return correct object', async () => {
  const data = await GameSavingLoader.load();
  expect(JSON.parse(data)).toEqual(
    {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    },
  );
});
