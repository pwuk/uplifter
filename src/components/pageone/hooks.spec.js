import { renderHook, act } from "@testing-library/react-hooks/lib/pure.js";
import { useFetch } from "./hooks";
import { FLICKR_URL } from "./constants";
import fetchJsonp from "fetch-jsonp";
jest.mock('fetch-jsonp');

fetchJsonp.mockImplementation(() => () =>
    Promise.resolve({
      ok: true,
      json: (data) => data
    })
);

test("should create correct state from fetch calls", () => {
  const { result } = renderHook(() => useFetch(0));

  act(() => {
    expect(fetchJsonp).toHaveBeenCalledWith(FLICKR_URL, {"jsonpCallback": "jsoncallback"});

    expect(result).toEqual({current: false});
  });
})
