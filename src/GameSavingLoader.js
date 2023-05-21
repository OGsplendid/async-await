import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  async load() {
    const codedData = await read();
    const result = await (json(codedData));
    return result;
  }
}
