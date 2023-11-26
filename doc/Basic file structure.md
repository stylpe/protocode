You can put stuff before the first heading, but it will be ignored by the transpiler. Front matter also doesn't do anything for now.

# Basic file structure
A level 1 heading defines a **Module**. Like a C# namespace or Java package probably.

A level 2 heading defines a **Section**. There are certain section names that are recognized and confer behavior and semantics to the contents of that section, described below.

## Keywords
Keywords are like functions, methods, named procedures. Just like Robot Framework.

Keywords are reusable, importable.

TODO: Should only keywords be usable in procedures?

A keyword consists of a *name* given as a level 3 heading, and either a list of keywords to invoke or a code block. It may contain other content anywhere inside, which will only act as comments / documentation.

You cannot mix raw code and keywords in a procedure. TODO: Provide rationale.

TODO: Should unordered lists be allowed?

### Say hello
```
console.log("Hello, World!")
```

---

A keyword ends either where the next section starts (like another keyword) or at a horizontal rule

A keyword may also have *parameters*, which are defined by inline code markup. They may appear anywhere in the name, not just at the end. 

### Say hello to `somebody`
```
console.log(`Hello, ${somebody}!`)
```

### Say hello via argument
1. Say hello to "World"

---

Parameters may also specify a *type* and constraints, separated by a comma after the name. 

### Compute ratio of `numerator, a real number` and `denominator, a nonzero real number`
```
numerator / denominator 
```
## Module Keywords
You can also make keywords that can only be used in certain contexts. In this case, keywords defined here would be made for use at the module level, i.e. after a level 1 heading and before any level 2 headings.

## Actions / Tasks / Commands
TODO: Land on a term
Defines procedures meant to be invoked externally, like by end users, build scripts and so on. 

Should not have inline parameters, but instead use cli keywords to parse parameters.

## Tests
Just like actions but with distinct semantics.

## Entrypoint
Acts as a main function if the current file is being invoked directly (for example from the command line)

TODO: Maybe this can just be an Action named "Main" by convention. 

## Types
Types are defined in terms of primitives and constraints. 

See also [Type System](Type%20System.md)

## Classes 
The classic OOP data structure with associated behaviors, inheritance, polymorphism, encapsulation, etc.

## Conventions
Maybe? To specify things like:
- "string" is understood as defined by [Infra](https://infra.spec.whatwg.org/#strings) (a sequence of UTF-16 code units)

Project-wide, or at least inheritable by file system hierarchy. 

