# Algorithm Notes

## Section 01

Basic constructs of programming: variables, data types, equivalence, conditionals, functions, loops, logic operators ....

**`Variables`**:

A variable is a container (memory and/or location) assigned a label. Variables can hold anything (e.g., `string`) assigned to them. Variables are called by referencing their corresponding label.

```
    var varLabel = 'var value';
    console.log(varLabel);
```

**`Data Types`**:

Containers hold objects: `Numbers`, `String`, `Boolean`.
* `Number` can store a range of values (large, small, negative, floating-point, etc.);
* `String` is a sequence of characters set within `'quotes'`;
* `Boolean` has *only* two values `true` or `false`.

**`Equality` and `Non-Equality`**

* `=` and `==` are not equivalent;
* `=` sets objects (e.g., interpret `(X = Y)` as *Assign `Y` to `X`*);
* `==` tests objects (e.g., interpret `(X == Y)` as *Are `X` and `Y` equal?* [Note: converts `X` to `Y` before testing equivalence]);
* `===` tests objects (e.g., interpret `(X === Y)` as *Are `X` and `Y` equal?* [Note: does not convert `X` to `Y` before testing equivalence]);

**`Logical Operators`**

* `&&`: operator *AND* combines 2 logical tests; returning only if both operands test true:

    ```
        if (X == 'Ray Gun' && Y >= 77) { goRayGunning(); }
    ```

* `||`: operator *OR* combines 2 logical tests; returning if either operand tests true:

    ```
        if (X == 'Ray Gun' || Y >= 77) { goRayGunning(); }
    ```

* `!`: operator *NOT* inverts 2 logical tests; returning if either operand does not test true:

    ```
        if (!77) { goRayGunning(); }
    ```

* Example Logic Statement:

    ```
        if (CONDITION_1 && CONDITION_2){
            // body of `IF`: runs if CONDITION_1 is true AND CONDITION_2 is true
        }
        else {
            // body of `(THEN) ELSE`: runs if CONDITION_1 is false OR CONDITION_2 is false
        }
    ```

---

**`Conditional` (if / else) statements**:

```
    if (CONDITION_1 && CONDITION_2)
        {
            // body of ‘IF’: runs if CONDITION_1 is true AND CONDITION_2 is true
        }
    else
        {
            // body of `(THEN) ELSE`: runs if CONDITION_1 is false or CONDITION_2 is false
        }
```

**`Functions`**:

```
    //  Declaring standalone functions
        function MY_FUNCTION(PARAMETER_1, PARAMETER_2)
            {
                // body of `f(x)unction`: runs if f(x)unction is invoked
            }        


    //  Calling standalone functions. ARGUMENTS passed by a caller enter the function as PARAMETERS
        function MY_FUNCTION(ARGUMENT_1, ARGUMENT_2);
```

**`For` Loops**:

```
    for (INITIALIZATION; TEST; INCREMENT/DECREMENT)
        {
            // body of `LOOP`: runs repeatedly while TEST is true
            // INIT.   TEST?-BODY-INCREMENT.   TEST?-BODY-INCREMENT.   TEST?-[exit]
        }
```
