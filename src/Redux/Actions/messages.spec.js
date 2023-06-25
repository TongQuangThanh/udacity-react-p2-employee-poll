import { PENDING, SUCCESS, FAIL } from "./index";
import { failStore, pendingStore, successStore } from "./messages";

const message = "dum message";

describe('message action', () => {
  it('will return correct pending store', () => {
    expect(pendingStore()).toEqual({ type: PENDING });
  });

  it('will return correct success store', () => {
    expect(successStore(message)).toEqual({ type: SUCCESS, message });
  });

  it('will return correct fail store', () => {
    expect(failStore(message)).toEqual({ type: FAIL, message });
  });
});
