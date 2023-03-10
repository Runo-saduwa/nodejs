# The V8 JavaScript Engine

## JavaScript Engines: A Preamble

A JavaScript Engine is a complex software component that executes JavaScript. 

The pioneering JavaScript Engines were simply interpreters that read source code line by line and interprets to binary code that's easily executable by CPUs. They had no optimization capabilities making them slow and inefficient.

As we have constantly witnessed, technological advancement is an inevitable course. Modern JavaScript engines have improved significantly over the years delivering high-speed JS execution.

Examples of JavaScript Engines are:
- Spider Monkey: The first JavaScript Engine developed by the creator of JavaScript, Brendan Eich. It's currently used and maintained by Mozilla Foundation
- V8 JavaScript Engine: Developed by the Google Chrome team. It powers the Chrome browser and Node.js runtime environment.
- Chakra: Developed in Microsoft for Internet Explorer.

They all follow similar principles and processes to execute JavaScript. However, the V8 JavaScript Engine is the most popular engine admist because apart from its usage in the famous Google Chrome browser, it powers Node.js runtime environment that birthed the possibility of running JavaScript code on servers. 

It unlocked a whole new realm for JavaScript and expanded the possibilities of what JavaScript can do outside the browser client.


## V8 JavaScript Engine: What it is

V8 JavaScript Engine is a high-performance JIT (Just-In-Time) compiler that converts JavaScript code to executable low-level/machine code. It can run standalone or in C++ runtime environments like Chrome and Node.js. 

Computer CPUs understand only binary code (0s and 1s). JavaScript and all other human-readable languages (High-level languages) like C++ and Python must be translated to machine code to be executable.

Traditionally, This is achieved either by Compilation or Interpretation.

In Compilation or AOT (Ahead-Of-Time) compilation, the entire high-level language code is converted into machine code at once and written to a binary file that can be executed at any time. It takes two (2) steps:

- the conversion step to binary code
- and the execution step.

In Interpretation, it runs through the high-level language source code and executes it line by line. It takes just one step but it's much slower and less efficient than Compilation because at runtime each line of code has to go through an interpretation process which significantly increases runtime making the process slow.

The V8 JavaScript engine implements JIT (Just-In-Time) compilation.

JIT Compilation combines the best of both worlds from Compilation and Interpretation. It takes the entire code, converts it into machine code at once, and executes it immediately.

## How the V8 engine is how it works:

- It takes your Javascript source code and parses it.
- The parser generates an abstract syntax tree (AST) from the source code.
- V8's interpreter (Ignition) generates bytecode from the AST that the compiler can understand.
- Ignition interprets the bytecode to non-optimized machine code and executes it immediately.
- V8's optimizing compiler (TurboFan) optionally replaces bytecode sections with optimized machine code.
- And it executes the optimized machine code again.

## What makes V8 deliver high-speed JS execution:

- It harnesses the power of Ignition which is V8's baseline compiler to interpret source code to un-optimized machine code and executes immediately.
- It utilizes TurboFan, V8's optimizing compiler for the optimization of hot functions and compiles them into machine code.
- It compiles and optimizes code at runtime

## Key takeaways:

- V8 delivers high-speed JS executing at runtime.
- V8 implements JIT (Just-In-Time) compilation.
- V8 has two (2) compilers. A baseline compiler, Ignition, and an optimizing compiler, TurboFan.
- V8 defaults to using the baseline compiler to generate bytecode that is easily interpreted to machine code and optionally uses the optimizing compiler to generate machine code.

## References

- [V8: Behind the Scenes (November Edition feat. Ignition+TurboFan and ES2015)](https://benediktmeurer.de/2016/11/25/v8-behind-the-scenes-november-edition)
- [The JavaScript engine and hot functions](https://medium.com/@harumhelmy/the-javascript-engine-and-hot-functions-a-beginners-exploration-part-2-f4e351631229)
- [What is V8 JavaScript Engine](https://www.stackpath.com/edge-academy/what-is-v8-javascript-engine/)
- [How JavaScript Works: Under the Hood of the V8 Engine](https://www.freecodecamp.org/news/javascript-under-the-hood-v8/)
