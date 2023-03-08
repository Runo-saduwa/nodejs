# The V8 JavaScript Engine

A V8 JavaScript Engine is a JIT compiler that converts JS code to executable low-level/machine code.

Computers understand only binary code also known as machine code (0s and 1s). JavaScript and as well as other human readable languages (aka High-level languages) like C++ and Python need to be translated to machine code in order to be executable.

Traditionally, This can be achieved either by Compilation or Interpretation.

In Compilation the entire high-level language code is converted into machine code at once and written to a binary file that can be executed any time this is also known as AOT (ahead-of-time) compilation. It takes 2 steps

- the conversion step to binary code
- and the execution step.

In Interpretation, it runs through the high-level language source code and executes it line by line. It takes just one step but it's much slower and less efficent than Compilation because at runtime each line of code has to go through an interpretation process that can be executed and this can significantly increase runtime making the process slow.

The V8 engine implements JIT (Just-In-Time) compilation.

JIT Compilation combines the best of both of world from Compilation and Interpretation. it takes the entire code, converts it into machine code at once and executes it immediately.

### How the V8 engine is how it works:

- It takes your Javascript source code and parses it.
- The parser generates an Abstract syntax tree (AST) from the source code.
- V8's interpreter (Ignition) generates bytecode from the AST that the compiler can understand
- Ignition generates non-optimzed machine code and executes right away
- V8's optimizing compiler (TurboFan) optionally replaces bytecode sections with optimized machine code.
- And it executes the optimized machine code again.

### What makes V8 deliver high-speed JS executing:

- It uses Ignition which is V8's baseline compiler to interprete source code to un-optimized machine code and executes immediately
- It uses TurboFan, V8's optimizing compiler to optimize hot functions and compile them into machine code.
- It compiles and optimizes code at runtime

### V8 Engine alternatives

- SpiderMonkey


### References

- [V8: Behind the Scenes (November Edition feat. Ignition+TurboFan and ES2015)](https://benediktmeurer.de/2016/11/25/v8-behind-the-scenes-november-edition)
- [The JavaScript engine and hot functions](https://medium.com/@harumhelmy/the-javascript-engine-and-hot-functions-a-beginners-exploration-part-2-f4e351631229)
- [What is V8 JavaScript Engine](https://www.stackpath.com/edge-academy/what-is-v8-javascript-engine/)
- [How JavaScript Works: Under the Hood of the V8 Engine](https://www.freecodecamp.org/news/javascript-under-the-hood-v8/)
