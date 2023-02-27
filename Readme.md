### Jest and Sinon

# Test doubles
- We usually don't want anything external (such as
database calls) to influence the outcome of tests

# Setup jest
Create a new project
`yarn init -y`

Install dependencies
`yarn add -D jest typescript ts-jest @types/jest ts-node`

Initialize typescript
`npx tsc –init`

Configure jest
`yarn ts-jest config:init`

Make tests runnable
Add test script in package.json
`test: jest`


## spies.stubs.mock

# spies
- A test spy is a function that records arguments, return value, the value of this and exception thrown (if any) for all its calls. There are two types of spies: Some are anonymous functions, while others wrap methods that already exist in the system under test.
- calledOnce(), callCount(), calledWith()
- test argument, callback is callled

# stubs
- Come with all the functionality of spies, but they replace the target function.
- They have methods that can add custom behaviors including:
    - returning a specific value
    - throwing a specified exception
    - automatically invoking callbacks with provided arguments
    - defining behavior on nth call to stub
- Some common use cases include:
    - Replacing AJAX calls to prevent database calls
    - Triggering different code paths depending on function output
    - Testing output when a particular exception is thrown
- calledWith()

# mocks
-Most powerful and flexible version of the test doubles.
- Combine functionality of spies and stub.
-Mock return predefined value based on function call argument whereas stub return predefined value regardless of function call argument.
-

###################
# Conclusion
1. use spies when:
- you simply want to monitor and verify a function's
behavior

2. use stubs when:
-you want to modify a function's behavior and / or replace code that would difficult to test otherwise

3. use mocks when:
- you want to use a stub, but need to verify multiple specific behaviors
###################

# notes
- if bug is encounter write a test
- write a test with best case if you cannot write wrose case

