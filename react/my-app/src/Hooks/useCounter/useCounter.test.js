import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("renderHook", () => {
  test("should render the initial state", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test("should accept and render the same state", () => {
    const { result } = renderHook(() => useCounter({ initialCount: 15 }));
    expect(result.current.count).toBe(15);
  });

  test("should increase the value", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  test("should decrease the value", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});
