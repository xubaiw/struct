import { struct } from "./mod.ts";
import { assertEquals } from "https://deno.land/std@0.118.0/testing/asserts.ts";

Deno.test("Struct", async (t) => {
  const GdkWindowAttr = {
    title: "ptr",
    event_mask: "i32",
    x: "i32",
    y: "i32",
    width: "i32",
    height: "i32",
    wclass: "i32",
    visual: "ptr",
    window_type: "i32",
    cursor: "ptr",
    wmclass_name: "ptr",
    wmclass_class: "ptr",
    override_redirect: "i32",
    type_hint: "i32",
  } as const;

  await t.step("simple struct", () => {
    const s = struct(GdkWindowAttr);
    s.event_mask = 1;
    s.x = 2;
    s.y = 3;
    s.width = 4;
    s.height = 5;
    s.wclass = 6;
    s.window_type = 7;
    s.override_redirect = 8;
    s.type_hint = 9;
    assertEquals(s.event_mask, 1);
    assertEquals(s.x, 2);
    assertEquals(s.y, 3);
    assertEquals(s.width, 4);
    assertEquals(s.height, 5);
    assertEquals(s.wclass, 6);
    assertEquals(s.window_type, 7);
    assertEquals(s.override_redirect, 8);
    assertEquals(s.type_hint, 9);
  });
});
