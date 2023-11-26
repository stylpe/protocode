# Intro

## Purpose
I want a programming environment that's fun, intuitive and high level. 

I want my programs to be readable and understandable by a broad audience, ideally on the same level as a cooking recipe (so it's fine to expect the reader to understand what `100g flour` means)

I want to make it fit for purpose, which explicitly means it is not an all-purpose programming tool.

I want the language, the standard library and the tooling to work together to guide the developer to making the best choices, like not affording complexity by not allowing nested keywords, and promoting liberal usage of highly specific and constrained types.

## Process
Input is a set of light markup documents. These are converted to an intermediate format called [Protocode](#Protocode) by looking for structure and text that follow conventions, which can then be converted into the target programming language.

Supported input formats are whatever is available in the Unified ecosystem. Small adapters or configuration might be needed for formats that use unusual or custom AST node names.

Supported output formats are provided by Protocode Standard Library Bindings, which consist of raw code keyword implementations for that language, plus possibly some good old JavaScript to deal with cases that would be way more work to support flexibly enough with just pseudocode. But maybe that's gonna be rare.

## Protocode
A type of Unified syntax tree, codenamed **procast** from PROtoCode Abstract Syntax Tree (which is funny because I'm a notorious procastinator).



