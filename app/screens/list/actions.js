import { users } from '../../api/api';

  export function list() {
    return {
      type: "MUSIC_LIST",
      payload: users.list()
    }
  }