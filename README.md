# capacitor-ostimer

OsTimer

## Install

```bash
npm install capacitor-ostimer
npx cap sync
```

## API

<docgen-index>

* [`tick(...)`](#tick)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### tick(...)

```typescript
tick(callback: OsTimerCallback) => Promise<CallbackID>
```

| Param          | Type                                                        |
| -------------- | ----------------------------------------------------------- |
| **`callback`** | <code><a href="#ostimercallback">OsTimerCallback</a></code> |

**Returns:** <code>Promise&lt;string&gt;</code>

--------------------


### Type Aliases


#### OsTimerCallback

<code>(tick: number | null, err?: any): void</code>


#### CallbackID

<code>string</code>

</docgen-api>
