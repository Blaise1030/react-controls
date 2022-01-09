# React-Controls-Statements

The statement below renders 3 `ELSE IF 1`. Works like normal if else controls.

```
    <IF c={false}>
        <div>IF</div>
        <div>IF</div>
        <div>IF</div>
    <ELSEIF c={true} />
        <div>ELSE IF 1</div>
        <div>ELSE IF 1</div>
        <div>ELSE IF 1</div>
    <ELSEIF c={true} />
        <div>ELSE IF 2</div>
        <div>ELSE IF 2</div>
        <div>ELSE IF 2</div>
    <ELSE />
        <div>ELSE</div>
        <div>ELSE</div>
        <div>ELSE</div>
    </IF>
```
