---
"emoji-blast": minor
---

Replaced `physics.gravity: number` with `physics.gravity: { acceleration, angle }`, adding a configurable gravity angle

`acceleration` is the magnitude applied each tick and `angle` is the direction to apply it in, in degrees clockwise from straight up.
The default is `{ acceleration: 0.35, angle: 180 }`, which matches the previous straight-down behavior of `gravity: 0.35`.
Both properties are optional.

### Migration

**Breaking:** passing a `number` for `physics.gravity` now throws a `TypeError`.
Wrap the previous number in an object as `acceleration`:

```diff
 emojiBlast({
 	physics: {
-		gravity: -0.35,
+		gravity: { acceleration: -0.35 },
 	},
 });
```

`defaultPhysics.gravity` is now an object, so uses of it need the `acceleration` property:

```diff
-gravity: -defaultPhysics.gravity,
+gravity: { acceleration: -defaultPhysics.gravity.acceleration },
```

`EmojiActor`'s `update()` takes `gravity` as a `Partial<EmojiGravity>`, and its `gravity` getter returns an `EmojiGravity` rather than a `number`:

```diff
-actor.update({ gravity: 0 });
+actor.update({ gravity: { acceleration: 0 } });

-const g = actor.gravity;
+const g = actor.gravity.acceleration;
```

TypeScript consumers typing physics values themselves can import the new `EmojiGravity` interface.
